
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import  React ,{ useState } from 'react';  
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(() => {
      showAlert(null);
    }, 2000);
  }
  const toogleMode=()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743'; 
  showAlert('Dark mode has been Activated',"Success");
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert('Dark mode has been deActivated','Success');
}
  }



  return (
    <>
    <Router>
<Navbar  title ="TEXT UTIL" mode={mode}  toogleMode={toogleMode}></Navbar> 
<Alert  alert={alert}/> 
<div className="container  my-10">
<Routes>
          <Route path="/about" element={  <About mode={mode}/>}/>
          
          <Route path="" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter,Character Counter,Remove extra spaces" mode={mode}/>}/>
          <Route path="/home" element={<TextForm showAlert={showAlert} heading=" " mode={mode}/>}/>
        </Routes>
</div>
</Router>
    </>
  );
}

export default App;

