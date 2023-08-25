<template>
  <div class="all">
    <div class="large_title">
      <div style="text-align: center">
        <img src="../assets/img/titletop.png" style="width: 55%" />
      </div>
      <div class="xiangmu">
        <el-select v-model="value" @change="changeValue" size="mini">
          <el-option
            v-for="(item, index) in projectList"
            :key="index"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 团队概况 -->
      <div class="team">
        <div class="team_png"></div>
      </div>
      <!-- 表格页面 -->
      <div class="table">
        <div class="title"></div>
        <div class="content">
          <el-table
            :data="dataList"
            size="small"
            border
            stripe
            :span-method="arraySpanMethod"
            :header-cell-style="headerCellStyle"
          >
            <el-table-column
              label="承担的主要工作"
              align="center"
              prop="work"
            ></el-table-column>
            <el-table-column
              label="承担的主要工作"
              align="center"
              prop="step"
            ></el-table-column>
            <el-table-column
              label="姓名"
              align="center"
              prop="name"
            ></el-table-column>
            <el-table-column
              label="任务周期"
              align="center"
              prop="time"
            ></el-table-column>
            <el-table-column
              label="完成情况"
              align="center"
              prop="done"
            >
            <template slot-scope="{row}">
              <div v-if="row.flag === false" style="color: red;">{{ row.done }}</div>
              <div v-else>{{ row.done }}</div>
            </template>
          </el-table-column>
            <el-table-column
              label="备注"
              align="center"
              prop="remark"
            >
            <template slot-scope="{row}">
              <div v-if="row.flag === false" style="color: red;">{{ row.remark }}</div>
              <div v-else>{{ row.remark }}</div>
            </template>
          </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 考评分数排名 -->
      <div class="ranking">
        <div class="title">
          <img src="../assets/img/3.png" style="width: 65%" />
        </div>
        <div class="rank">
          <div class="ord" v-for="(item, index) in imgList" :key="index">
            <img :src="item.src" alt="" />
            <div class="ord-score">
              <div class="star"></div>
              <div class="score">{{ item.score }}</div>
            </div>
          </div>
        </div>
        <div class="cylinder">
          <div class="ranks" v-for="(item, index) in rankingList" :key="index">
            <div class="mingci">{{ item.rank }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="score">{{ item.score }}</div>
          </div>
          <div class="remark">
            备注：
            <img src="../assets/img/start.png" style="width: 20px" />
            代表"小组之星"
          </div>
          <div class="bottom_img">
            <img src="../assets/img/3bg.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 碳积分排名 -->
      <div class="carbonRank">
        <div class="title">
          <img src="../assets/img/4.png" style="width: 55%" />
        </div>
        <div class="table">
          <img src="../assets/img/table_title.png" style="width: 100%" />
          <div class="tbody">
            <div class="list" v-for="(item, index) in tableList" :key="index">
              <i>{{ item.rank }}</i>
              <div class="list-name">
                <img v-if="item.start" src="../assets/img/start.png" style="width: 13px;height: 13px;">
                {{ item.name }}
              </div>
              <div class="list-score">
                {{ item.score }}
                <div class="score1"></div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="title">
          <img src="../assets/img/5.png" style="width: 40%" />
        </div>
        <div class="kuang">
          <img src="../assets/img/kuang.png" style="width: 80%" />
          <div class="suggest">
            <el-input
              type="textarea"
              rows="5"
              placeholder="请输入内容"
              v-model="content"
            ></el-input>
            <el-button class="button" size="mini">提交</el-button>
          </div>
        </div>
        <div class="phone">
          <img src="../assets/img/5bg.png" alt="" />
          <div class="kaoping">
            <img @click="toPath" src="../assets//img/icon3.png" style="width: 55%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from "../utils/list";
import ranking from "../utils/ranking";
import tableList from "../utils/tableList";
export default {
  data() {
    return {
      projectList: [
        { name: "机器视觉在碳计算实测法数据审核中的应用研究", value: 1 },
        { name: "基于三维模型重构的电厂煤量库存监控分析研究应用", value: 2 },
      ],
      value: 1,
      dataList: list,
      imgList: [
        {
          src: require("@/assets/img/01.png"),
          score: 92.2,
        },
        {
          src: require("@/assets/img/02.png"),
          score: 91,
        },
        {
          src: require("@/assets/img/03.png"),
          score: 90.8,
        },
      ],
      rankingList: ranking,
      tableList: tableList,
      content: "",
    };
  },
  created() {},

  methods: {
    changeValue(val) {
      if(val === 2) {
        this.$router.push('/team2')
      }
    },
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (row[0].level === 1) {
        row[1].colSpan = 2
        row[2].colSpan = 0
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
      if (
        rowIndex === 0 ||
        rowIndex === 1 ||
        rowIndex === 2 ||
        rowIndex === 3 ||
        rowIndex === 4 
      ) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }

      if (columnIndex === 0) {
        if (rowIndex === 5 || 
          rowIndex === 9 || 
          rowIndex === 13
        ) {
          return {
            rowspan: 4,
            colspan: 1,
          };
        } else if (rowIndex === 17) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        } else if (rowIndex % 20 === 0) {
          return {
            rowspan: 2,
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
    toPath() {
      this.$router.push('/marking')
    }
  },
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  background-color: #f1fcff;
}
.large_title {
  // text-align: center;
  padding-top: 50px;
}
.xiangmu {
  display: flex;
  justify-content: center;
  margin: 0.133333rem auto;
  padding: 0.08rem 0;
  color: #fff;
  border-radius: 0.133333rem;
}
.el-select {
  width: 8rem;
}

.team {
  margin-top: 0.8rem;
  padding: 10px;
  height: 64vh;

  .team_png {
    height: 100%;
    background: url("../assets//img/jinzita1.png") no-repeat;
    background-size: contain;
  }
}

.table {
  height: 100%;
  .title {
    height: 4vh;
    margin-left: 30px;
    margin-bottom: 30px;
    background: url("../assets/img/2.png") no-repeat;
    background-size: contain;
  }
  .content {
    padding: 1.333333rem 0.533333rem 0 0.533333rem;
    height: 100%;
    background: url("../assets/img/2bg.png") no-repeat;
    background-size: 100%;
  }
}

.ranking {
  padding: 0 20px;
  // height: 50vh;

  .title {
    display: flex;
    padding: 20px 10px;
  }
  .rank {
    display: flex;
    justify-content: space-between;
    .ord {
      position: relative;
      padding: 0 5px;
      .ord-score {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: -17px;
        left: 7.8px;
        width: 86.3%;
        height: 20px;
        border-top: 0;
        .star {
          width: 15px;
          height: 18px;
          background: url("../assets/img/start.png") no-repeat;
          background-size: 100%;
        }
        .score {
          padding-left: 5px;
        }
      }
    }
    .ord:nth-child(1) {
      .ord-score {
        border: 1px solid #da4e4e;
      }
    }
    .ord:nth-child(2) {
      .ord-score {
        border: 1px solid #ffbe22;
      }
    }
    .ord:nth-child(3) {
      .ord-score {
        border: 1px solid #3abdf8;
      }
    }
  }
  .cylinder {
    height: 16rem;
    .ranks {
      display: flex;
      color: #fff;
      justify-content: space-around;
      text-align: center;
      margin: auto;
      margin-top: 0.533333rem;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-right: 0.4rem;
      z-index: 1;
      background: linear-gradient(#00a5ff, #00caff);
    }
    .ranks:nth-child(8) {
      .name {
        padding-right: 12px;
      }
    }
    .remark {
      display: flex;
      img {
        padding: 0 3px;
      }
    }
    .bottom_img {
      img {
        position: relative;
        top: -17vh;
        left: 0;
      }
    }
  }
}
.carbonRank {
  // height: 80vh;
  margin-top: 50px;
  .title {
    padding: 20px;
  }
  .table {
    padding: 1.333333rem 0.533333rem 1.2rem 0.533333rem;
    background: url("../assets/img/4bg.png") no-repeat;
    background-size: 100%;
  }
  .tbody {
    position: relative;
    width: 100%;
    height: 11.2rem;
    border-radius: 0 0 0.213333rem 0.213333rem;
    margin-top: -0.08rem;
    border: 0.026667rem solid #f1fcff;
    background-color: #fff;
    .list {
      display: flex;
      position: relative;
      justify-content: space-between;
      margin: 0.4rem 0 0.533333rem 0.88rem;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: #00a1ff;
        color: #fff;
      }
      .list-score {
        display: flex;
        padding-right: 10%;
        .score1 {
          margin-left: 0.266667rem;
          width: 2.4rem;
          height: 0.4rem;
          background: #0d723c;
        }
      }
      .line {
        position: absolute;
        height: 1px;
        top: 0.666667rem;
        right: 0;
        width: 111%;
        padding: 0 0.266667rem;
        border: 0.013333rem solid #d2d2d2;
        opacity: 0.4;
      }
    }
    .list:nth-child(1) {
      .list-name {
        padding-right: 16px;
      }
    }
    .list:nth-child(2) {
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.133333rem;
          width: 2.266667rem;
          height: 0.4rem;
          opacity: 0.9;
          background: #0d723c;
        }
      }
    }
    .list:nth-child(3) {
      .list-name {
        padding-right: 16px;
      }
      .list-score {
        .score1 {
          margin-right: 0.266667rem;
          width: 2.133333rem;
          opacity: 0.9;
          background: #0d723c;
        }
      }
    }
    .list:nth-child(4) {
      .list-score {
        .score1 {
          margin-right: 0.266667rem;
          width: 2.133333rem;
          opacity: 0.9;
          background: #008f28;
        }
      }
    }
    .list:nth-child(5) {
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.533333rem;
          width: 1.866667rem;
          height: 0.4rem;
          background: #00b008;
        }
      }
    }
    .list:nth-child(6) {
      .list-name {
        padding-right: 16px;
      }
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.586667rem;
          opacity: 0.9;
          width: 1.813333rem;
          height: 0.4rem;
          background: #00b008;
        }
      }
    }
    .list:nth-child(7) {
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.666667rem;
          width: 1.733333rem;
          height: 0.4rem;
          background: #10c73f;
        }
      }
    }
    .list:nth-child(8) {
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.853333rem;
          opacity: 0.9;
          width: 1.546667rem;
          height: 0.4rem;
          background: #10c73f;
        }
      }
    }
    .list:nth-child(9) {
      .list-name {
        padding-right: 16px;
      }
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 0.933333rem;
          width: 1.466667rem;
          height: 0.4rem;
          background: #20d267;
        }
      }
    }
    .list:nth-child(10) {
      .list-name {
        padding-right: 8px;
      }
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 40px;
          opacity: 0.8;
          width: 1.333333rem;
          height: 0.4rem;
          background: #20d267;
        }
      }
    }
    .list:nth-child(11) {
      .list-name {
        padding-right: 8px;
      }
      .list-score {
        .score1 {
          margin-left: 0.266667rem;
          margin-right: 40px;
          opacity: 0.6;
          width: 1.333333rem;
          height: 0.4rem;
          background: #20d267;
        }
      }
    }
  }
}
.feedback {
  padding: 0 20px;
  background: linear-gradient(#e2f8ff, #d1f5fe);
  .title {
    margin-bottom: 0.8rem;
  }
  .kuang {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    position: relative;

    .suggest {
      width: 65%;
      position: absolute;
      margin: 0 auto;
      text-align: center;
      top: 10%;
      left: 17%;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 1.333333rem;
      height: 0.666667rem;
      color: #fff;
      background-color: #14b3ff;
      border-radius: 0.333333rem;
    }
  }
  .phone {
    position: relative;
    bottom: 1.733333rem;
    z-index: 0;
    .kaoping {
      text-align: center;
    }
  }
}
/deep/.el-textarea__inner {
  border-color: #fff !important;
  border: 0;
  padding: 0;
}
</style>