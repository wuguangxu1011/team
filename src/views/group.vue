<template>
  <div class="all">
    <div class="main-title">
      <img src="../assets/img/logo.png" style="width: 60%;" />
    </div>
    <div class="group-introduce">
      <img src="../assets/img/banner.png" alt="">
    </div>
    <div class="category">
      <div class="title">班组目前运用新型“碳积分”绩效考核模型法考核的项目分别为</div>
      <img @click="toPage(1)" src="../assets/img/icon1.png" >
      <img @click="toPage(2)" src="../assets/img/icon2.png" alt="">
      <!-- <img src="../assets/img/icon4.png" alt=""> -->
    </div>
    <div class="team-member">
      <img src="../assets/img/bz.png" style="width: 90%;">
    </div>
    <!-- <div class="kaoping">
      <img src="../assets/img/icon3.png" style="width: 55%;">
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods: {
    toPage(v) {
      if(v === 1) {
        this.$router.push('/team')
      }else if(v === 2) {
        this.$router.push('/team2')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.all{
  padding: 0 10px;
  background: url(../assets//img/groupbg.png) no-repeat;
  background-size: 100%;
  .main-title{
    padding-top: 20%;
    text-align: center;
  }
  .group-introduce{
    padding-top: 15%;
  }
  .category{
    .title{
      padding: 10px 17%;
      font-size: 15px;
      font-weight: bold;
    }
  }
  .team-member{
    text-align: center;
  }
  .kaoping{
    text-align: center;
    background: #00a4ff;
  }
}
</style>