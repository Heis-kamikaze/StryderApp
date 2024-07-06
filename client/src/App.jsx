import "./App.css";


// eslint-disable-next-line no-unused-vars
import Home from "./pages/home/Home";
// eslint-disable-next-line no-unused-vars
import Login from "./pages/login/Login";
// eslint-disable-next-line no-unused-vars
import Signup from './pages/signup/Signup';

function App() {
   

  return (
    <div className= 'h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home/>

    </div>
  );
}

export default App;
