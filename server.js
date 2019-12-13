const express = require('express');
const path = require('path');
const app = express();



if(process.env.NODE_ENV ==='production'){
  console.log({env:"production"})
//make every file in dist/ available
  // make sure to build if you make any changes
  app.use(express.static('dist'));
  // any get request made should 
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
  });
}else{
  console.log({env:"development"})
  const webpackMiddleware = require('webpack-dev-middleware'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

const PORT = 8112;
app.listen(process.env.PORT || PORT,()=>console.log("Listening at port "+PORT));