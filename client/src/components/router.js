import React from 'react'
import { Switch,Route } from 'react-router'
import Home from '../pages/home.js'

const router = () => {
    return (
    <div>
        <Switch>
            <Route 
            exact path='/'
            component={props=>
                < Home {...props} />}
            />  
        </Switch>
    </div>
    )
    
}

export default router 