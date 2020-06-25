import React from 'react';
import '../../css/Login.css'
import '../../assets/background.jpg'
import LoginForm from '../../components/role/LoginForm'

export default function LoginView(){
    return(
        <div className='login-page'>
            <div className='login-content'>
                <div className='login-card'>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}