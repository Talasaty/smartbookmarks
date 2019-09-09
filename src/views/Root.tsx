import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'

const Notes = () => <h2>Notes</h2>
const Help = () => <h2>Help</h2>
const SignIn = () => <h2>SignIn</h2>

const Root = () => (
  <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/notes" component={Notes} />
      <Route path="/help" component={Help} />
      <Route path="/signin" component={SignIn} />
    </div>
  </Router>
)

export default Root
