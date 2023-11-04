import React, { useState } from 'react';
import { ButtonBox, FormBox, InputBox, Login2, Title } from './stylend';
import { userLogin } from "../../redux/user/userSlice"
import { useDispatch } from 'react-redux';

function Login() {
  
  //const [ users, setUser ] = useState([])
  const [ pass, setPass ] = useState(false)
  //const [ bg, setBg ] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")

  const dispatch = useDispatch()
  //localStorage.setItem("token", 123456)
  //window.location.reload();
  //console.log(email, password)

  function onSubmit(e){
    let userCreatials = {
      email: email,
      password: password
    }
    e.preventDefault()
    dispatch(userLogin(userCreatials))
  }


  return (//
    <>
      <Login2>
       <FormBox>
          <form onSubmit={onSubmit}>
            <Title>Formulario de Login</Title>
            <InputBox>
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email.email}  
                required
              />
              <label htmlFor="">E-mail</label>
            </InputBox>
            <InputBox>
              <p>
                {
                  pass === false ? <ion-icon name="lock-closed-outline" onClick={() => setPass(true)}></ion-icon> :
                  <ion-icon name="lock-open-outline" onClick={() => setPass(false)}></ion-icon>
                }
              </p>
              <input
                type={pass === false ? "password" : "text"} 
                name="password" 
                id="password" 
                onChange={(e) => setPasword(e.target.value)} 
                value={password.password} 
                required 
              />
              <label htmlFor="">Password</label>
            </InputBox>
            <ButtonBox type="submit">
              Login
            </ButtonBox>
            <div>
              <span></span>
              Não tenho uma conta: 
              <a href="/">Criar conta</a>
            </div>
          </form>  
      </FormBox>
    </Login2>
    </>
  );
}

export default Login;
