<template>
  <div class="block">
    <el-carousel height="550px">
      <el-carousel-item v-for="item in banner" :key="item">
        <el-image :fit="fit" :src="item" style="width: 100%;height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        banner: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578649145196&di=44e568de3c035f4ffdfb7687a9adb968&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2268908537%2C2815455140%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D719',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578649156869&di=ea6a9e8c4d3f16d570537639bbb971f5&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578649156867&di=3aaf3dd42ad985869cb0ff1098e74688&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2755482895%2C3672892301%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854',
        ]
      }
    }
  }
</script>

<style scoped>
  .block {
    background-color: #b5bfc1;
  }
</style>
