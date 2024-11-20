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


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
  <script type="module" src="./src/index.jsx"></script>
</html>

运行 npm start 项目就启动了


### 配置 React 插件


npm install react react-dom
npm install -D @vitejs/plugin-react

#### 加入一个配置文件 vite.config.js


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});



#### src/index.jsx


import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>Yeah My Kanban</div>
  </React.StrictMode>
);


#### index.html </body>之后加入

 <script type="module" src="./src/index.jsx"></script>





### 配置 Emotion

npm install @emotion/react
npm install -D @emotion/babel-plugin




#### 修改配置文件vite.config.js ，利用 emotion 的 Babel 插件为 JSX 加入 css 属性




export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});



### 代码自动补全

npm install -D @types/react @types/react-dom



### 代码静态检查

npm init @eslint/config -y





###  Git Hook

npx husky-init && npm install


#### 在 package.json 中额外加入一个 lint-staged 命令

"lint-staged": "echo 'Pre-commit!'",

