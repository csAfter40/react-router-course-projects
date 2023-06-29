import { redirect } from "react-router-dom"

export function requireAuth(request) {
    const path = new URL(request.url).pathname
    const isLoggedIn = JSON.parse(localStorage.getItem("vanlifeIsLoggedIn"));
    if(!isLoggedIn) { 
        const response = redirect(`/login?message=You must login first!&next=${path}`);
        response.body = true;
        throw response;
    }
    return null;
}

export function isAuthenticated() {
    return JSON.parse(localStorage.getItem("vanlifeIsLoggedIn"));
}