<template>
  <div class="all">
    <div class="main-title">
      <img src="@/assets/img/titles.png" style="width: 50%" />
    </div>
    <div class="project">
      <el-select v-model="value" @change="changeValue" size="mini">
          <el-option
            v-for="(item, index) in projectList"
            :key="index"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
    </div>
    <div class="person">
      <img src="@/assets/img/h1.png" style="width: 50%" />
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="list" v-for="(item, index) in dataList" :key="index">
          <div class="left">{{ item.name }}</div>
          <div class="right">{{ item.value }}</div>
        </div>
        <img src="../../assets/img/1bg.png">
      </div>
    </div>
    <div class="other">
      <img src="@/assets/img/tryj.png" style="width: 50%" />
      <div class="kuang">
        <img src="../../assets/img/kuang.png" style="width: 80%" />
        <div class="suggest">
          <el-input
            type="textarea"
            rows="5"
            placeholder="请输入内容"
            v-model="content"
          ></el-input>
        </div>
      </div>
    </div>
    <div class="sum">
      <img src="@/assets/img/grxj.png" style="width: 50%" />
      <div class="kuang">
        <img src="../../assets/img/kuang.png" style="width: 80%" />
        <div class="suggest">
          <el-input
            type="textarea"
            rows="5"
            placeholder="请输入内容"
            v-model="contents"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: function() {
        return []
      }
    },
    name: {
      type: String
    },
    content: {
      type: String
    },
    contents: {
      type: String
    }
  },
  data() {
    return {
      // dataList: [],
      // content: "",
      // contents: "",
      // name:'',
      value: 1,
      projectList: [
        { name: "机器视觉在碳计算实测法数据审核中的应用研究", value: 1 },
        { name: "基于三维模型重构的电厂煤量库存监控分析研究应用", value: 2 },
      ]
    };
  },
  methods: {
    changeValue(val) {
      console.log(val,'92');
      this.$emit('handleChange',val) 
    }
  }
};
</script>

<style lang="less" scoped>
.all {
  font-family: 'SourceHanSansCN';
  padding: 0 10px;
  background: url(../../assets//img/bg.png) no-repeat;
  background-size: 100% 100%;
  .main-title {
    padding-top: 15%;
    text-align: center;
  }
  .project{
    text-align: center;
    margin-top: 5%;
  }
  .person {
    padding-top: 10%;
    .content {
      position: relative;
      width: 85%;
      height: 48vh;
      margin: 0 auto;
      border-radius: 5px;
      background: #fff;

      .name {
        text-align: center;
        padding-top: 10px;
        font-size: 20px;
        padding-bottom: 10px;
      }
      .list {
        display: flex;
        align-items: center;
        padding-left: 5%;
        margin-bottom: 8px;

        .left {
          display: flex;
          align-content: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          padding: 5px 12px;
          margin-right: 10px;
          width: 76px;
          height: 25px;
          line-height: 15px;
          border-radius: 50px;
          background-color: #0183fc;
        }
        .right{
          width: 180px;
        }
      }
      img{
        position: absolute;
        width: 40%;
        height: 20%;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
    }
  }
  .other {
    margin-top: 10px;
    .kuang {
      position: relative;
      display: flex;
      justify-content: center;

      .suggest {
        width: 65%;
        position: absolute;
        margin: 0 auto;
        text-align: center;
        top: 10%;
        left: 17%;
      }
    }
  }
  .sum{
    margin-top: 10px;
    padding-bottom: 20%;
    .kuang {
      position: relative;
      display: flex;
      justify-content: center;

      .suggest {
        width: 65%;
        position: absolute;
        margin: 0 auto;
        text-align: center;
        top: 10%;
        left: 17%;
      }
    }
  }
}
/deep/.el-textarea__inner{
  border: 0;
}
/deep/.el-select {
  width: 300px;
}
</style>