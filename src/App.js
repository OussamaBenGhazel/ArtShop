import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import auth from './Fire';
import { signInWithEmailAndPassword } from 'firebase/auth';



function App() {
  const [user,setUser] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setemailError]=useState("");
  const [passwordError,setpasswordError]=useState("");

const handlelogin = () =>{
  signInWithEmailAndPassword(auth,email,password)
  .catch((err)=>{
    switch(err.code){
      case"auth/invalid-email":
      case"auth/user-disabled":
      case"auth/user-not-found":
      setemailError(err.message);
      break;
      case"auth/wrong-password":
      setpasswordError(err.message);
      break;
      default : 
      setpasswordError(err.message);
      break;
    }
  })
}
const handleLogout =() =>{
  auth.signOut();
}


useEffect(()=>{
  const authListner =()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setUser(user)
  }
  else{
    setUser("")
  }
})
  };
  authListner();
},[]);


  return (
    <div className="App">
    {
      user ? (<Dashboard handleLogout={handleLogout}/>
      ) : (
      <div>
        <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handlelogin={handlelogin}
      emailError={emailError}
      passwordError={passwordError}
      /></div>)
    }
    </div>
  );
}

export default App;
