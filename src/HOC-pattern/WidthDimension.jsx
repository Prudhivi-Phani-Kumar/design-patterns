import { useEffect, useRef, useState } from "react";

const widthDimension = (Compoennt) => {
  return function WidthDimension(props) {
    const [width, setWidth] = useState(null);
    const compRef = useRef()

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth)
      }
    }, [compRef])

    return <Compoennt ref={compRef} width={width} {...props} />
  }
}

export default widthDimension;