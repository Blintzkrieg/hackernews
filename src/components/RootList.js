import React, { Component, Fragment } from 'react'
import Root from './Root'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { LINKS_PER_PAGE } from '../constants'

export const ROOT_QUERY = gql`
  query {
    roots {
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

class RootList extends Component {

  render() {
    return (
      <Query query={ROOT_QUERY} >
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          return (
            <Fragment>
              {data.roots.map((root, index) => (
                <Root
                  key={root.id}
                  root={root}
                  index={index}
                />
              ))}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default RootList
