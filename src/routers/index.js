import React, { Component } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { inject, observer } from 'mobx-react'
import RouteWithSubRoutes from '@/utils/routeWithSubRoutes'
import MainApp from './main'



@withRouter
@inject('Gobal')
@inject('Setting')
@observer
class App extends Component {

  renderRoute() {
    return (
      <Switch>
        <RouteWithSubRoutes path="/" component={MainApp} exact={false} />
      </Switch>
    )
  }
  render() {
    return this.renderRoute()
  }
}

export default hot(module)(App)
