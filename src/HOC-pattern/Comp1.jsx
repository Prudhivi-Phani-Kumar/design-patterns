import { forwardRef } from "react";

import widthDimension from "./WidthDimension"

const Comp1 = (props, widRef) => {
	return (
		<div style={{ width: "300px" }} ref={widRef}>{props.info} width: {props.width}</div>
	)
}

export default widthDimension(forwardRef(Comp1));