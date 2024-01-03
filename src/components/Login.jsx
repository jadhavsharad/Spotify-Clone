import React from 'react'
import logo from '../assets/logo.png'
import { Button, Divider } from "@nextui-org/react";

export default function Login() {

    const login = [
        {
            title: "Continue with Google",
            logo: "https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
        },
        {
            title: "Continue with Facebook",
            logo: "https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg"
        },
        {
            title: "Continue with Apple",
            logo: "https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg"
        },
        {
            title: "Continue with Phone Number",
            logo: ""
        }
    ]
    return (
        <div className=' overflow-auto bg-zinc-900'>
            <div className='w-full bg-black h-[14vh] flex items-center px-[3.5vw]'>
                <img src={logo} className='h-[5vh]' alt="" />
            </div>

            <div className='w-[50vw] bg-black rounded-2xl my-[1.5%] mx-auto flex flex-col items-center justify-center'>
                <div className='py-12'>
                    <h1 className='text-white text-5xl font-NotoSans font-extrabold text-center'>Log in to Spotify</h1>
                </div>
                <div className='grid'>
                    {login.map((logo) =>
                        <Button size='sm' className='text-white rounded-full border-[1px] px-12 border-[#878787] hover:border-[#fff] font-semibold my-2 py-5 font-NotoSans flex justify-between' variant="bordered"><img src={logo.logo} alt="" />{logo.title}</Button>
                    )}
                </div>

                <Divider className="my-6 bg-[#858585] max-w-md" />

                <div className='flex flex-col text-white font-medium font-karla text-sm overflow-hidden'>
                    <label htmlFor="email" className='-mb-2'>Email or Username</label>
                    <input id='email' aria-invalid="false" type="email" placeholder="Email or Username" autocapitalize="off" autocomplete="username" className='bg-[#151515] border-[1px] border-[#808080] p-3 outline-none my-4 rounded-lg w-72 focus:border-white hover:border-white duration-200'></input>

                    <label htmlFor="password" className='-mb-2'>Password</label>
                    <input id='password' type="password" placeholder="Password" autoComplete='password' className='bg-[#151515] border-[1px] border-[#808080] p-3 outline-none my-4 rounded-lg w-72 focus:border-white hover:border-white duration-200'></input>
                </div>
            </div>
        </div>
    )
}
