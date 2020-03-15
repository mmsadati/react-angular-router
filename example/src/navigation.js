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
