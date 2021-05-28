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

export const INIT_MD_CONTENT = `
# 梁智恒 Hanson

086-13178822744 | chihanghanson@gmail.com

https://github.com/mrhanson

## 技术栈

- 框架：Vue.js, React.js, Koa.js
- 库：Element UI, Ant Design, Axios, Day.js, lodash ...
- 工具：Webpack, Rollup, Parcel, Mock.js
- 测试&部署: Jest, Travis CI, Puppeteer

## 工作经历

### 广州棒谷科技有限公司（2019.06-2020.03）

\`工程化\` \`Vue\` \`Node.js\` \`OA\`

**前端工程师** OA研发 公共平台

#### 公共项目模板Vue-boilerplate

- 根据业务需求对element-ui进行二次封装，并完善其文档。
- 参与通用工具方法的编写，及其单元测试
- 参与webpack项目构建的优化，通过dll分包提升构建速度
- 使用Mock.js在dev-server模拟后端接口数据

#### erp站点前端业务开发

- 负责财务，KPI绩效，日程，考勤等多个前端项目的业务开发

### 深圳思为科技有限公司 （2020.03-2021.05）

\`微信小程序\` \`Vue\` \`uni-app\` \`房地产业务\`

**前端工程师** 产品与研发部

#### 标准营销云2.0

- 负责经纪人模块的前端业务开发。参与小程序经纪人注册、角色变更，佣金单，等多个需求的开发，以及线上问题的响应

#### 中铁生态城文旅项目

- 主要负责中铁生态城微信小程序端的前端开发。
   - h5活动页奖品长列表虚拟滚动化，优化因dom过多页面卡顿的问题
   - h5营销活动抽奖轮盘实现
   - 小程序客户描摹动态表单渲染
   - 小程序tabarbar组件编写，替换原生tabbar，解决指引蒙层无法全屏覆盖的问题
- 参与pc web递归菜单组件实现，数据概览图表开发

## 教育经历

:::left
北京理工大学珠海学院

软件工程 本科
:::

::: right
2015.09 - 2019.07

珠海
:::
`;
