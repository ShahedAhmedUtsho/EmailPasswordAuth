import {  sendEmailVerification, updateProfile } from "firebase/auth";

import { useContext, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../Provider/Provider";
import { useNavigate } from "react-router-dom";

const Resister = () => {
    const [error ,setError] = useState('');
    const [success,setSuccess] =useState('');
    const [showPass,setShowPass] =useState(false);

    const {createUser,setName} = useContext(AuthContext)
    const navigate =useNavigate()


    const handleShowPass =()=>{

        setShowPass(!showPass)

    }

    const handleResister = e =>{
        
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const trams = e.target.trams.checked
        const fName =e.target.name.value
       
     // reset error 

     setError('')
     // reset success 
     setSuccess('')
        if(password.length <6){
            
            setError('Password should be at least 6 characters');
            return
        }else if (!trams){
            setError('please accept our terms and condition');
            return
        }

        // creat user 







        createUser(email,password)
        .then(res =>{
setName(fName)
            console.log(res.user)
            setSuccess('account successfully created')
            sendEmailVerification(res.user)
            updateProfile(res.user,{
                displayName:fName,
            }).then(console.log('successfully update')).catch()
            .then(
                console.log('check your email to verify')
            )
            navigate('/')
        })
     .catch( error => {
        const errorMessage = error.message ;
        // console.log(errorCode);
        // console.log(errorMessage)
        setError(errorMessage)
     }

     )


    }
    return (
        
        <div>
            {
                success && <p className="text-center absolute left-0 right-0 top-28 text-green-600 ">
                    {success}
                </p>
            }
            {
                    error && <p className=" text-center absolute left-0 right-0 top-28 text-red-600 ">
                        {error}
                    </p>
                }
            <h2 className="fromHeading"> Resister</h2>
            <form className=" *:my-4" onSubmit={handleResister}>
            <input type="text" name="name" required placeholder="name" ></input><br />
                <input type="email" name="email" required placeholder="enter your email" ></input><br />
               


                <div className="relative  ">
                <input className=" -z-10" type={!showPass ? "text":"password"}
                 name="password"
                  required placeholder="enter your password" />


                  <div className="flex py-4 px-4 absolute top-3 right-4 scale-125 z-50" onClick={handleShowPass}>
                    {!showPass ?<BsFillEyeSlashFill  className="absolute right-0 m-auto top-[25%] left-0" /> :<IoEyeSharp className="absolute right-0 m-auto top-[25%] left-0" />}
                    
                  </div>


                  </div>



                  
                  <div className="flex gap-3">
                    <input type="checkbox" name="trams" id="trams" />
                    <label htmlFor="trams">
                    <p> Accept about <a href="/">trams and condition</a></p>
                    </label>
                 
</div>

                <button type="submit" >Resister</button>
                
            </form>

        </div>
    );
};

export default Resister;