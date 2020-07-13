import React from 'react';
import '../../css/Login.css'
import '../../assets/background.jpg'
import RegisterForm from '../../components/role/RegisterForm'

export default function RegisterView(){
    return(
        <div className='login-page'>
            <div className='login-content'>
                <div className='login-card'>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )
}