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
        { name: "任务:", value: "烟气流量计算数据审核判定模型研究前期准备、建立模型、调试模型" },
        { name: "任务周期:", value: "2020.11.1-2021.1.15" },
        { name: "完成情况:", value: "未按既定要求和计划完成（滞后一星期）" },
        { name: "绩效得分:", value: "72.5" },
        { name: "碳积分:", value: "1195" },
      ],
      name: '李春岩',
      content: '',
      contents: '在建模过程中，我深刻认识到自己的不足，由于个人对时间观念没有太强的意识，而导致我在规定时间内没有把模型搭建出来，一直拖了一个星期才把模型搭建出来，在今后的工作中，我会强化时间观念，在保质保量的前提下，提高工作效率。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "执行组" },
          { name: "任务:", value: "烟气流量计算数据审核判定模型研究前期准备、建立模型、调试模型" },
          { name: "任务周期:", value: "2020.11.1-2021.1.15" },
          { name: "完成情况:", value: "未按既定要求和计划完成（滞后一星期）" },
          { name: "绩效得分:", value: "72.5" },
          { name: "碳积分:", value: "1195" },
        ]
        this.content = ''
        this.contents = '在建模过程中，我深刻认识到自己的不足，由于个人对时间观念没有太强的意识，而导致我在规定时间内没有把模型搭建出来，一直拖了一个星期才把模型搭建出来，在今后的工作中，我会强化时间观念，在保质保量的前提下，提高工作效率。'
      }else{
        this.data = [
          { name: "组别:", value: "执行组" },
          { name: "任务:", value: "电厂煤量库存校核方法研究、电厂煤量库存智能监控平台开发" },
          { name: "任务周期:", value: "2022.7.1-2022.8.31、2023.2.1-2023.3.31" },
          { name: "完成情况:", value: "按既定要求和计划完成" },
          { name: "绩效得分:", value: "89.3" },
          { name: "碳积分:", value: "1359" },
        ]
        this.content = ''
        this.contents = '我在团队中负责电厂煤量库存校核方法研究、电厂煤量库存智能监控平台开发。希望自己能多学习，和团队共同成长。'
      }
    }
  }
}
</script>

<style>

</style>