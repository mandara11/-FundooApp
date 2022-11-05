import axios from "axios";

export const login=(loginObj)=>{
let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
console.log("login successfully")
return response
}

export const register=(registerObj)=>{
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerObj)
    console.log("created successfully")
    return response
    }