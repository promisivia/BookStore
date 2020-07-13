import axios from "axios";
import qs from "qs";
import { message } from "antd";
import { history } from '../utils/HistoryUtils'
import { saveUser } from '../utils/StorageUtils'

export const login = async (user)=> {
    axios.post("http://localhost:8814/login", qs.stringify(user))
        .then(response =>{
            if(response.data.status !== 200){
                message.error(response.data.message);
            }else{
                const returnData = response.data.data;
                delete returnData['password'];
                returnData["remember"] = user.remember;
                saveUser(returnData);
                history.push('./home');
                message.success("登陆成功");
            }})
        .catch(error=>console.log(error));
}

export const register = async (user)=> {
    axios.post("http://localhost:8814/register", qs.stringify(user))
        .then(response => {
            if(response.data.status !== 200){
                message.error(response.data.message);
            }else{
                history.push('./login');
                message.success("注册成功");
            }
        })
        .catch(error=>console.log(error));
}

export const getUser = async (setData)=>{
    axios.get("http://localhost:8814/getUsers")
        .then(response =>setData(response.data))
        .catch();
}

export const setProfile = async (data,setData)=> {
    axios.post("http://localhost:8814/setAvatar", qs.stringify(data))
        .then(response => {
            saveUser(response.data);
        }).catch(error=>console.log(error))
}

export const disable = async(user, setStatus) => {
    axios.post("http://localhost:8814/admin/user/disable",
        qs.stringify({id:user.userId}))
        .then(response => {
            message.success("成功禁用");
            setStatus(user,true);
        }).catch(error=>message.error("禁用失败"));
}

export const enable = async(user, setStatus) => {
    axios.post("http://localhost:8814/admin/user/enable",
        qs.stringify({id:user.userId}))
        .then(response => {
            message.success("成功解禁");
            setStatus(user,false);
        }).catch(error=>message.error("解禁失败"));
}
