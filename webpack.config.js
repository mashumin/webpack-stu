var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
  entry:path.join(__dirname,"./src/main.js"),
  output:{
    path:path.join(__dirname,"./dist"),
    filename:"main.js"
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,"./src/index.html"),
      filename:"index.html"
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.(ttf|ogg)$/,use:"url-loader"},
      {test:/\.vue$/,loader:"vue-loader"}
    ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
}