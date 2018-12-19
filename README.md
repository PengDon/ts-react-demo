### 

# 创建新项目
```
cnpm i -g create-react-app
create-react-app ts-react-demo --scripts-version=react-scripts-ts
cd ts-react-demo
yarn eject
yarn start
cnpm i -D enzyme @types/enzyme react-addons-test-utils
cnpm i -S redux react-redux @types/react-redux
```



## 常见问题
### ts项目报错：Import sources within a group must be alphabetized
> 报错：Import sources within a group must be alphabetized.

> 原因：import名称排序问题，要求按照字母从小到大排序；修改 tslint.json 中 rules 的规则 “ordered-imports” 为 false 即可。

> 解决：
```
"rules": {
　　"ordered-imports": false
}
```