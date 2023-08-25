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
import PersoNal from "../personal";
export default {
  components: {
    PersoNal,
  },
  data() {
    return {
      data: [
        { name: "组别:", value: "经理组" },
        { name: "任务:", value: "撰写可行性研究方案，列出验收清单、审核材料" },
        { name: "任务周期:", value: "2020.7.1-2020.7.31、2021.6.1-2021.6.30" },
        {
          name: "完成情况:",
          value: "按既定要求和计划完成（获得上级部门的口头表扬）",
        },
        { name: "绩效得分:", value: "91" },
        { name: "碳积分:", value: "1598" },
      ],
      name: "王林",
      content: "",
      contents:
        "在撰写可行性研究方案时，撰写前，一定要有一个清晰的方案，技术参数必须真实可信，采用科学方法来预判结果，让结果更加合理，撰写中必须运用系统的论证方法，撰写过程中也需注意撰写逻辑的严谨性。",
    };
  },
  methods: {
    getVal(val) {
      if (val === 1) {
        this.data = [
          { name: "组别:", value: "经理组" },
          {
            name: "任务:",
            value: "撰写可行性研究方案，列出验收清单、审核材料",
          },
          {
            name: "任务周期:",
            value: "2020.7.1-2020.7.31、2021.6.1-2021.6.30",
          },
          {
            name: "完成情况:",
            value: "按既定要求和计划完成（获得上级部门的口头表扬）",
          },
          { name: "绩效得分:", value: "91" },
          { name: "碳积分:", value: "1598" },
        ];
        this.content = "";
        this.contents =
          "在撰写可行性研究方案时，撰写前，一定要有一个清晰的方案，技术参数必须真实可信，采用科学方法来预判结果，让结果更加合理，撰写中必须运用系统的论证方法，撰写过程中也需注意撰写逻辑的严谨性。";
      } else {
        this.data = [
          { name: "组别:", value: "经理组" },
          {
            name: "任务:",
            value:
              "负责与上级单位和合作单位的整体协调、负责项目进度统筹协调",
          },
          { name: "任务周期:", value: "2021.10.1-2023.6.30" },
          { name: "完成情况:", value: "未及时与合作单位沟通，导致调研工作滞后" },
          { name: "绩效得分:", value: "82" },
          { name: "碳积分:", value: "1393" },
        ];
        this.content = "";
        this.contents =
          "由于本人工作中的漏洞，导致调研工作滞后，后期我会注重自身工作效率，时刻关注时间节点。";
      }
    },
  },
};
</script>

<style>
</style>