import {userMenu, adminMenu} from '../consts/Role';
const USER_KEY = 'user';

let saveUser = (user)=>{
    console.log(JSON.stringify(user));
    localStorage.setItem(USER_KEY,JSON.stringify(user));
}

let getUser = ()=>{
    return JSON.parse(localStorage.getItem(USER_KEY)||null);
}

let getUserId = () => {
    if (getUser()===null) return 0;
    else return getUser().userId;
}

let getRemember = () => {
    if (getUser()===null) return false;
    else return getUser().remember;
}

let removeUser = ()=>{
    localStorage.removeItem(USER_KEY);
}

let getRoleMenu = () =>{
    if (getUser()===null) return null;
    else if (getUser().type==='ADMIN'){
        return adminMenu;
    }else return userMenu;
}

export { saveUser, getUser, removeUser, getUserId, getRoleMenu, getRemember }