import React from 'react'
import { shallow } from 'enzyme'

import TodoForm from './TodoForm.js'

it('renders without props', () => {
  shallow(<TodoForm />)
})
