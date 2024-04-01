import { useRef, useState } from "react";

import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../../Firebase/firebase.config";

const Login = () => {

const [loginError,setLoginError] =useState('');
const [loginSuccess,setLoginSuccess] =useState('')
const emailRef = useRef(null)




    const [showPass,setShowPass] =useState(false);
    const handleShowPass =()=>{

        setShowPass(!showPass)

    }
    const handleResister = e =>{
        e.preventDefault();
        setLoginError('')
        setLoginSuccess('')
        const email = e.target.email.value ;
        const password = e.target.password.value ;
     console.log(email,password)


     signInWithEmailAndPassword(Auth,email,password)
     .then(res => {
        const user = res.user;
        
        if(user.emailVerified){
            console.log(user)
            setLoginSuccess('Successfully Login')
        }else(
            alert('please verify your email')
        )


     }).catch((error) => {
  
    const errorMessage = error.message;
    setLoginError(errorMessage)
    console.log(loginError)
  });


    }



    const handleForgetPassword = ()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const email =emailRef.current.value
       if(!email){
        alert('please provide a email')
        return
       }
       else if(!emailRegex.test(email)){
        alert('please provide a valid email')
        return

       }


sendPasswordResetEmail(Auth,email)
    .then( alert('check your email'))
    .catch(err =>{setLoginError(err.message)})
    

    }








    return (
        <div>


{
               loginSuccess && <p className="text-center absolute left-0 right-0 top-28 text-green-600 ">
                    {loginSuccess}
                </p>
            }
            {
                    loginError && <p className=" text-center absolute left-0 right-0 top-28 text-red-600 ">
                        {loginError}
                    </p>
                }
            <h2 className="fromHeading"> Log in</h2>
            <form className=" *:my-5" onSubmit={handleResister}>
                <input 
                type="email" 
                name="email" 
                ref={emailRef}
                placeholder="enter your email"
                ></input><br />



                <div className="relative  ">
                <input className=" -z-10" type={!showPass ? "text":"password"}
                 name="password"
                  required placeholder="enter your password" />


                  <div className="flex py-4 px-4 absolute top-3 right-4 scale-125 z-50" onClick={handleShowPass}>
                    {!showPass ?<BsFillEyeSlashFill  className="absolute right-0 m-auto top-[25%] left-0" /> :<IoEyeSharp className="absolute right-0 m-auto top-[25%] left-0" />}
                    
                  </div>


                  </div>
                    <p className=" cursor-pointer" onClick={handleForgetPassword}> Forget password</p>



                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;