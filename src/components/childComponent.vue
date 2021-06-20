<template>
  <div>
    <h1>{{ user }}</h1>
    <p v-show="data.name" @click="$emit('alertName',data.name)">id: {{ data.id }}, name: {{ data.name }}</p>
  </div>
</template>
<script>

export default {
  name: "childCompoent",
  components: {},
  props: ['data'],
  inject: ['user'],
  data() {
    return {
      id: undefined,
      name: undefined,
    };
  },

  computed: {
    
  },

  watch: {
    // data(newData){
    //   console.log(newData);
    //   this.id = newData.id;
    //   this.name = newData.name
    // }
  }
};
</script>

<style>
</style>