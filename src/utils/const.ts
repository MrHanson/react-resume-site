export const LOCAL_STORE = {
  MD_RESUME: 'md-resume',
  MD_COUNT: 'md-count',
  MD_COLOR: 'md-color',
  MD_THEME_LIST: 'md-theme-list',
  MD_UPDATE_LOG: 'md-update-log'
}

export const INIT_COLOR = '#000';

document.body.style.setProperty("--bg", INIT_COLOR);

export const UPDATE_LOG_VERSION = 1;

export const INIT_CONTENT = `
# Hanson

chihanghanson@gmail.com

https://github.com/mrhanson

## 工作经历

### xxx科技有限公司

\`工程化\` \`基建搭建\` \`Vue\`

前端工程师 OA研发 公共平台

#### 公共项目模板Vue-boilerplate

- 编写函数式弹窗组件，状态自管理，解决模板臃肿的问题
- 编写浮点数运算函数，应对js精度丢失的问题
- 通过修改vue-loader的innerHTML配置，配合xss工具库，增加v-html指令的xss处理
- 使用webpack dll插件对常用依赖进行分包处理，提升构建速度
- 为构建模板加入cdn地址的dns预解析（dns-prefetch）和请求api的预链接（preconnect），减少白屏时间

### xxx科技有限公司 （2020.03-至今）

\`微信小程序\` \`业务开发\` \`Vue\` \`uni-app\`

前端工程师 产品与研发部

#### SaaS平台

- 小程序经纪人注册页面的动态表单渲染
- 小程序楼盘详情全屏轮播动效实现

#### xxx项目

- 小程序tabarbar组件编写，替换原生tabbar，解决指引蒙层无法全屏覆盖的问题
- h5活动页奖品长列表虚拟滚动化，优化因dom过多页面卡顿的问题
- pc web递归菜单组件实现

## 个人项目

### http 请求库 Fexios

\`Fetch\` \`Typescript\` 
https://github.com/MrHanson/fexios

- 使用Typescript编写的浏览器端请求库，底层依赖Fetch
- 与Axios相似的api，支持请求超时设置，拦截器

### 页面布局组件 React-listview

\`React\` \`Typescript\`
https://github.com/MrHanson/react-listview

- 基于Ant-design的列表页组件，通过json schema快速生成列表页界面
- 支持api请求及拦截，分页功能，告别繁琐的CRUD

## 教育经历
:::left
xxx大学

软件工程 本科
:::

::: right
2015.09 - 2019.07

珠海
:::
`;
