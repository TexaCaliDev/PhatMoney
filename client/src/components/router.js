import React from 'react'
import { Switch,Route } from 'react-router'
import Landing from '../pages/landing.js'

const router = () => {
    return (
    <div>
        <Switch>
            <Route 
            exact path='/'
            component={props=>
                < Landing {...props} />}
            />  
        </Switch>
    </div>
    )
    
}

export default router 