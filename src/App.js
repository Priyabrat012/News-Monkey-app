import './App.css';

import React, { useState }  from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  const api = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
  

  const setprogress = (progress)=>{
    setProgress(progress);
    
  }

  
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
          <Route exact path="/technology" element={<News setProgress={  setprogress} api={  api} key="technology" pageSize={  pageSize} country="in" category="technology"/>} />
          <Route exact path="/business" element={<News setProgress={  setprogress} api={  api} key="business" pageSize={  pageSize} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={  setprogress} api={  api} key="entertainment" pageSize={  pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/general" element={<News setProgress={  setprogress} api={  api} key="general" pageSize={  pageSize} country="in" category="general"/>} />
          <Route exact path="/health" element={<News setProgress={  setprogress} api={  api} key="health" pageSize={  pageSize} country="in" category="health"/>} />
          <Route exact path="/science" element={<News setProgress={  setprogress} api={  api} key="science" pageSize={  pageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={  setprogress} api={  api} key="sports" pageSize={  pageSize} country="in" category="sports"/>} />
          {/* <Route exact path="/technology" element={<News setProgress={  setprogress} api={  api} key="technology" pageSize={  pageSize} country="in" category="technology"/>} /> */}
        

        </Routes>
        </Router>
      </div>
    )
  
}


export default App


        
     