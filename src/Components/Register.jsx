import React from 'react'
import logo from '../images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = () => {
        fetch('http://localhost:3002/register', {
            method : "post",
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify({
                name : userName,
                email : email,
                password : password
            })
        })
        .then(response => response.json())
        .then(data => {  
            if (data) {
                console.log(data);
            }
        })
    }

    return (
        <div className='bg-[#22252e] flex justify-center items-center w-full h-[100vh] m-0 p-0'>
            <form className='bg-[#2b2f39] flex flex-col justify-center items-center w-[400px] h-[500px] p-8 rounded-[26px]'>
                <img src={logo} alt="logo" className='w-[100px] h-[100px]'/>
                <p className='mb-[2rem] text-[14px]'>جهت استفاده از امکانات گیم اسیست عضو سایت شوید</p>
                <input type="text" placeholder='نام کاربری' required onChange={ (e) => setUserName(e.target.value)} className='w-full h-[45px] mb-[2rem] p-4 bg-[#22252e] text-right text-[20px] rounded-[10px]' />
                <input type="email" placeholder='ایمیل' required onChange={ (e) => setEmail(e.target.value)} className='w-full h-[45px] mb-[2rem] p-4 bg-[#22252e] text-right text-[20px] rounded-[10px]' />
                <input type="password" placeholder='رمز عبور' required onChange={ (e) => setPassword(e.target.value)} className='w-full h-[45px] mb-[2rem] p-4 bg-[#22252e] text-right text-[20px] rounded-[10px]' />
                <input type="submit" value='ثبت نام' onClick={sendData} className='bg-[#ff6600] text-black mx-[1rem] px-[2.5rem] w-full mb-[1rem] py-[12px] rounded-[10px] cursor-pointer hover:bg-white transition-all duration-500' />
                <Link to='/login'><p className='text-[14px] cursor-pointer'>! قبلا عضو شده اید؟ وارد شوید</p></Link>
            </form>
        </div>
    )
}

export default Register