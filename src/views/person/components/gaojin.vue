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
        { name: "任务:", value: "负责项目进度统筹协调" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "未按既定要求和计划完成（在李春岩建立模型滞后一星期情况下，未能及时提醒督促）" },
        { name: "绩效得分:", value: "83.2" },
        { name: "碳积分:", value: "1461" },
      ],
      name: '高进',
      content: '',
      contents: '我在团队中负责项目进度统筹协调，虽然最后项目按时结项验收了，但实施过程中出现了一些小插曲，部分同事负责的工作未能按时完成，这其中有我疏于管理监督的原因，我的项目管理能力有待进一步提高。同时也希望团队成员能够做到互相督促，共同成长。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "经理组" },
          { name: "任务:", value: "负责项目进度统筹协调" },
          { name: "任务周期:", value: "2020.7.1-2021.6.30" },
          { name: "完成情况:", value: "未按既定要求和计划完成（在李春岩建立模型滞后一星期情况下，未能及时提醒督促）" },
          { name: "绩效得分:", value: "83.2" },
          { name: "碳积分:", value: "1461" },
        ]
        this.content = ''
        this.contents = '我在团队中负责项目进度统筹协调，虽然最后项目按时结项验收了，但实施过程中出现了一些小插曲，部分同事负责的工作未能按时完成，这其中有我疏于管理监督的原因，我的项目管理能力有待进一步提高。同时也希望团队成员能够做到互相督促，共同成长。'
      }else{
        this.data = [
        { name: "组别:", value: "执行组" },
        { name: "任务:", value: "电厂煤量库存在线监控模型研究、模型试点应用及调优" },
        { name: "任务周期:", value: "2022.4.1-2022.6.15、2023.4.1-2023.5.31" },
        { name: "完成情况:", value: "由于前期准备不充分，导致模型一再调整，建模滞后" },
        { name: "绩效得分:", value: "79.8" },
        { name: "碳积分:", value: "1214" },
        ]
        this.content = '遇到不能解决的问题时，应及时向上级领导汇报，积极协调。'
        this.contents = '我作为执行组一员，负责模型的整体把控，由于本人对工作思路不清晰，导致项目进度受到影响，深感抱歉，在以后工作中一定加强自我约束，改进工作方法，提高工作效率，不拖团队后腿。'
      }
    }
  }
}
</script>

<style>

</style>