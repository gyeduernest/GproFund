'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {  useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../../firebaseConfig"



export default function Login() {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorState, setErrorState] = useState("");
const navigate = useNavigate();



const createAccount = async (e) => {
  e.preventDefault();

   if (!username || !email || !password) {
    console.error('Please provide both email and password.');
    setErrorState('Please recheck and input email and password.');
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // const user = userCredential.user;

    navigate('/dashboard');
  } catch (error) {
    console.error('Authentication Error:', error);
  }
    
  
};





  return (
    
    <div className='flex justify-center lg:py-32 md:py-16 sm:py-16 py-16 px-5'>

    <form className="flex max-w-md flex-col py-5 gap-4 w-96"   >
      <h1>
        Log in
      </h1>
      <p className='text-xs text-slate-700'>
        Get your own account with GproFund and start making making contributions on stalled Government Projects
      </p>
      {errorState && (
          <div className="text-red-600 text-end mt-2 mb-3 rounded-md px-3  py-2 text-xs font-semibold bg-red-100">
            {errorState}
          </div>
    )}
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@gmail.com...." required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1"  type="password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" className='' color="blue" onClick={createAccount} >
        Submit  
      </Button>
        
        <Link to="/" className='text-center'>
          Dont have an Account? Create Account        
        </Link>

    </form>
    </div>

  );
}
