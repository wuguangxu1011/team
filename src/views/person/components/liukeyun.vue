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
        { name: "任务:", value: "撰写温室气体排放报告数据审核判定模型研究阶段性报告、对验收材料整理归档" },
        { name: "任务周期:", value: "2021.4.16-2021.4.30、2021.6.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成（同时参与多个项目的情况下，加班加点完成任务）" },
        { name: "绩效得分:", value: "90.8" },
        { name: "碳积分:", value: "1030" },
      ],
      name: '刘克云',
      content: '工作上总是加班加点，任劳任怨，值得其他同事学习。',
      contents: '本人初次参与项目的阶段性报告的编写，感谢同事和领导的耐心讲解与指导，学习到了很多的材料编写技能，但仍有很多的不足之处，还需加以改正，希望自己今后多参与项目，早日从一名助理逐步成长为团队的骨干。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "助理组" },
          { name: "任务:", value: "撰写温室气体排放报告数据审核判定模型研究阶段性报告、对验收材料整理归档" },
          { name: "任务周期:", value: "2021.4.16-2021.4.30、2021.6.1-2021.6.30" },
          { name: "完成情况:", value: "按既定要求和计划完成（同时参与多个项目的情况下，加班加点完成任务）" },
          { name: "绩效得分:", value: "90.8" },
          { name: "碳积分:", value: "1030" },
        ]
        this.content = '工作上总是加班加点，任劳任怨，值得其他同事学习。'
        this.contents = '本人初次参与项目的阶段性报告的编写，感谢同事和领导的耐心讲解与指导，学习到了很多的材料编写技能，但仍有很多的不足之处，还需加以改正，希望自己今后多参与项目，早日从一名助理逐步成长为团队的骨干。'
      }else{
        this.data = [
        { name: "组别:", value: "助理组" },
        { name: "任务:", value: "电厂煤量库存在线监控模型研究、模型试点应用及调优、对验收材料整理归档" },
        { name: "任务周期:", value: "2022.4.1-2022.6.30、2023.4.1-2023.5.31、2023.6.1-2023.6.30" },
        { name: "完成情况:", value: "调优过程中，方法落后，导致调优过程拖延" },
        { name: "绩效得分:", value: "84.6" },
        { name: "碳积分:", value: "1128" },
        ]
        this.content = ''
        this.contents = '做项目比较累时，会有松弛思想，有时也会有畏难情绪，缺少自信心，因此，我要不断总结，发现问题，查补漏洞，以指导下一步的工作。'
      }
    }
  }
}
</script>

<style>

</style>