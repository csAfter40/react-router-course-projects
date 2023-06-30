import React from "react";
import { useLoaderData, useNavigate, Form, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../api";
import { UserContext } from "../components/UserProvider";

export function loader({ request }) {
    const url = new URL(request.url);
    return url.searchParams.get("message");
}

export default function Login() {
    const message = useLoaderData()
    const [formData, setFormData] = React.useState({email:"", password:""})
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    const {user, setUser} = React.useContext(UserContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const nextPath = searchParams.get("next") || "/host"

    React.useEffect(() => {
        message && toast(message);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(()=>{
        error && toast(error.message)
    }, [error])

    React.useEffect(()=>{
        setTimeout(() => {
            user && navigate(nextPath, {replace: true});
        }, 10);
    }, [user])

    function handleSubmit(event) {
        event.preventDefault();
        setStatus("submitting")
        setError(null)
        loginUser(formData)
            .then(data=>{
                setUser(data);
            }).catch(err=>{
                setError(err);
            }).finally(()=>setStatus("idle"))
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormData(prevData => {
            return {...prevData, [name]:value}
        })
    }
    

    return(
        <div className="login">
            <ToastContainer autoClose={3000}/>
            <Form className="login-form" method="post">
                <h1>Sign into your account</h1>
                <input 
                    onChange={handleChange}
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    />
                <input 
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button 
                    onClick={handleSubmit}
                    disabled={status==="submitting"}
                >
                    {status === "submitting" ? "Logging in.." : "Log in"}
                </button>
            </Form>
            <h4>Don't have an account? <span style={{"color": "#ff8c38"}}>Create one now</span></h4>
        </div>
    )
}