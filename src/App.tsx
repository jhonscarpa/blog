import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Projects } from './pages/Project'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
