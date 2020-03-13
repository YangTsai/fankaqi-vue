<template>
  <div>
    <Header></Header>
    <!--内容-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../components/header/header'

  export default {
    name: "",
    components: {
      Header
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
