'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineViewGridAdd } from "react-icons/hi";



export default function Signup() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [username, setUsername] = useState("")
const [error, setError] = useState("")








  return (
    
    <div className='flex justify-center py-32 px-5'>

    <form className="flex max-w-md flex-col py-5 gap-4 w-96">
      <h1>
        Sign up
      </h1>
      <p className='text-xs text-slate-700'>
        Get your own account with GproFund and start making making contributions on stalled Government Projects
      </p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput id="username" type="text" placeholder="Nana_Addo" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@gmail.com...." required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1"  type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" className='' color="blue">
        Submit  
      </Button>
    </form>
    </div>

  );
}
