// pages/cart/cart.js
import { request } from "../../request/index"
import { getUserId } from "../../utils/storage"

export function Order(userId,price,payed,productList) {
  this.userId = userId;
  this.price = price;
  this.payed = payed;
  this.productList = productList;
}

export function Item(userId,bookId,quantity,selected){
  this.userId = userId;
  this.bookId = bookId;
  this.quantity = quantity;
  this.selected = selected;
}

export function BookListItem(bookId,quantity) {
  this.bookId = bookId;
  this.quantity = quantity;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [],
    totalPrice: "",
    userId: "",
    isDisable: true,
  },

  onChangeQuantity(event){
    const item = event.currentTarget.dataset.index;
    const quantity = event.detail;
    if(quantity===0){
      request({ 
        url: "http://localhost:8814/cart/delete",
        data: {userId:this.data.userId, bookId:item.book.id},
      }).then(response=>{
        this.setData({itemList:response.data});     
        this.setTotalPrice(response.data);  
      }) 
      return;
    }else{
      let newItem = new Item(this.data.userId, item.book.id, event.detail, item.selected);
      request({ 
        url: "http://localhost:8814/cart/update",
        data: newItem,
      }).then(response=>{
        this.setData({itemList:response.data});     
        this.setTotalPrice(response.data);  
      })   
    }
  },

  onChangeSelect(event){
    const item = event.currentTarget.dataset.index;
    
    let newItem = new Item(this.data.userId, item.book.id, item.quantity, !item.selected);
    request({ 
      url: "http://localhost:8814/cart/update",
      data: newItem,
    }).then(response=>{
      this.setData({itemList:response.data});     
      this.setTotalPrice(response.data);  
    })   
  },

  onSubmitOrder(){
    let totalPrice = 0;
    let productList = [];
    this.data.itemList.forEach(item =>{
      const book = item.book;
      if(item.selected === true){
        totalPrice += book.price * item.quantity;
        productList.push(new BookListItem(book.id,item.quantity));
      }
    })
    let order = new Order(this.data.userId, totalPrice, true, productList);
    request({ 
      url: "http://localhost:8814/order/add",
      method: "post",
      data: order,
    }).then(response=>{
      if(response.data.status == 200){
        wx.showToast({
          title: '添加成功',
          icon: 'succes',
          duration: 1000,
          mask:true
        })
        this.setData({itemList:response.data.data});
        this.setTotalPrice(response.data.data);  
      }else{
        wx.showToast({
          title: response.data.message,
          icon: 'error',
          duration: 1000,
          mask:true
        })
      }
      
    })   
  },

  setTotalPrice: function (itemList){
    let totalPrice = 0;
    itemList.forEach(item =>{
        if(item.selected === true) totalPrice += item.book.price * item.quantity * 100;
    })
    this.setData({totalPrice:totalPrice, isDisable:(totalPrice==0)}) 
  },

  getPrice: function(item){
    return item.quantity * item.book.price;
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({userId:getUserId()});
    request({ 
      url: "http://localhost:8814/cart/get",
      data: {id:this.data.userId},
    }).then(response=>{    
      this.setData({itemList:response.data});  
      this.setTotalPrice(response.data);  
    })   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({userId:getUserId()});
    request({ 
      url: "http://localhost:8814/cart/get",
      data: {id:this.data.userId},
    }).then(response=>{    
      this.setData({itemList:response.data});  
      this.setTotalPrice(response.data);  
    })   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})