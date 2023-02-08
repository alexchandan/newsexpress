import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  let [progress, setProgress] = useState(0)
  const pageSize = 6;
  const apiKey = "3d10c86a0b4a4c37bff1191c79aa6ae1"
  let country = 'in';
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`
  return (
    <BrowserRouter basename="newsexpress" >
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/newsexpress' element={<News setProgress={setProgress} key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

        <Route exact path='/health' element={<News setProgress={setProgress} key="health" url={url} pageSize={pageSize} country={country} category="health" />} />

        <Route exact path='/business' element={<News setProgress={setProgress} key="business" url={url} pageSize={pageSize} country={country} category="business" />} />

        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" url={url} pageSize={pageSize} country={country} category="entertainment" />} />

        <Route exact path='/general' element={<News setProgress={setProgress} key="general" url={url} pageSize={pageSize} country={country} category="general" />} />

        <Route exact path='/science' element={<News setProgress={setProgress} key="science" url={url} pageSize={pageSize} country={country} category="science" />} />

        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" url={url} pageSize={pageSize} country={country} category="sports" />} />

        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" url={url} pageSize={pageSize} country={country} category="technology" />} />
      </Routes>
    </BrowserRouter>
  )

}


