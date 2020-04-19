# fruit-mall
水果商城,持续更新
## 技术栈 
- 核心部分 vue + vue-route + vuex
- 脚手架cli4
- Vant UI组件库
# 目录结构
- public
- src
  - asset
  - components 公共组件
  - plugins 
    - element.js ——elment ui 按需引入配置
  - rooter 路由
  - style  样式
  - store
  - theme 自定义ui颜色样式  
  - views 
  - App.vue 入口模板
  - main.js  入口文件
  - **vue.config.js**  配置项

# 1、样式处理
#### 1、使用postcss-plugin-px2rem转换px单位
安装：`npm i --save postcss-plugin-px2rem`

根目录创建一个名为***vue.config.js***的文件写入
```
module.exports={
css:{
                loaderOptions: {
                    postcss: {
                        plugins: [
                            require('postcss-plugin-px2rem')({
                                rootValue: 37.5, //换算基数， 默认100  ，可以设置为75这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                                // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                                //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                                // propBlackList: [], //黑名单
                                exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                                // selectorBlackList: [], //要忽略并保留为px的选择器
                                // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                                // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                                mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                                minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                            }),
                        ]
                    }
                }
            }
}
```
#### 2、flexible
- 主要是用来响应式改变根元素的字体大小
- 安装：`npm install lib-flexible --save`
- 在main.js中导入`import 'lib-flexible`

# 2、引入Vant ui库
#### 1、安装
`npm i vant -S`
#### 2、自动按需引入
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
##### 安装插件
`npm i babel-plugin-import -D`
```
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'vant';
```