const USER_KEY = 'user';

let saveUser = (user)=>{
    wx.setStorageSync(USER_KEY,JSON.stringify(user));
}

let getUser = ()=>{
    return JSON.parse(wx.getStorageSync((USER_KEY))||{});
}
let getUserId = () => {
    if (getUser()===null) return 0;
    else return getUser().userId;
}

let removeUser = ()=>{
    wx.removeStorageSync(USER_KEY);
}

export { saveUser, getUser, removeUser, getUserId }