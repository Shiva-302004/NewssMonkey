
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/Newss';
// import Spinner from './components/Spiner';

export default class App extends Component {

  state={
    progress:0
  }
  setProgress(progress){
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar color="red" progress={this.state.progress}></LoadingBar>
        <Routes>
            <Route path='/' element={ <News setProgress={this.setProgress} pagesize={9} country={"in"} category={"general"}/>}/>
            <Route path='/business' element={ <News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"business"}/>}/>
            <Route path='/entertainment'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"entertainment"}/>}/>
            <Route path='/general'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"general"}/>}/>
            <Route path='/health'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"health"}/>}/>
            <Route path='/science'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"science"}/>}/>
            <Route path='/sports'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"sports"}/>}/>
            <Route path='/technology'element={<News  setProgress={this.setProgress} pagesize={9} country={"in"} category={"technology"}/>}/>
          
        </Routes>
        
        </BrowserRouter>
        
       
        
      </div>
    )
  }
}

