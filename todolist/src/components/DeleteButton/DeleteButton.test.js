import React from 'react'
import { shallow } from 'enzyme'

import DeleteButton from './DeleteButton.js'

it('renders without props', () => {
  shallow(<DeleteButton />)
})
