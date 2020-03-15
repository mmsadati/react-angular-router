import React, {Component} from 'react'

import ComOne from './ComOne'
import ComTwo from './ComTwo'
import NotFound from './NotFound'

import './index.css'

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
