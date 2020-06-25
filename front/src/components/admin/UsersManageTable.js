import React from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import {getUser,disable,enable} from '../../services/UserService'

export default function UsersManageTable() {
    let [data, setData] = React.useState([])

    React.useEffect(() => {
        getUser((data)=>{setData(data)}).catch();
    }, []);

    const setStatus = (oldData,status) =>{
        let newData = oldData;
        newData.disable = status;
        const dataUpdate = [...data];
        dataUpdate[data.indexOf(oldData)] = newData;
        setData(dataUpdate);
    }

    const onDisableUser=(oldData)=>{
        disable(oldData,
            (data,status) =>setStatus(data,status)).catch();
    }

    const onEnableUser=(oldData)=>{
        enable(oldData,
            (data,status) =>setStatus(data,status)).catch();
    }


    return (
        <MaterialTable
            style={{padding:'2%'}}
            title="用户管理"
            columns={[
                { title: '用户ID', field: 'userId' },
                { title: '用户名', field: 'username' },
                { title: '用户邮箱', field: 'email' },
                { title: '用户角色', field: 'type', lookup: { ADMIN: '管理员', NORMAL: '普通用户'},},
                { title: '用户状态', field: 'disable', lookup: { true: '已被禁用', false: '正常' },},
                { title: '操作',
                    render: data=>{
                        if(data.disable === false)
                            return <Button variant="outlined" color="secondary" onClick={onDisableUser.bind(this,data)}>禁用</Button>;
                        else return <Button variant="outlined" color="default" onClick={onEnableUser.bind(this,data)}>解禁</Button>;
                    }},
            ]}
            data={data}
            options={{
                filtering: true,
            }}
        />
    )
}