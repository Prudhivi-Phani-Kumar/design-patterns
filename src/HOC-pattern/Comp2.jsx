import React, { forwardRef } from 'react'
import WidthDimension from './WidthDimension'

const Comp2 = (props, widRef) => {
  return (
    <div style={{ width:"max-content"}}ref={widRef}>{props.info} width: {props.width}</div>
  )
}

export default WidthDimension(forwardRef(Comp2))