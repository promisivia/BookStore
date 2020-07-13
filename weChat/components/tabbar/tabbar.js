// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      if(event.detail==0){
        wx.navigateTo({
          url: '../../pages/home/home',
        })
      }else if(event.detail==1){
        wx.navigateTo({
          url: '../../pages/cart/cart',
        })
      }else if(event.detail==2){
        wx.navigateTo({
          url: '../../pages/profile/profile',
        })
      }
    },
  }
})
