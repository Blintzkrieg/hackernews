import React, { Component } from 'react'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import RootList from './RootList'
import CreateRoot from './CreateRoot'
import Header from './Header'
import Login from './Login'
import Search from './Search'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/top' component={LinkList} />
            <Route exact path='/new/:page' component={LinkList} />
            <Route exact path='/roots' component={RootList} />
            <Route exact path='/createRoot' component={CreateRoot} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
