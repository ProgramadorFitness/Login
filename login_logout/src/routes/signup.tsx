import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Signup(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState("");
    const [passwordR, setPasswordR] = useState("");

    const auth = useAuth();

    if(auth.isAuthenticated){
      return <Navigate to="/dashboard"/>
    }
    
    return (

        <DefaultLayout>
            <form className="form">
                <h1>Login</h1>
                <label>Name</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>

                <label>Last Name</label>
                <input 
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}/>

                <label>Identification</label>
                <input 
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}/>

                <label>Phone</label>
                <input 
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
                
                <label>Adress</label>
                <input 
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}/>

                <label>Email</label>
                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                
                <label>Username</label>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                
                <label>Password</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                
                <label>Password</label>
                <input 
                type="password"
                value={passwordR}
                onChange={(e) => setPasswordR(e.target.value)}/>
                
                <button>Create User</button>
            </form> 
        </DefaultLayout>
    
    );
}