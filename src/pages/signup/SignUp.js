import './signup.css'
import logo from '../../assets/logo.svg'
import {  Link  } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const SignUp =()=>{
    const [isLoading, setIsLoading]=useState(false)
    const navigate = useNavigate()
const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
});




const handleOnChange = (e)=>{
    // userData[e.target.name]=e.target.value;
    const updatedData = {...userData}
    updatedData[e.target.name] = e.target.value
    setUserData(updatedData)
};

const createUser = async (data) => {
    setIsLoading(true)
    const res = await fetch(`http://ferasjobeir.com/api/users/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    const json = await res.json();
    setIsLoading(false)
    
    if (json.success){
        window.alert(json.messages)
        navigate('/login')
     }else {
        window.alert(json.messages)
    
     }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(userData);
  };
 
 

    return(
        
        <div className='all'>
            <form onSubmit={handleSubmit}>
       <div className='box'>
        <div className='content'>
            <div className='img1'><img src={logo} className='logo' alt='this out logo'/></div>
            <h1>Create Account</h1>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={handleOnChange}/>
        <label htmlFor='email'>Email Adress</label>
        <input type='text' name='email' onChange={handleOnChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'onChange={handleOnChange} />
         <label htmlFor='password_confirmation'>Password Confirmation</label>
         <input type='password' name='password_confirmation' onChange={handleOnChange}/>
         <div className='btn1'>
         <Link  to={'/login'}>Login</Link>
            <button type='submit'className='btn' disabled={isLoading}>{isLoading? 'Please Wait':'Register'} </button>
         </div>
         </div>
        </div>
        </form>
        </div>
        
        


    
      

    )
}
export default SignUp