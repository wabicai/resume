# 通过 HOC 封装重复代码逻辑

```js
import Vue from "vue";
import { $hideLoading, $getUserInfo } from "@/mixins/bridgeMethod";
import { isInTcsdzzApp } from "@/utils/util.js";

// wrap component with baseParams from $getUserInfo

/**
 * 每个子组件上都挂载 baseParams 参数
 * 子组件中 this.baseParams 访问基础参数信息
 */
Vue.mixin({
  created: function () {
    if (this.baseParams || this.$data?.baseParams) return;
    Object.defineProperty(this, "baseParams", {
      get: () => {
        return this.$parent?.$data?.baseParams || this.$parent?.baseParams;
      },
    });
  },
});

export const withUserInfo = (com) => {
  const { data, created, ...rest } = com;
  return {
    data() {
      return {
        ...(data?.call(com) ?? {}),
        baseParams: {},
      };
    },
    created() {
      if (isInTcsdzzApp) {
        $hideLoading();
      }

      document.body.addEventListener("touchstart", () => {});
      // 这里允许pc端带有uid的请求
      $getUserInfo().then((baseParams) => {
        this.baseParams = baseParams;
        created?.call(this);
      });
    },
    ...rest,
  };
};
```
