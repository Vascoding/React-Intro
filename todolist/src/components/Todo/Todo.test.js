import React from 'react'
import { shallow } from 'enzyme'

import Todo from './Todo.js'

it('renders without props', () => {
  shallow(<Todo />)
})
