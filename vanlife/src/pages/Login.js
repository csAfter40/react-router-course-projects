import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../api";

export function loader({ request }) {
    const url = new URL(request.url);
    return url.searchParams.get("message");
}

export default function Login() {
    const message = useLoaderData()
    const [loginFormData, setLoginFormData] = React.useState({email:"", password:""});
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        message && toast(message);
    }, [])

    React.useEffect(()=>{
        error && toast(error.message)
    }, [error])

    function handleChange (event) {
        setLoginFormData((prevData)=>{
            const newData = {...prevData};
            newData[event.target.name] = event.target.value;
            return newData
        })
    }
    function handleSubmit(event) {
        setStatus("submitting")
        setError(null)
        event.preventDefault();
        loginUser(loginFormData)
            .then(data=>{
                toast("You successfully logged in")
                console.log("data", data)
            }).catch(err=>{
                setError(err);
                console.log("error", err);
            }).finally(()=>setStatus("idle"))
    }
    return(
        <div className="login">
            <ToastContainer autoClose={3000}/>
            <form className="login-form" action="">
                <h1>Sign into your account</h1>
                <input 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    placeholder="Email address"
                />
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange} 
                    placeholder="Password"
                />
                <button 
                    onClick={handleSubmit}
                    disabled={status==="submitting"}
                >
                    {status === "submitting" ? "Logging in.." : "Log in"}
                </button>
            </form>
            <h4>Don't have an account? <span style={{"color": "#ff8c38"}}>Create one now</span></h4>
        </div>
    )
}