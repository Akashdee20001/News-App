import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  const pageSize = 6
  const [progress, setprogress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News key="general" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route path="/general" element={<News key="general" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/health" element={<News key="health" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
          <Route path="/sports" element={<News key="sports" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/science" element={<News key="science" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
          <Route path="/technology" element={<News key="technology" setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

