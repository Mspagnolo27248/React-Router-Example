import React from "react"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./Home"
import Card from "./Card"



function App(){
    return (

<Router>
    <div>
        <Switch>
            <Route exact path ="/">
                <Home/>
            </Route>
            <Route exact path ="/cards">
                <Card name="Mike" email="mspagnolo@gmail.com" password="passwords1235!"/>
            </Route>
        </Switch>
    </div>
</Router>

    )
}


export default App;