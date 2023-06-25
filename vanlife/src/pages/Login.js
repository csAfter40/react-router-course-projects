import React from "react";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({email:"", password:""});
    function handleChange (event) {
        setLoginFormData((prevData)=>{
            const newData = {...prevData};
            newData[event.target.name] = event.target.value;
            return newData
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginFormData)
    }
    return(
        <div className="login">
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
                <button onClick={handleSubmit}>Log in</button>
            </form>
            <h4>Don't have an account? <span style={{"color": "#ff8c38"}}>Create one now</span></h4>
        </div>
    )
}