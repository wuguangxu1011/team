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
        { name: "组别:", value: "执行组" },
        { name: "任务:", value: "温室气体排放报告数据审核判定模型研究前期准备、建立模型、调试模型，模型自学习能力研究" },
        { name: "任务周期:", value: "2021.2.1-2021.4.15、2021.5.1-2021.5.31" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "87.1" },
        { name: "碳积分:", value: "1436" },
      ],
      name: '王其祥',
      content: '',
      contents: '本人在模型自学习能力研究中，负责前期准备、调试模型、建立模型，按时完成各项任务，与助理组同事交接明确，为后续任务的完成奠定了前期基础，希望自己在今后的工作中，更加注重工作的方式方法。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "执行组" },
          { name: "任务:", value: "温室气体排放报告数据审核判定模型研究前期准备、建立模型、调试模型，模型自学习能力研究" },
          { name: "任务周期:", value: "2021.2.1-2021.4.15、2021.5.1-2021.5.31" },
          { name: "完成情况:", value: "按既定要求和计划完成" },
          { name: "绩效得分:", value: "87.1" },
          { name: "碳积分:", value: "1436" },
        ]
        this.content = ''
        this.contents = '本人在模型自学习能力研究中，负责前期准备、调试模型、建立模型，按时完成各项任务，与助理组同事交接明确，为后续任务的完成奠定了前期基础，希望自己在今后的工作中，更加注重工作的方式方法。'
      }else{
        this.data = [
        { name: "组别:", value: "执行组" },
        { name: "任务:", value: "现场盘煤验证、模型试点应用及调优" },
        { name: "任务周期:", value: "2022.10.1-2022.12.31、2023.4.1-2023.5.31" },
        { name: "完成情况:", value: "调优过程中，方法落后，导致调优过程拖延" },
        { name: "绩效得分:", value: "81.5" },
        { name: "碳积分:", value: "1240" },
        ]
        this.content = ''
        this.contents = '本人由于对模型方法的误判，导致调优过程拖延，在今后的工作中，一定多思考，注重做事的方法，端正工作态度。'
      }
    }
  }
}
</script>

<style>

</style>