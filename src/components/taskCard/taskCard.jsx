import React from 'react'
import CardStyle from './taskCardStyle'

const TaskCard = ({children}) => {
  return (
    <CardStyle>{children}</CardStyle>
  )
}

export default TaskCard