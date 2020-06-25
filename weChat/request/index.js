let ajaxTime = 0;

export const request=(params)=>{
  ajaxTime++;
  wx.showLoading({
    title: '加载中',
    mask: true,
  }) 
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success:(result)=>{
        resolve(result);
      },
      fail:(error)=>{
        resolve(error);
      },
      complete:()=>{
        ajaxTime--;
        if(ajaxTime===0){
          wx.hideLoading()           
        }
      }
    })   
  })  
}