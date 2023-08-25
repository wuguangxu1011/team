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
        { name: "组别:", value: "负责组" },
        { name: "任务:", value: "负责整体技术方向把关和技术指导" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "92.2" },
        { name: "碳积分:", value: "1744" },
      ],
      name: '周春蕾',
      content: '在项目实施过程中遇到问题时，蕾姐总是耐心解答，对我进行专业指导。',
      contents: '本人作为项目组技术总指导，在机器视觉在碳计量实测法数据审核中的应用研究项目中，针对碳计量实测数据审核判定、烟气流量计算数据审核判定、温室气体排放报告数据审核判定三个方面进行全程技术指导，定期开展分析会，解决疑难问题24次，及时掌握组员的实际情况，与组员进行技术交流、培训，指导组员的具体工作，提升大家的分析问题和解决问题的能力。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
        { name: "组别:", value: "负责组" },
        { name: "任务:", value: "负责整体技术方向把关和技术指导" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "92.2" },
        { name: "碳积分:", value: "1744" },
        ]
        this.content = '在项目实施过程中遇到问题时，蕾姐总是耐心解答，对我进行专业指导。'
        this.contents = '本人作为项目组技术总指导，在机器视觉在碳计量实测法数据审核中的应用研究项目中，针对碳计量实测数据审核判定、烟气流量计算数据审核判定、温室气体排放报告数据审核判定三个方面进行全程技术指导，定期开展分析会，解决疑难问题24次，及时掌握组员的实际情况，与组员进行技术交流、培训，指导组员的具体工作，提升大家的分析问题和解决问题的能力。'
      }else{
        this.data = [
        { name: "组别:", value: "经理组" },
        { name: "任务:", value: "编制项目研究技术方案等项目文档，调研收资、准备项目验收资料，列出验收清单、审核材料" },
        { name: "任务周期:", value: "2021.10.1-2021.12.31、2023.6.1-2023.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "92.3" },
        { name: "碳积分:", value: "1568" },
        ]
        this.content = ''
        this.contents = '本人在该项目中，负责编制项目研究技术方案等项目文档，调研收资、准备项目验收资料，列出验收清单、审核材料，日后工作中，更要做好材料台账管理工作。'
      }
    }
  }
}
</script>

<style>

</style>