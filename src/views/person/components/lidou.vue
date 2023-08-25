<template>
  <div>
    <perso-nal
      :data-list="data"
      :name="name"
      :content="content"
      :contents="contents"
      @handleChange="getVal"
    ></perso-nal>
  </div>
</template>

<script>
import PersoNal from '../personal'
export default {
  components: {
    PersoNal
  },
  data() {
    return{
      data: [
        { name: "组别:", value: "经理组" },
        { name: "任务:", value: "责与上级单位和合作单位的整体协调" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成（参与央视新闻等媒体报道）" },
        { name: "绩效得分:", value: "90.6" },
        { name: "碳积分:", value: "1591" },
      ],
      name: '李逗',
      content: '',
      contents: '我在该项目中负责与上级单位和合作单位的整体协调，这对我来说既是挑战也是机遇，首先是让我有机会锻炼了社交能力，积极参与了央视新闻的新闻稿撰写工作，但有时也存在对事情考虑不周的情况，之后工作中要多思考勤沟通，优化工作方法。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
        { name: "组别:", value: "经理组" },
        { name: "任务:", value: "责与上级单位和合作单位的整体协调" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成（参与央视新闻等媒体报道）" },
        { name: "绩效得分:", value: "90.6" },
        { name: "碳积分:", value: "1591" },
        ]
        this.content = ''
        this.contents = '我在该项目中负责与上级单位和合作单位的整体协调，这对我来说既是挑战也是机遇，首先是让我有机会锻炼了社交能力，积极参与了央视新闻的新闻稿撰写工作，但有时也存在对事情考虑不周的情况，之后工作中要多思考勤沟通，优化工作方法。'
      }else{
        this.data = [
        { name: "组别:", value: "负责组" },
        { name: "任务:", value: "成立项目组编制研究计划、团队成员管理" },
        { name: "任务周期:", value: "2021.10.1-2023.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "91.8" },
        { name: "碳积分:", value: "1681" },
        ]
        this.content = '认真负责，编制研究计划切实可行'
        this.contents = '第一次担任项目负责人，于我而言是一次机遇也是一种挑战，工作中我严格要求自己，注重以身作则，以诚待人，我会持续学习先进的管理经验，优化团队管理方法，发挥个人所长，为项目贡献自己的一份力量。'
      }
    }
  }
}
</script>

<style>

</style>