# react-ts-demo
使用typescript的react项目搭建：

1. yarn add -g create-react-app

2. create-react-app my-app --scripts-version=react-scripts-ts

3. npm install -S react-router-dom；npm install -D @types/react-router-dom

4. 在src下新建routes.tsx

5. 在index.tsx中引入routes

6. 在根目录新建.env配置文件，如：PORT=2000等

7. 在根目录新建.vscode/settings.json，配置vscode，如：保存格式化代码等
（参考：https://blog.csdn.net/Gabriel_wei/article/details/90440542）

参考官方文档：

1. create react app：https://www.html.cn/create-react-app/docs/getting-started/
2. react router：https://react-guide.github.io/react-router-cn/index.html；

tslint配置参考：https://github.com/palantir/tslint-react；https://www.jianshu.com/p/2b409dfc8f75
tslint错误列表：https://blog.csdn.net/weixin_42659625/article/details/81002985
tslint报错：
1. Import sources within a group must be alphabetized.--->"ordered-imports": false
2. Lambdas are forbidden in JSX attributes due to their rendering performance impact--->"jsx-no-lambda": false
3. Value must be set for boolean attribute--->react使用严格路由时通常加上exact属性就行了，但tslint校验不通过，改为exact={true}
4. interface name must start with a capitalized I--->"interface-name": false