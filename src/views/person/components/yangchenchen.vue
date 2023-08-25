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
        { name: "任务:", value: "碳计量实测数据审核判定模型研究前期准备、建立模型、调试模型" },
        { name: "任务周期:", value: "2020.8.1-2020.10.15" },
        { name: "完成情况:", value: "按既定要求和计划完成（前期工作效率不高，后经督促按时完成）" },
        { name: "绩效得分:", value: "86.1" },
        { name: "碳积分:", value: "1419" },
      ],
      name: '杨晨琛',
      content: '工作交接很详细，能够主动帮助同事解决问题。',
      contents: '我在项目实施过程中暴露了一些问题，主要表现在虽然能够按时完成工作，但前期工作效率不高，经过项目组成员督促，最后十天加班加点完成了，工作效率有待提高，工作质量也受到一些影响。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "执行组" },
          { name: "任务:", value: "碳计量实测数据审核判定模型研究前期准备、建立模型、调试模型" },
          { name: "任务周期:", value: "2020.8.1-2020.10.15" },
          { name: "完成情况:", value: "按既定要求和计划完成（前期工作效率不高，后经督促按时完成）" },
          { name: "绩效得分:", value: "86.1" },
          { name: "碳积分:", value: "1419" },
        ]
        this.content = '工作交接很详细，能够主动帮助同事解决问题。'
        this.contents = '我在项目实施过程中暴露了一些问题，主要表现在虽然能够按时完成工作，但前期工作效率不高，经过项目组成员督促，最后十天加班加点完成了，工作效率有待提高，工作质量也受到一些影响。'
      }else{
        this.data = [
          { name: "组别:", value: "执行组" },
          { name: "任务:", value: "现场调研，收集盘煤数据、电厂煤量库存智能监控平台开发" },
          { name: "任务周期:", value: "2022.1.1-2022.3.31、2023.2.1-2023.3.31" },
          { name: "完成情况:", value: "按既定要求和计划完成" },
          { name: "绩效得分:", value: "86.6" },
          { name: "碳积分:", value: "1318" },
        ]
        this.content = ''
        this.contents = '本人在此项目中，主要负责现场调研，收集盘煤数据、电厂煤量库存智能监控平台开发，和领导同事学到了不少知识，今后会注重团队协作，提高个人专业素养。'
      }
    }
  }
}
</script>

<style>

</style>