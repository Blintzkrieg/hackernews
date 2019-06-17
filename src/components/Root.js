import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ROOT_MUTATION = gql`
  mutation RootMutation($root: String!, $number: String!, $salish: String!, $nicodemus: String!, $english: String!, $active: String!, $prevId: String!) {
    addRoot(root: $root, number: $number, salish: $salish, nicodemus: $nicodemus, english: $english, active: $active, prevId: $prevId) {
      id
      root
      number
      salish
      nicodemus
      english
      active
      prevId
      user {
        name
      }
    }
  }
`

class Root extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
        </div>
        <div className="ml1">
          <div>
            {this.props.root.root} ({this.props.root.salish})
          </div>
        </div>
      </div>
    )
  }
}

export default Root
