import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'

export class OutLet extends Component {
  static propTypes = {
    forRoot: PropTypes.array
  }

  render() {

    const {
      forRoot
    } = this.props

    return (
      <Router>
        <Switch>
          {forRoot.map((item, index) => {
            return <RouterConfig key={index} component={item.component} path={item.path} item={item}/>
          })}
        </Switch>
      </Router>
    )
  }
}

export class Atag extends Component {

  static propTypes = {
    routeLink: PropTypes.string,
    children: PropTypes.any,
    routerLinkActive: PropTypes.string,
    queryParams: PropTypes.object
  }

  render() {

    const {
      routeLink,
      children,
      routerLinkActive,
      queryParams
    } = this.props

    let queryArr = [],
      readyQueryParams

    for (let query in queryParams) {
      queryArr.push(query)
    }
    readyQueryParams = `${routeLink}${queryArr.map((item, index) => (
      `${index === 0 ? '?' : ''}${item}=${queryParams[item]}${index !== queryArr.length - 1 ? '&' : ''}`
    ))}`.split(',').join('')

    return (
      <React.Fragment>
        <Link to={readyQueryParams}>
          {children}
        </Link>
      </React.Fragment>
    )
  }
}

const RouterConfig = ({item, ...rest}) => {

  const Component = item.component

  if (item.path === '**') {
    return <Route {...rest} />
  }

  if (item.redirectTo) {
    return <Redirect {...rest} from={`/${item.path}`} to={item.redirectTo}/>
  }

  if (item.canActivate) {

    const isRouteRender = () => {
      let guard = true
      for (let index = 0; index < item.canActivate.length; index++) {
        if (item.canActivate[index]() === false) {
          guard = false
          break
        }
      }
      return guard
    }

    return <Route path={item.path} render={(props) => (
      isRouteRender() ? <Component {...props} /> : <Redirect to='/not-found'/>
    )}/>
  }

  return <Route {...rest} render={(props) => <Component {...props} />}/>
}
