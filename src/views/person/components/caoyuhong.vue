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
        { name: "任务:", value: "撰写烟气流量计算数据审核判定模型研究、模型自学习能力研究阶段性报告" },
        { name: "任务周期:", value: "2021.1.16-2021.1.31、2021.5.21-2021.5.31" },
        { name: "完成情况:", value: "未按既定要求和计划完成（滞后）" },
        { name: "绩效得分:", value: "74.1" },
        { name: "碳积分:", value: "839" },
      ],
      name: '曹瑀宏',
      content: '希望你以后改进工作方法，提高工作效率。',
      contents: '我作为助理组的一员，负责阶段性报告编写，由于本人工作态度有待端正，导致项目进度受到影响，对同事深感抱歉，在以后工作中一定加强自我约束，提高团队协作能力，尽早成为团队中坚力量。'
    }
  },
  methods: {
    getVal(val) {
      if(val === 1) {
        this.data = [
          { name: "组别:", value: "助理组" },
          { name: "任务:", value: "撰写烟气流量计算数据审核判定模型研究、模型自学习能力研究阶段性报告" },
          { name: "任务周期:", value: "2021.1.16-2021.1.31、2021.5.21-2021.5.31" },
          { name: "完成情况:", value: "未按既定要求和计划完成（滞后）" },
          { name: "绩效得分:", value: "74.1" },
          { name: "碳积分:", value: "839" },
        ]
        this.content = '希望你以后改进工作方法，提高工作效率。'
        this.contents = '我作为助理组的一员，负责阶段性报告编写，由于本人工作态度有待端正，导致项目进度受到影响，对同事深感抱歉，在以后工作中一定加强自我约束，提高团队协作能力，尽早成为团队中坚力量。'
      }else{
        this.data = [
          { name: "组别:", value: "负责组" },
          { name: "任务:", value: "撰写电厂煤量库存校核方法研究报告、现场盘煤验证" },
          { name: "任务周期:", value: "2022.9.1-2022.9.30、2022.10.1-2022.12.31" },
          { name: "完成情况:", value: "按既定要求和计划完成" },
          { name: "绩效得分:", value: "87.7" },
          { name: "碳积分:", value: "1170" },
        ]
        this.content = ''
        this.contents = '除了做好自身的本职工作外，要不断提升自我，不断充实自己，完善自己，迎接更多的挑战。'
      }
    }
  }
}
</script>

<style>

</style>