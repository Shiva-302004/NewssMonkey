
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar'
import React from 'react'
// import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/Newss';
// import Spinner from './components/Spiner';

const App=()=> {
  // apikey="066fa5af2f24437c9deff5eed21bc927"
  let  apikey=process.env.REACT_APP_NEWS_API
  
//  const [Progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        {/* <LoadingBar color="red" progress={Progress}></LoadingBar> */}
        <Routes>
            <Route path='/' element={ <News  apikey={apikey} pagesize={9} country={"in"} category={"general"}/>}/>
            <Route path='/business' element={ <News   apikey={apikey} pagesize={9} country={"in"} category={"business"}/>}/>
            <Route path='/entertainment'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"entertainment"}/>}/>
            <Route path='/general'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"general"}/>}/>
            <Route path='/health'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"health"}/>}/>
            <Route path='/science'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"science"}/>}/>
            <Route path='/sports'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"sports"}/>}/>
            <Route path='/technology'element={<News   apikey={apikey} pagesize={9} country={"in"} category={"technology"}/>}/>
          
        </Routes>
        
        </BrowserRouter>
        
       
        
      </div>
    )
  }
  export default App


