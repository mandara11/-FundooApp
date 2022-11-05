import React, { useState } from 'react'
import '../signup/SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { register } from '../../services/userService';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const useremailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userpasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    mainu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    }
    
})

function SignUp() {
    const classes = useStyle()

    const navigate = useNavigate()

    const [signupObj, setSignUpObj] = useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [regexObj, setRegexObj] = useState({ firstnameBorder: false, firstnameHelper: "", lastnameBorder: false, lastnameHelper: "", usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: "" })

    const takeFirstname = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeLastname = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUsername = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let firstnameTest = fnameRegex.test(signupObj.firstName)
        let lastnameTest = lnameRegex.test(signupObj.lastName)
        let usernameTest = useremailRegex.test(signupObj.email)
        let passwordnameTest = userpasswordRegex.test(signupObj.password)
        if (firstnameTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                firstnameBorder: true,
                firstnameHelper: "Enter valid name"
            }))
        }
        else if (firstnameTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                firstnameBorder: false,
                firstnameHelper: ""
            }))
        }

        if (lastnameTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                lastnameBorder: true,
                lastnameHelper: "Enter valid name"
            }))
        }
        else if (lastnameTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                lastnameBorder: false,
                lastnameHelper: ""
            }))
        }

        if (usernameTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                usernameBorder: true,
                usernameHelper: "Enter valid username"
            }))
        }
        else if (usernameTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                usernameBorder: false,
                usernameHelper: ""
            }))
        }

        if (passwordnameTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordnameTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signupObj)
        if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordnameTest === true) {
            register(signupObj).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
            console.log("created success")

        }
    }

    const signAccount = () => {
        navigate('/')
    }

    return (
        <div className='mainu'>
            <div className='containeru'>
                <div className='child1u'>
                    <div className='titleu'>
                        <span className='a'>G</span>
                        <span className='b'>o</span>
                        <span className='c'>o</span>
                        <span className='d'>g</span>
                        <span className='e'>l</span>
                        <span className='f'>e</span>
                    </div>
                    <div className="txt1u">Create your Google Account</div>
                    <div className="nameu">
                        <div className="firstnameu">
                            {/* <input className='inputu' type="text" id="name" name="name" placeholder="First name" required></input> */}
                            <TextField onChange={takeFirstname} error={regexObj.firstnameBorder} helperText={regexObj.firstnameHelper} id="inputu" label="First name" variant="outlined" size="small" />
                        </div>
                        <div className="lastnameu">
                            {/* <input className='inputu' type="text" id="name" name="name" placeholder="Last name" required></input> */}
                            <TextField onChange={takeLastname} error={regexObj.lastnameBorder} helperText={regexObj.lastnameHelper} id="inputu" label="Last name" variant="outlined" size="small" />
                        </div>
                    </div>
                    <div className="usernameu">
                        {/* <input className='inputu' type="email" id="name" name="name" placeholder="User name" required></input> */}
                        <TextField onChange={takeUsername} error={regexObj.usernameBorder} helperText={regexObj.usernameHelper} sx={{ width: 370 }} id="inputu" label="Username" variant="outlined" size="small" />
                    </div>
                    <div className="text2u">
                        You can use letters, numbers & periods
                    </div>
                    <div className="text3u">
                        Use my current email address instead
                    </div>
                    <div className="passwordtextu">
                        <div className="password1u">
                            {/* <input className='inputu' type="text" id="name" name="name" placeholder="Password" required></input> */}
                            <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} id="inputu" label="password" variant="outlined" size="small" />
                        </div>
                        <div className="confirmu">
                            {/* <input className='inputu' type="text" id="name" name="name" placeholder="Confirm" required></input> */}
                            <TextField id="inputu" label="confirm" variant="outlined" size="small" />
                        </div>
                    </div>
                    <div className="text4u">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </div>
                    <div className="showpasswordu">
                        <input className='checku' type="checkbox" id="name" name="name" required></input>
                        <div className="text5u">show password</div>
                    </div>
                    <div className="bottomu">
                        <div className="signininsteadu">
                            <Stack spacing={18} direction="row">
                                <Button onClick={signAccount} size="small" id="signu" variant="text">Signin instead</Button>
                                <Button onClick={submit} size="small" id="next1u" variant="contained">Next</Button>
                            </Stack>
                        </div>
                    </div>
                </div>

                <div className="child2">
                    <img src='https://ssl.gstatic.com/accounts/signup/glif/account.svg' ></img>
                    <div className="child2text">
                        One account. All of Google<br></br> working for you.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
