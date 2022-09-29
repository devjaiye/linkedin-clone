import React, {useState} from 'react'
import './Login.css'
import {auth} from './Firestore/firebase'
import { useDispatch } from 'react-redux'
import {login} from '../features/userSlice'

const Login = () => {

    //..create state for each input 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    //..coming from redux hook
    const dispatch = useDispatch()

     const register = () =>{
        if(!name){
            return alert("Enter full name to register...")
        }
        //..register user
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch(error => alert(error))
     }

    const loginToApp = (e) =>{
        e.preventDefault()
    }

  return (
    <div className='login'>
        <img src="https://www.vectorico.com/wp-content/uploads/2018/02/Linkedin-full-logo-768x188.png" alt="" />

        <form action="">
            <input type="text" placeholder='Full name required *' value={name} 
            onChange={e => setName(e.target.value)}/>
           
            <input type="text" placeholder='Profile pic URL (optional)' value={profilePic} 
            onChange={e => setProfilePic(e.target.value)}/>
           
            <input type="email" placeholder='email' value={email} onChange={e =>
             setEmail(e.target.value)}/>

            <input type="password" placeholder='password' value={password} 
            onChange={e => setPassword(e.target.value)} />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member? 
            <span className='login_register'
             onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login