import React from "react";
import { useReducer } from "react";



const Login = () => {
    
    return (
        <form method="post">
            <div className="w-[99%] h-[317px] pl-[2.5rem] pt-[1.5rem] bg-white rounded-[20px] ">
                <div className="pl-[0.5rem] pb-[0.5rem]">
                <label style={{'color':'black','font-size':'20px', 'font-weight':'300'}}>Email address</label>
                </div>
                <div className="pb-[0.5rem]">
                <input className="w-[325px] h-10 bg-neutral-100 pl-[0.5rem] rounded-[10px]" type="email" placeholder="Enter email address...." required/>
                </div>
                <div className=" pl-[0.5rem] pb-[0.5rem]">
                <label style={{'color':'black','font-size':'20px', 'font-weight':'300'}}>Password</label>
                </div>
                <div>
                <input className="w-[325px] h-10 bg-neutral-100 pl-[0.5rem] rounded-[10px]" type="password" placeholder="Enter your password" required/>
                </div>
                <div className="justify-between pt-[1rem] text-blue "> <a className='text-blue-600' href="#" style={{ 'font-weight':'300'}} >Forgot Password?</a></div>
                <div className="pt-[1rem]">
                <button type="submit" className='bg-black w-[325px] h-10 rounded-[10px] text-center text-white hover:bg-zinc-500  '>Sign In</button>
                </div>
            </div>
        </form>
    )
};


export default Login;