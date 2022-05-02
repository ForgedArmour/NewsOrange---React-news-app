import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import News from './Components/News/News'
import Sidebar from './Components/Sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
const [bg,setBg] = useState("def");
const [progress,setProgress] = useState(0);
const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
    <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Sidebar bg={bg} setBg={setBg} />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" catagory={"general"} apiKey={apiKey} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" catagory={"technology"} apiKey={apiKey} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" catagory={"science"} apiKey={apiKey} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" catagory={"sports"} apiKey={apiKey} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" catagory={"business"} apiKey={apiKey}  /></Route>
        </Switch>
    </Router>
    </>
  )
}
