# 项目说明

## 基于vue-cli，根据公司规范制定的项目模板，帮助新项目的开发

##页面目录说明 ##

├── public # 静态资源
│ │── favicon.ico # favicon 图标
│ └── index.html # html 模板
├── src # 源代码
│ ├── api # 所有 api 请求
│ ├── assets # 静态资源
│ │ ├── images # 前端图片
│ │ └── styles # 公共样式（包含 UI 框架样式覆盖、公共样式等）
│ ├── components # 全局公用组件
│ ├── router # Vue-router 路由
│ ├── store # Vuex 全局状态 store 管理
│ ├── utils # 全局公用工具类方法
│ │ ├── request.js # 全局接口拦截器
│ │ └── utils.js # 公共方法
│ ├── views # views 所有页面
│ ├── App.vue # 入口组件
│ └── main.js # 入口文件（项目总入口，加载组件、初始化等）
├── .eslintrc.js # ESLint 语法校验配置文件
├── vue.config.js # vue-cli 脚手架配置
├── README.md # 说明文档文件
└── package.json # package.json
