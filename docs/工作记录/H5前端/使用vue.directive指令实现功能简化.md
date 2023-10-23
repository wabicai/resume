# 使用 vue.directive 指令实现功能简化

## 背景

项目有一些通用的能力，可以通过一些简单的指令，直接编写在 HTML 代码里，通过类似 v-xxx 的指令，实现功能的简化。

## 实现

### v-pr：预览奖励

```js
import { $jump2, jumpMethodsAlbum } from "@/mixins/bridgeMethod";
// 预览商店奖励
export default {
  bind: (el, { value, modifiers }, vnode) => {
    el.__click_params__ = {
      ...value,
    };
    const vueInstance = vnode.context;
    const previewReward = (e) => {
      if (modifiers.stop) e.stopPropagation();
      if (modifiers.prevent) e.preventDefault();
      const { type, id, skin_id, skinId, is_jump2 } = el.__click_params__;
      const rewardId = id || skin_id || skinId || 0;
      // skin_id 可能为 0, 不用加判断, 没有此物品调用预览接口也不会报错
      if (is_jump2) {
        $jump2(
          `snake://storeItemView?id=${rewardId}&type=${type}`,
          vueInstance
        );
      } else {
        jumpMethodsAlbum.previewStoreGoods({
          type,
          id: rewardId,
        });
      }
    };
    el.__click_handler__ = previewReward;
    el.addEventListener("click", previewReward);
  },
  update: (el, binding) => {
    el.__click_params__ = {
      ...binding.value,
    };
  },
  unbind: (el) => {
    // 清理
    el.__click_params__ = null;
    delete el.__click_params__;
    el.removeEventListener("click", el.__click_handler__);
    delete el.__click_handler__;
  },
};
// 使用
Vue.directive("pr", previewReward);
```

### v-iv：使用七牛云服务对 img 的 Src 图片进行压缩

```js
// http://78re52.com0.z0.glb.qiniucdn.com/docs/v6/api/reference/fop/image/imageview2.html

// https://www.qiniu.com/prices/dora
// 每月 0 - 20 TB：免费

// 20 TB 以上：0.025 元/GB

const replaceUrl = (el, binding) => {
  const src = el.src;
  const value =
    typeof binding.value === "object"
      ? binding.value
      : {
          w: binding.value,
        };
  const { mode = 2, w, h, q, format } = value;
  let imageUrl = "imageView2/" + encodeURIComponent(mode);
  imageUrl += w ? "/w/" + encodeURIComponent(w) : "";
  imageUrl += h ? "/h/" + encodeURIComponent(h) : "";
  imageUrl += q ? "/q/" + encodeURIComponent(q) : "";
  imageUrl += format ? "/format/" + encodeURIComponent(format) : "";

  if (
    src.indexOf("imageView2") === -1 &&
    src.indexOf("//sca.tcsdzz.com/") !== -1
  ) {
    imageUrl = `${src}${src.indexOf("?") === -1 ? "?" : "&"}${imageUrl}`;
  } else {
    imageUrl = src;
  }

  el.src = imageUrl;
};

export default {
  inserted: replaceUrl,
  update: replaceUrl,
};
```
