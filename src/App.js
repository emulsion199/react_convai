import React,{Component} from "react"
import StartComponent from "./components/StartComponent"
import ImageButton from "./components/ImageButton"
import {Route} from 'react-router-dom'
import MainComponent from "./components/MainComponent"
class App extends Component
{
  render()
  {
    return(
      <div>
<<<<<<< Updated upstream
        <Route path="/" render={(props) => <StartComponent port={8881} url={"http://52.156.155.214"}></StartComponent>} exact/>
        <Route path="/main" render={(props) => <MainComponent port={8882} url={"http://52.156.155.214"}></MainComponent>} exact/>
=======
        <Route exact path="/" render={(props)=> <StartComponent></StartComponent>} />
        <Route path="/main" render={(props)=> <MainComponent></MainComponent>}exact/>
>>>>>>> Stashed changes
       
 
      </div>
    )
  }
}
export default App