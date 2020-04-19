# fruit-mall
水果商城
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

# 2、使用element UI
### 1、引入element ui
#### 使用vue add elment 的方式自动注入ui,实现按需引入
`
vue add element
`

选择按需加载

`
Import on demand
`
### 2、自定义ui主题颜色
1、打开element ：[官方在线主题编辑工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)

2、编辑完成后点击下载主题，将文件解压复制（可重命名）

3、在 **src** 目录下新建 **theme** 文件夹，将文件粘贴进去

4、在 **main.js** 处引入

`
import '../theme/element-color/index.css'
`