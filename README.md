## 依赖安装

### 项目依赖

```sh
# 安装项目依赖
pnpm install
```

### 启动

> 建议提前打开 pm2 监控界面: pm2 monit

```sh
# 预构建项目依赖
pnpm prebuild:dev

# 启动 debug server
pnpm debug:start
# 启动 内置插件
pnpm exts:start
# 启动 编辑器/阅读器 项目
pnpm prod:start
# 启动 工具编译监听
pnpm tools:start
# 启动 依赖编译监听
pnpm pkg:start

# 启动 debug server
pnpm debug:stop
# 启动 内置插件
pnpm exts:stop
# 启动 编辑器/阅读器 项目
pnpm prod:stop
# 启动 工具编译监听
pnpm tools:stop
# 启动 依赖编译监听
pnpm pkg:stop
```

```
访问 pm2 监控界面中 vite 启动地址

打开 devtool

输入 openDebug('http://192.168.50.41:9999')

(注意: 根据需求修改 app.config.yml 和 ext.manifest.yml 中的 IP)
```

> 其他

```sh
# 保证 pnpm 终端颜色输出
pnpm config set color always
```

## hosts 配置

```
127.0.0.1 simple-data-dev.com
127.0.0.1 login.simple-data-dev.com
127.0.0.1 editor.simple-data-dev.com
127.0.0.1 verdaccio.simple-data-dev.com
127.0.0.1 deps.simple-data-dev.com
```

## 提交流程

### 需要产生 changelog 的提交

1. 修改完成后 pnpm bump (填写本次提交日志信息, 完成变更标记)
2. git add .
3. pnpm commit

### 不需要产生 changelog 的提交

1. git add .
2. pnpm commit

## 发版流程

1. pnpm bump:v
2. git add .
3. pnpm commit(更新 changelogs)

### 预构建前端生产资源

```sh
# 启动控制台项目
pnpm preview:console-prod
# 等待上条指令完成后, 打开新命令窗口, 再构建远程模块(避免 dist 目录被清除)
pnpm preview:console-remote
```

远程模块构建完成后, 访问第一条指令打印地址

## 依赖版本

```json
{
  "dependencies": {
    "antd": "4.24.8",
    "mobx": "6.7.0",
    "mobx-react-lite": "3.4.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "systemjs": "6.13.0"
  },
  "devDependencies": {
    "tslib": "2.5.2",
    "typescript": "5.0.4"
  }
}
```

## 项目目录结构

```
.
├── docs # 项目设计文档放置
├── packages # 项目公用依赖目录
├── production # 按单页应用管理产品
│   ├── console # 控制台
│   └── ...
├── production # 按单页应用管理产品
├── remotes # 不同应用远程模块
│   ├── <prod_name> # prod_name 应用远程模块
│   │   ├── <remote_type>-<remote_name>
│   │   └── ...
├── templates # 不同项目模板
│   ├── production # 生成新单页应用模板
│   └── remote # 远程模块模板
└── tools # 项目工具类包(命令工具集合)
    ├── index.html
    ├── assets/**
    ├── <prod_name>-layout-<layout_name>
    │   ├── main.js
    │   └── *.*
    ├── <prod_name>-module-<module_name>
    │   ├── main.js
    │   └── *.*
    └── ...
.
```

## 输出目录结构

```
.
└── <prod_name>
    ├── index.html
    ├── assets/**
    ├── <prod_name>-layout-<layout_name>
    │   ├── main.js
    │   └── *.*
    ├── <prod_name>-module-<module_name>
    │   ├── main.js
    │   └── *.*
    └── ...
.
```
