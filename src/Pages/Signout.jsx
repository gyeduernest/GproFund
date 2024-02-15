'use client';
import { Button } from 'flowbite-react';
import { signOut} from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import {auth} from "../../firebaseConfig"



export default function Logout() {


const navigate = useNavigate();



const Signout = async (e) => {
  e.preventDefault();

   

  try {
    await signOut(auth);
    // const user = userCredential.user;

    navigate('/');
  } catch (error) {
    console.error('Authentication Error:', error);
  }
  

    
  
};





  return (
    
    <Button className='bg-red-500 w-full mt-10' onClick={Signout}>
      Sign out
    </Button>

  );
}
