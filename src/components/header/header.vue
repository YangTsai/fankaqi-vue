<template>
  <div id="head">
    <div class="head">
      <div class="title">
        凡卡其
      </div>
      <div class="menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#0CB8B9"
          text-color="#ffffff"
          active-text-color="#000000">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key=="1"){
          this.$router.push({path: '/home'});
        }else if (key=="3"){
          this.$router.push({path: '/echart'});
        }
      }
    }
  }
</script>

<style lang="less">
  @import "header.less";
</style>
