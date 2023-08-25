<template>
  <div class="all">
    <div class="title">
      <img src="../assets//img/scoretitle.png" style="width: 70%" />
    </div>
    <div class="input">
      <div style="padding-right: 10px">
        评分人:
        <el-input v-model="person" size="mini" style="width: 80px"></el-input>
      </div>
      <div>
        被评价人:
        <el-input v-model="personal" size="mini" style="width: 80px"></el-input>
      </div>
    </div>
    <div class="table">
      <el-table
        :data="dataList"
        size="small"
        border
        stripe
        :span-method="arraySpanMethod"
        :header-cell-style="headerCellStyle"
      >
        <el-table-column
          label="考核项目（标准分)"
          align="center"
          width="120px"
          prop="assess"
        ></el-table-column>
        <el-table-column
          label="考核项目（标准分)"
          align="center"
          prop="project"
        ></el-table-column>
        <el-table-column
          label="评价标准"
          align="center"
          prop="marking"
        ></el-table-column>
        <el-table-column label="得分" align="center" prop="score">
          <template slot-scope="{ row }">
            <el-input size="mini" v-model="row.score"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="submit">
      <div @click="handleClick" class="submit-btn">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: "",
      personal: "",
      dataList: [
        {
          assess: "项目目标（60分）",
          project: "工作质量(30分)",
          marking: "工作有纰漏,需要修改(10分)",
          score: "",
        },
        {
          assess: "项目目标（60分）",
          project: "工作质量(30分)",
          marking: "基本按要求完成工作任务(20分)",
          score: "",
        },
        {
          assess: "项目目标（60分）",
          project: "工作质量(30分)",
          marking: "按要求完成下达的工作任务，做到真实正确可靠(30分)",
          score: "",
        },
        {
          assess: "项目目标（60分）",
          project: "工作任务履约率(30分)",
          marking: "未按照计划完成规定目标(10分)",
          score: "",
        },
        {
          assess: "项目目标（60分）",
          project: "工作任务履约率(30分)",
          marking: "基本按照计划完成规定目标(20分)",
          score: "",
        },
        {
          assess: "项目目标（60分）",
          project: "工作任务履约率(30分)",
          marking: "按照计划完成目标较好(30分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作态度(20分)",
          marking: "偶尔不愿接受工作安排，需督促勉励完成(10分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作态度(20分)",
          marking: "愿意接受工作安排，并在规定时间内完成(15分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作态度(20分)",
          marking: "对待交办的工作，处处体现主动性，工作积极，热情饱满(20分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作效率(20分)",
          marking: "工作效率较低，需要别人帮助才能完成任务(10分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作效率(20分)",
          marking: "工作效率一般，能按时完成任务，基本保证质量(15分)",
          score: "",
        },
        {
          assess: "综合评价（40分）",
          project: "工作效率(20分)",
          marking: "工作效率高，能保质保量按时完成任务(20分)",
          score: "",
        },
        {
          assess: "突出贡献(10分)",
          project: "突出贡献(10分)",
          marking:
            "在媒体报道、荣誉表彰、职业评级等方面有突出表现时，可加分1-10分。",
          score: "",
        },
        {
          assess: "合计",
          project: "",
          marking: "",
          score: "",
        },
      ],
      score: "",
    };
  },
  methods: {
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (row[0].level === 1) {
        row[1].colSpan = 2;
        row[2].colSpan = 0;
        if (columnIndex === 0) {
          return { display: "none" };
        }
      }
      return {
        background: "rgb(0, 164, 255)",
        color: "rgb(255, 255, 255)",
      };
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 12) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
      if (rowIndex === 13) {
        if (columnIndex === 0) {
          return [1, 3];
        } else if (columnIndex === 1) {
          return [0, 0];
        } else if (columnIndex === 2) {
          return [0, 0];
        }
      }

      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1,
          };
        } else if (rowIndex % 6 === 0) {
          return {
            rowspan: 6,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
    handleClick() {
      this.$message.success("提交成功!")
    }
  },
};
</script>

<style lang="less" scoped>
.all {
  height: auto;
  background: url(../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  .title {
    text-align: center;
  }
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 5% 0 10%;
  }
  .table {
    padding: 0 20px;
  }
  .submit{
    display: flex;
    justify-content: center;
    padding:20px 0 80px;
    .submit-btn{
      width: 50px;
      height: 100%;
      padding: 5px;
      color: #fff;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 5px;
    }
  }
}
</style>