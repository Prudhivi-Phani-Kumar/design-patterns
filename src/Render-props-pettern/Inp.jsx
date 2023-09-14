import { useState } from 'react'

const Inp = ({ getRenderProps }) => {
	const [inpValue, setInpValue] = useState('')

	return (
		<>
			<input onChange={(e) => setInpValue(e.target.value)}></input>
			<div>{getRenderProps(inpValue)}</div>
		</>
	)
}

export default Inp