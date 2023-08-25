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
        { name: "组别:", value: "助理组" },
        { name: "任务:", value: "撰写碳计量实测数据审核判定模型研究阶段性报告、对验收材料整理归档" },
        { name: "任务周期:", value: "2020.10.16-2020.10.31、2021.6.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成（协助央视新闻等媒体报道）" },
        { name: "绩效得分:", value: "86.6" },
        { name: "碳积分:", value: "981" },
      ],
      name: '朱洁雯',
      content: '',
      contents: '本人在机器视觉在碳计量实测法数据审核中的应用研究中主要负责碳计量实测判定模型的阶段性报告编写以及最终对整个项目验收材料整理归档等工作。在工作中积极主动、尽职尽责，但仍需提高效率。专业理论方面，需多参与“双碳”课题研究，时刻关注碳排放实时监测方面的最新进展。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "助理组" },
          { name: "任务:", value: "撰写碳计量实测数据审核判定模型研究阶段性报告、对验收材料整理归档" },
          { name: "任务周期:", value: "2020.10.16-2020.10.31、2021.6.1-2021.6.30" },
          { name: "完成情况:", value: "按既定要求和计划完成（协助央视新闻等媒体报道）" },
          { name: "绩效得分:", value: "86.6" },
          { name: "碳积分:", value: "981" },
        ]
        this.content = ''
        this.contents = '本人在机器视觉在碳计量实测法数据审核中的应用研究中主要负责碳计量实测判定模型的阶段性报告编写以及最终对整个项目验收材料整理归档等工作。在工作中积极主动、尽职尽责，但仍需提高效率。专业理论方面，需多参与“双碳”课题研究，时刻关注碳排放实时监测方面的最新进展。'
      }else{
        this.data = [
        { name: "组别:", value: "助理组" },
        { name: "任务:", value: "编制项目研究技术方案等项目文档，调研收资、现场调研，收集盘煤数据" },
        { name: "任务周期:", value: "2021.10.1-2021.12.31、2022.1.1-2022.3.31" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "94.1" },
        { name: "碳积分:", value: "1255" },
        ]
        this.content = '小朱虽然是新同志，但工作中积极乐观，遇到难题也总是迎难而上，值得所有人学习'
        this.contents = '本人作为团队的年轻力量，日后工作中一定要严格提高自身要求，多动脑筋，，勤于思考，加强工作的主动性、预见性和创造性。'
      }
    }
  }
}
</script>

<style>

</style>