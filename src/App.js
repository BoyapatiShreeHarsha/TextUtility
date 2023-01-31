import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)
  let showalert = (messsage, type) => {
    setalert({
      msg: messsage,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  // console.log(alert);
  let toggleMode = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white';
      setmode('light');
      showalert("Light mode is successfully set", "success");
      // document.title='TextUtility-lightmode';
    }
    else {
      document.body.style.backgroundColor = '#343a40';
      setmode('dark');
      showalert("Dark mode is successfully set", "success");
      // document.title='TextUtility-darkmode';

    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utility" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter text to analyze" mode={mode} showalert={showalert} />}>
            </Route>
          </Routes>

          {/* <Textform heading="Enter the text here" mode={mode} showalert={showalert}/> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;