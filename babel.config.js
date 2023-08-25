
const pluginslog = ["@vue/babel-plugin-transform-vue-jsx"]
// 生产环境移除console
if(process.env.NODE_ENV === 'production') {
//  pluginslog.push("transform-remove-console")
}
module.exports = {
  plugins: [
    //plugins,
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ...pluginslog
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
