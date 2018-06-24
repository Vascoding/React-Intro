import React from 'react'
import { shallow } from 'enzyme'

import AddTodo from './AddTodo.js'

it('renders without props', () => {
  shallow(<AddTodo />)
})
