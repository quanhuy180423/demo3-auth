import logo from './logo.svg';
import './App.css';

// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';

function App() {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <button onClick={() => login()}>Sign in with Google 🚀</button>
    
  );
}

export default App;
