# 开发：使用 vue.directive 指令实现功能简化

## 背景

在Vue项目开发中,我们经常会遇到一些重复的DOM操作逻辑,如:
- 元素懒加载
- 点击外部关闭
- 长按事件
- 权限控制
- 防抖节流
- 复制到剪贴板
- 图片加载错误处理

如果在每个组件中都重复实现这些功能,会导致代码冗余,维护困难。Vue的自定义指令(directive)提供了一种优雅的方式来封装这些可复用的DOM操作逻辑。

## 问题分析

### 1. 代码重复问题

```javascript
// 每个组件都要写类似的代码
export default {
  mounted() {
    // 懒加载逻辑
    const observer = new IntersectionObserver(entries => {
      // ...
    });
    observer.observe(this.$el);
  },
  beforeDestroy() {
    // 清理
  }
}
```

### 2. 维护成本高

- 相同逻辑散落在不同组件中
- 修改功能需要改动多个文件
- 难以统一优化和升级

### 3. 代码可读性差

- 组件逻辑和DOM操作混在一起
- 难以快速理解组件的真正业务逻辑

## 解决方案

### 1. 懒加载指令

```javascript
// directives/lazy.js

/**
 * 图片/组件懒加载指令
 * 用法: v-lazy="imageUrl" 或 v-lazy:component
 */
export default {
  inserted(el, binding) {
    // 创建观察器
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 元素进入视口
            if (binding.modifiers.component) {
              // 组件懒加载
              el.style.display = 'block';

              // 触发自定义事件
              el.dispatchEvent(new CustomEvent('lazy-loaded'));
            } else {
              // 图片懒加载
              const img = el.tagName === 'IMG' ? el : el.querySelector('img');
              if (img) {
                img.src = binding.value;
                img.onload = () => {
                  el.classList.add('loaded');
                };
                img.onerror = () => {
                  // 加载失败，使用默认图片
                  img.src = binding.arg || '/default.png';
                  el.classList.add('error');
                };
              }
            }

            // 停止观察
            observer.unobserve(el);
          }
        });
      },
      {
        rootMargin: '50px', // 提前50px开始加载
        threshold: 0.01
      }
    );

    // 保存observer以便清理
    el._lazyObserver = observer;

    // 开始观察
    observer.observe(el);
  },

  unbind(el) {
    // 清理观察器
    if (el._lazyObserver) {
      el._lazyObserver.disconnect();
      delete el._lazyObserver;
    }
  }
};
```

### 2. 点击外部关闭指令

```javascript
// directives/clickOutside.js

/**
 * 点击外部关闭指令
 * 用法: v-click-outside="handleClose"
 */
export default {
  bind(el, binding, vnode) {
    function handleClickOutside(event) {
      // 检查点击是否在元素外部
      if (!el.contains(event.target)) {
        // 调用绑定的方法
        if (typeof binding.value === 'function') {
          binding.value(event);
        }
      }
    }

    // 保存处理函数以便移除
    el._clickOutsideHandler = handleClickOutside;

    // 延迟绑定,避免立即触发
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);
  },

  unbind(el) {
    // 移除事件监听
    if (el._clickOutsideHandler) {
      document.removeEventListener('click', el._clickOutsideHandler);
      delete el._clickOutsideHandler;
    }
  }
};
```

### 3. 长按指令

```javascript
// directives/longpress.js

/**
 * 长按指令
 * 用法: v-longpress="handleLongPress" v-longpress:1000="handleLongPress"
 */
export default {
  bind(el, binding) {
    // 长按时间(毫秒)
    const duration = parseInt(binding.arg) || 500;

    let pressTimer = null;

    // 开始按下
    function start(event) {
      if (event.type === 'click' && event.button !== 0) {
        return;
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 触发长按回调
          if (typeof binding.value === 'function') {
            binding.value(event);
          }
        }, duration);
      }
    }

    // 取消按下
    function cancel() {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    }

    // 绑定事件
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);

    // 保存清理函数
    el._longpressCleanup = () => {
      el.removeEventListener('mousedown', start);
      el.removeEventListener('touchstart', start);
      el.removeEventListener('click', cancel);
      el.removeEventListener('mouseout', cancel);
      el.removeEventListener('touchend', cancel);
      el.removeEventListener('touchcancel', cancel);
      cancel();
    };
  },

  unbind(el) {
    if (el._longpressCleanup) {
      el._longpressCleanup();
      delete el._longpressCleanup;
    }
  }
};
```

### 4. 权限控制指令

```javascript
// directives/permission.js

/**
 * 权限控制指令
 * 用法: v-permission="'admin'" 或 v-permission="['admin', 'editor']"
 */
export default {
  inserted(el, binding, vnode) {
    const { value } = binding;

    // 从Vuex或其他地方获取当前用户权限
    const userPermissions = vnode.context.$store?.state.user?.permissions || [];

    // 检查权限
    let hasPermission = false;

    if (Array.isArray(value)) {
      // 数组形式:只要有其中一个权限即可
      hasPermission = value.some(permission =>
        userPermissions.includes(permission)
      );
    } else if (typeof value === 'string') {
      // 字符串形式
      hasPermission = userPermissions.includes(value);
    }

    // 没有权限则移除元素
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }
};
```

### 5. 防抖节流指令

```javascript
// directives/debounce.js

/**
 * 防抖指令
 * 用法: v-debounce:500="handleInput"
 */
export default {
  inserted(el, binding) {
    const delay = parseInt(binding.arg) || 300;
    let timer = null;

    function debounceHandler(event) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        if (typeof binding.value === 'function') {
          binding.value(event);
        }
      }, delay);
    }

    // 获取事件类型
    const eventType = binding.modifiers.input ? 'input' : 'click';

    el.addEventListener(eventType, debounceHandler);

    // 保存清理函数
    el._debounceCleanup = () => {
      if (timer) {
        clearTimeout(timer);
      }
      el.removeEventListener(eventType, debounceHandler);
    };
  },

  unbind(el) {
    if (el._debounceCleanup) {
      el._debounceCleanup();
      delete el._debounceCleanup;
    }
  }
};
```

```javascript
// directives/throttle.js

/**
 * 节流指令
 * 用法: v-throttle:500="handleScroll"
 */
export default {
  inserted(el, binding) {
    const delay = parseInt(binding.arg) || 300;
    let lastTime = 0;

    function throttleHandler(event) {
      const now = Date.now();

      if (now - lastTime >= delay) {
        if (typeof binding.value === 'function') {
          binding.value(event);
        }
        lastTime = now;
      }
    }

    const eventType = binding.modifiers.scroll ? 'scroll' : 'click';

    el.addEventListener(eventType, throttleHandler);

    el._throttleCleanup = () => {
      el.removeEventListener(eventType, throttleHandler);
    };
  },

  unbind(el) {
    if (el._throttleCleanup) {
      el._throttleCleanup();
      delete el._throttleCleanup;
    }
  }
};
```

### 6. 复制到剪贴板指令

```javascript
// directives/copy.js

/**
 * 复制到剪贴板指令
 * 用法: v-copy="textToCopy"
 */
export default {
  bind(el, binding) {
    function handleCopy() {
      const text = binding.value;

      // 使用现代API
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
          .then(() => {
            el.dispatchEvent(new CustomEvent('copy-success', { detail: text }));
          })
          .catch(err => {
            el.dispatchEvent(new CustomEvent('copy-error', { detail: err }));
          });
      } else {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
          const successful = document.execCommand('copy');
          if (successful) {
            el.dispatchEvent(new CustomEvent('copy-success', { detail: text }));
          } else {
            el.dispatchEvent(new CustomEvent('copy-error'));
          }
        } catch (err) {
          el.dispatchEvent(new CustomEvent('copy-error', { detail: err }));
        }

        document.body.removeChild(textarea);
      }
    }

    el.addEventListener('click', handleCopy);
    el._copyHandler = handleCopy;
  },

  unbind(el) {
    if (el._copyHandler) {
      el.removeEventListener('click', el._copyHandler);
      delete el._copyHandler;
    }
  }
};
```

### 7. 自动聚焦指令

```javascript
// directives/focus.js

/**
 * 自动聚焦指令
 * 用法: v-focus 或 v-focus="shouldFocus"
 */
export default {
  inserted(el, binding) {
    // 如果没有传值,或值为true,则聚焦
    const shouldFocus = binding.value === undefined || binding.value;

    if (shouldFocus) {
      // 延迟执行以确保DOM已渲染
      setTimeout(() => {
        // 如果是input/textarea,直接聚焦
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.focus();
        } else {
          // 否则查找第一个可聚焦元素
          const focusable = el.querySelector('input, textarea, [tabindex]');
          if (focusable) {
            focusable.focus();
          }
        }
      }, 100);
    }
  },

  update(el, binding) {
    // 值改变时重新检查
    if (binding.value && !binding.oldValue) {
      setTimeout(() => {
        el.focus?.();
      }, 100);
    }
  }
};
```

### 8. 无限滚动指令

```javascript
// directives/infiniteScroll.js

/**
 * 无限滚动指令
 * 用法: v-infinite-scroll="loadMore" v-infinite-scroll:100="loadMore"
 */
export default {
  inserted(el, binding) {
    // 距离底部多少像素时触发
    const distance = parseInt(binding.arg) || 50;
    let isLoading = false;

    function handleScroll() {
      if (isLoading) return;

      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;

      // 检查是否接近底部
      if (scrollHeight - scrollTop - clientHeight < distance) {
        isLoading = true;

        // 调用加载函数
        if (typeof binding.value === 'function') {
          const result = binding.value();

          // 如果返回Promise,等待完成后重置loading状态
          if (result && typeof result.then === 'function') {
            result.finally(() => {
              isLoading = false;
            });
          } else {
            setTimeout(() => {
              isLoading = false;
            }, 300);
          }
        }
      }
    }

    el.addEventListener('scroll', handleScroll);
    el._infiniteScrollHandler = handleScroll;
  },

  unbind(el) {
    if (el._infiniteScrollHandler) {
      el.removeEventListener('scroll', el._infiniteScrollHandler);
      delete el._infiniteScrollHandler;
    }
  }
};
```

### 9. 全局注册指令

```javascript
// directives/index.js
import lazy from './lazy';
import clickOutside from './clickOutside';
import longpress from './longpress';
import permission from './permission';
import debounce from './debounce';
import throttle from './throttle';
import copy from './copy';
import focus from './focus';
import infiniteScroll from './infiniteScroll';

const directives = {
  lazy,
  clickOutside,
  longpress,
  permission,
  debounce,
  throttle,
  copy,
  focus,
  infiniteScroll
};

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};
```

```javascript
// main.js
import Vue from 'vue';
import directives from './directives';

Vue.use(directives);
```

### 10. 使用示例

```vue
<template>
  <div class="page">
    <!-- 懒加载图片 -->
    <img v-lazy="imageUrl" alt="lazy image" />

    <!-- 懒加载组件 -->
    <heavy-component v-lazy:component v-show="false" />

    <!-- 点击外部关闭 -->
    <div v-show="showMenu" v-click-outside="closeMenu">
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
      </ul>
    </div>

    <!-- 长按删除 -->
    <button v-longpress:1000="handleDelete">
      长按删除
    </button>

    <!-- 权限控制 -->
    <button v-permission="'admin'">管理员可见</button>
    <button v-permission="['admin', 'editor']">管理员或编辑可见</button>

    <!-- 防抖搜索 -->
    <input
      v-model="keyword"
      v-debounce:500.input="handleSearch"
      placeholder="搜索..."
    />

    <!-- 节流滚动 -->
    <div
      class="scroll-container"
      v-throttle:200.scroll="handleScroll"
    >
      <!-- 内容 -->
    </div>

    <!-- 复制文本 -->
    <button
      v-copy="copyText"
      @copy-success="handleCopySuccess"
      @copy-error="handleCopyError"
    >
      复制
    </button>

    <!-- 自动聚焦 -->
    <input v-focus placeholder="自动聚焦" />

    <!-- 无限滚动 -->
    <div
      class="list-container"
      v-infinite-scroll="loadMore"
      v-infinite-scroll:100
    >
      <div v-for="item in list" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://example.com/image.jpg',
      showMenu: false,
      keyword: '',
      copyText: 'Hello World',
      list: []
    };
  },

  methods: {
    closeMenu() {
      this.showMenu = false;
    },

    handleDelete() {
      console.log('长按删除');
    },

    handleSearch(event) {
      console.log('搜索:', this.keyword);
    },

    handleScroll(event) {
      console.log('滚动位置:', event.target.scrollTop);
    },

    handleCopySuccess(event) {
      this.$message.success('复制成功');
    },

    handleCopyError(event) {
      this.$message.error('复制失败');
    },

    async loadMore() {
      // 加载更多数据
      const newData = await this.fetchData();
      this.list.push(...newData);
    }
  }
};
</script>
```

## 效果与总结

### 优化效果

**代码复用**
- 相同功能只需写一次
- 减少代码量约40%
- 降低维护成本

**可读性提升**
- 指令名称清晰表达功能
- 组件逻辑更聚焦业务
- 新人更容易理解代码

**开发效率**
- 快速添加常用功能
- 无需重复实现相同逻辑
- 统一的API使用方式

### 经验总结

1. **指令命名要清晰**
   - 使用动词或形容词
   - 避免缩写
   - 保持一致的命名风格

2. **资源清理很重要**
   - 在unbind中清理事件监听
   - 清理定时器和观察器
   - 避免内存泄漏

3. **提供灵活的配置**
   - 使用修饰符提供选项
   - 使用参数传递配置
   - 支持函数和值两种形式

4. **注意性能**
   - 避免频繁的DOM操作
   - 合理使用节流防抖
   - 及时清理不需要的观察器

5. **错误处理**
   - 提供降级方案
   - 捕获可能的异常
   - 给出友好的提示

### 注意事项

1. **不要滥用指令**
   - 简单逻辑直接在组件中实现
   - 只有可复用的才封装成指令
   - 避免过度抽象

2. **文档很重要**
   - 详细说明使用方法
   - 提供使用示例
   - 说明注意事项

3. **版本兼容性**
   - 考虑Vue2和Vue3的差异
   - 提供polyfill
   - 注明浏览器兼容性

### 未来优化方向

1. 支持TypeScript类型定义
2. 提供更多内置指令
3. 实现指令的组合使用
4. 提供指令测试工具
5. 创建指令市场/库
