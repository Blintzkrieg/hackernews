import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ROOT_QUERY } from './RootList'
import { LINKS_PER_PAGE } from '../constants'

const ADDROOT_MUTATION = gql`
  mutation AddRootMutation($root: String!, $number: String!, $salish: String!, $nicodemus: String!, $english: String!, $active: String!, $prevId: String!) {
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

class CreateRoot extends Component {
  state = {
    root: '',
    number: '',
    salish: '',
    nicodemus: '',
    english: '',
    active: '',
    prevId: '',
  }

  render() {
    const { root, number, salish, nicodemus, english, active, prevId } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={root}
            onChange={e => this.setState({ root: e.target.value })}
            type="text"
            placeholder="A new Couer d'Alene root"
          />
          <input
            className="mb2"
            value={number}
            onChange={e => this.setState({ number: e.target.value })}
            type="text"
            placeholder="The number of the root"
          />
          <input
            className="mb2"
            value={salish}
            onChange={e => this.setState({ salish: e.target.value })}
            type="text"
            placeholder="The root in salish orthography"
          />
          <input
            className="mb2"
            value={nicodemus}
            onChange={e => this.setState({ nicodemus: e.target.value })}
            type="text"
            placeholder="The root in nicodemus orthography"
          />
          <input
            className="mb2"
            value={english}
            onChange={e => this.setState({ english: e.target.value })}
            type="text"
            placeholder="The english translation of the root"
          />
          <input
            className="mb2"
            value={active}
            onChange={e => this.setState({ active: e.target.value })}
            type="text"
            placeholder="Is the root currently active?"
          />
          <input
            className="mb2"
            value={prevId}
            onChange={e => this.setState({ prevId: e.target.value })}
            type="text"
            placeholder="The previous ID of the root"
          />
        </div>
        <Mutation
          mutation={ADDROOT_MUTATION}
          variables={{ root, number, salish, nicodemus, english, active, prevId }}
          onCompleted={() => this.props.history.push('/roots')}
        >
          {addRootMutation => <button onClick={addRootMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateRoot
