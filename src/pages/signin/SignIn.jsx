import React, { useState } from 'react'
import '../signin/SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { login } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: '40px',
    },
    container: {
        display: 'flex',
        height: '80vh',
        width: '33vw',
        border: '1px solid #E0E0E0',
        flexDirection: 'column',
        borderRadius: '8px',
        fontFamily: 'roboto, "Noto Sans Myanmar UI", arial, sans-serif',
        boxShadow: '10px',
    },
    title: {
        position: 'relative',
        top: '30px',
    },
    signintxt: {
        position: 'relative',
        top: '40px',
        color: '#202124',
        fontSize: '24px',
        fontFamily: '"Google Sans","Noto Sans Myanmar UI",arial,sans-serif',
        fontWeight: '400',
    },
    txt2: {
        position: 'relative',
        top: '50px',
        color: '#202124',
        fontSize: '16px',
        fontWeight: '400',
        letterSpacing: ' 0.1px',
    },
    email: {
        display: 'flex',
        width: '100%',
        minWidth: ' 0%',
        position: 'relative',
        top: ' 80px',
        left: '40px',
    },
    input: {
        textAlign: 'left',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        color: '#202124',
        fontSize: '16px',
        width: '340px',
        height: '20px',
        margin: '1px 1px 0 1px',
        padding: '13px 15px',
        backgroundColor: 'transparent',
        display: 'block',
        font: '400 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
    },
    forgetemail: {
        position: 'relative',
        top: ' 88px',
        display: 'flex',
        justifyContent: 'flex-start',
        left: '42px',
    },
    button: {
        borderRadius: '4px',
        color: '#1a73e8',
        display: 'inline-block',
        fontWeight: '550',
        letterSpacing: '.25px',
        outline: '0',
        position: 'relative',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '0',
        textAlign: 'left',
        border: '0',
        fontFamily: 'roboto,"Noto Sans Myanmar UI",arial,sans-serif',
    },
    password: {
        display: 'flex',
        minWidth: '0%',
        position: 'relative',
        top: '95px',
        left: '40px',
    },
    forgetpassword: {
        position: 'relative',
        top: '100px',
        display: 'flex',
        justifyContent: 'flex-start',
        left: '42px',
    },
    learnmore: {
        position: 'relative',
        top: '130px',
        right: '10px',
        color: '#5f6368',
        fontSize: '14px',
        lineHeight: '1.4286',
    },
    create: {
        alignItems: 'flex-start',
        display: 'flex',
        boxFlex: '0',
        flexGrow: '0',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        position: 'relative',
        top: '180px',
    },
    createbutton: {
        fontWeight: '550',
        position: 'relative',
        left: '38px',
    },
    next: {
        color: '#ffff',
        backgroundColor: '#1a73e8',
        fontWeight: '500',
        fontFamily: 'roboto,"Noto Sans Myanmar UI",arial,sans-serif',
        position: 'relative',
        left: '62px',
    }
})

function SignIn() {
    const classes = useStyle()

    const navigate = useNavigate()

    const [signinObj, setSignInObj] = useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })


    const takeEmail = (event) => {
        setSignInObj(previousState => ({
            ...previousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignInObj(previousState => ({
            ...previousState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email)
        let passwordTest = passwordRegex.test(signinObj.password)
        if (emailTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: true,
                emailHelper: "Please enter valid email"
            }))
        }

        else if (emailTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "Please enter valid password"
            }))
        }

        else if (passwordTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signinObj)
        if (emailTest === true && passwordTest === true) {
            login(signinObj).then((response) => {
                console.log(response)
                localStorage.setItem("token", response.data.id)
                navigate('/dashboard')
            }).catch((error) => {
                console.log(error)
            })
            console.log("login success")
        }
    }
    const createAcc = () => {
        navigate('/signup')
    }


    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <span className='a'>G</span>
                    <span className='b'>o</span>
                    <span className='c'>o</span>
                    <span className='d'>g</span>
                    <span className='e'>l</span>
                    <span className='f'>e</span>
                </div>
                <div className={classes.signintxt}>Sign in</div>
                <div className={classes.txt2}>Use your Google Account</div>
                <div className={classes.email}>
                    {/* <input className='input' type ="email" id = "name" name="name" placeholder = "Email or phone" required></input> */}
                    <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} sx={{ width: 370 }} id="input" label="Email or phone" variant="outlined" size="small" />
                </div>
                <div className={classes.forgetemail}>
                    <button type='button'>Forget email?</button>
                </div>
                <div className={classes.password}>
                    {/* <input className='input' type ="email" id = "name" name="name" placeholder = "Password" required></input>*/}
                    <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} sx={{ width: 370 }} id="input" label="Password" variant="outlined" size="small" />
                </div>
                <div className={classes.forgetpassword}>
                    <button type='button'>Forget password?</button>
                </div>
                <div className={classes.learnmore}>
                    Not your computer? Use Guest mode to sign in privately. <br></br>
                    <a href='https://support.google.com/chrome/answer/6130773?hl=en' target="-blank">Learn more</a>
                </div>
                <div className={classes.create}>
                    {/* <button className='createbutton' type='button'>Create account</button>
                    <button className='next' type='button'>Next</button> */}
                    <Stack spacing={18} direction="row">
                        <Button onClick={createAcc} size="small" className='createbutton' variant="text">Create account</Button>
                        <Button onClick={submit} size="small" className={classes.next} variant="contained">Next</Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default SignIn
