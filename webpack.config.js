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
      {test:/\.css$/,loader:["style-loader","css-loader"]},
      {test:/\.(ttf|ogg)$/,loader:"url-loader"},
      {test:/\.(jpg|png|jpeg|gif)$/,loader:"url-loader?limit=76323&name=[hash:8]-[name].[ext]"},
      {test:/\.vue$/,loader:"vue-loader"}
    ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
}