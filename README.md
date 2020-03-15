# react-angular-router

> Angular route simulator in ReactJs

[![NPM](https://img.shields.io/npm/v/react-angular-router.svg)](https://www.npmjs.com/package/react-angular-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-angular-router
```

## Usage / router config

```jsx
import React, {Component} from 'react'

import ComOne from './ComOne'
import ComTwo from './ComTwo'
import NotFound from './NotFound'

import {OutLet} from 'react-angular-router'

export default class App extends Component {
  render() {

    function guardOne() {
      return true
    }
    function guardTwo() {
      return false
    }


    const appRoute = [
      {path: '/page-one', component: ComOne},
      {path: '/page-two', component: ComTwo, canActivate: [guardOne, guardTwo]},
      {path: '**', component: NotFound},
      {path: '', pathMatch: 'full', redirectTo: '/page-one'}
    ]

    return (
      <div>
        <OutLet forRoot={appRoute} />
      </div>
    )
  }
}

```

## Usage / <a> tag

```jsx
import React, { Component } from 'react'

import {Atag} from 'react-angular-router'

export default class Navigation extends Component {
  render () {

    return (
      <div>
        <ul>
          <Atag routeLink='/page-one' routerLinkActive='active' queryParams={{'id': 1, 'name': 'mahdi', 'family': 'sadati'}} ><li>com one</li></Atag>
          <Atag routeLink='/page-two' routerLinkActive='active' queryParams={{'id': 2}} ><li>com two</li></Atag>
        </ul>
      </div>
    )
  }
}

```

## License

MIT © [mmsadati](https://github.com/mmsadati)
