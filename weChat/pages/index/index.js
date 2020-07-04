import { request } from "../../request/index"
import { saveUser, removeUser } from "../../utils/storage"

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userName: "",
    password: "",
    errorMessage: "",
  },
  //用户名输入
  bindNameInput: function(event){
      this.setData({userName : event.detail.value})
  },
  //密码输入
  bindPasswordInput: function(event){
    this.setData({ password: event.detail.value })
  },
  
  //事件处理函数
  bindViewTap: function() {
    var that = this;
    request({url:"http://localhost:8814/login", 
      data: {
        username: this.data.userName,
        password: this.data.password
      }}).then(response =>{
        if(response.data.status !== 200){
          that.setData({"errorMessage" : "用户名密码错误"});
        }else{
          removeUser();
          saveUser(response.data.data);          
          wx.switchTab({
            url: '../home/home'
          })
        }}
      )
  },
  onLoad: function () {
   },
   
})
