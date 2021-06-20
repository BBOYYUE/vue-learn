<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <h1>vue 练习</h1>

    <div>
      <button>- 放大字体 -</button>
      <button @click="nextPage">- 请求数据按钮 -</button>
    </div>
    <ul >
      <li v-for="item in lists" v-bind:key="item.id">
        <childComponent :data="item" @alertName="alertName"></childComponent>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import childComponent from "../components/childComponent.vue";

export default {
  name: "Property",
  components: { childComponent },
  /**
   * 顶级 property: data
   *
   * 组件的 data 选项是一个函数。
   * Vue 在创建新组件实例的过程中调用此函数。
   * 它应该返回一个对象，然后 Vue 会通过响应性系统将其包裹起来，并以 $data 的形式存储在组件实例中。
   */
  data() {
    //
    return {
      page: 0,
      code: 0,
      msg: "请求成功",
      data: {
        records: [],
      },
      postFontSize: 1,
    };
  },

  /**
   * 顶级 property: methods
   *
   * 组件的 method 是组件示例的方法
   * Vue 自动为 methods 绑定 this，以便于它始终指向组件实例
   */
  methods: {
    nextPage() {
      this.page = this.page + 1;
    },
    requestData() {
      let url = "https://api.miremido.com/tip/list";
      axios
        .get(url)
        .then((response) => {
          this.data = response.data.data;
          this.code = response.data.code;
          this.msg = response.data.msg;
        })
        .catch(() => {
          this.code = 0;
          this.msg = "请求失败!";
        });
    },
    alertName(name) {
      alert(name);
    }
  },

  /**
   * 组件的计算属性
   * 对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性。
   **/
  computed: {
    lists() {
      return this.data.records;
    },
  },

  /**
   * watch 和 computed 本质差不多,
   * 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
   */
  watch: {
    page(newPage, oldPage) {
      if (newPage > 0 && newPage > oldPage) {
        this.requestData();
      }
    },
  },
};
</script>
<style>
</style>
