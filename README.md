### 搭建一个新项目

mkdir yeah-my-kanban && cd yeah-my-kanban
git init
npm init -y

在项目根目录加入 .nvmrc 添加一行代码 16.17.1

### 安装构建工具 Vite

npm install -D vite

在 package.json 里加入两个新的命令

"scripts": {
"start": "vite dev --open",
"build": "vite build",
}

再在项目根目录添加一个入口 HTML 文件 index.html

运行 npm start 项目就启动了






