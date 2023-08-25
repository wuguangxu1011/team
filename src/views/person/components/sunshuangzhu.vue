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
        { name: "任务:", value: "成立项目组编制研究计划、团队成员管理" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "90.2" },
        { name: "碳积分:", value: "1706" },
      ],
      name: '孙栓柱',
      content: '',
      contents: ''
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
        { name: "组别:", value: "负责组" },
        { name: "任务:", value: "成立项目组编制研究计划、团队成员管理" },
        { name: "任务周期:", value: "2020.7.1-2021.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "90.2" },
        { name: "碳积分:", value: "1706" },
        ]
        this.content = ''
        this.contents = ''
      }else{
        this.data = [
        { name: "组别:", value: "负责组" },
        { name: "任务:", value: "负责整体技术方向把关和技术指导、电厂煤量库存智能监控平台开发" },
        { name: "任务周期:", value: "2021.10.1-2023.6.30" },
        { name: "完成情况:", value: "按既定要求和计划完成" },
        { name: "绩效得分:", value: "91.4" },
        { name: "碳积分:", value: "1674" },
        ]
        this.content = ''
        this.contents = '此项目旨在建立电厂煤量库存智能监控平台，实现燃煤电厂煤量库存的重要指标数据采集、传输、存储、展示、指标计算与统计等一体化在线监控，在大家的努力和拼搏下，项目顺利完成，后期需总结此次项目的经验教训。'
      }
    }
  }
}
</script>

<style>

</style>