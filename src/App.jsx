import { useState } from 'react'
import './App.css'

import Comp1 from './HOC-pattern/Comp1'
import Comp2 from './HOC-pattern/Comp2'
import ProgressiveImage from './Progressive-image/ProgressiveImage'
import Tabs from './React-compound-pattern/Tabs'
import Inp from './Render-props-pettern/Inp'

import largeImg from './Progressive-image/large.jpeg';
import tinyImg from './Progressive-image/tiny.jpeg';

import ListScroll from "./Infinite-scroll/ListScroll";

// import "./Singleton-design-pattern/singleton-design-pattern"
// import "./Pub-sub-design-pattern/index"
import "./Circuit-breaker-design-pattern/index"

function App() {
  const [currentIndex, setCurrnetIndex] = useState(0);

  return (
    <>
      {/* HOC */}
      {/* <h1>HOC Design Pattern:</h1>
    <br />
    <br />
    <br />
      <div>
        <Comp1 info="first component" />
      </div>
      <Comp2 info="Second component" /> */}


      {/* Render props */}
      {/* <Inp getRenderProps={(val) => `user input value is ${val}`} />
      <Inp getRenderProps={(val) => `user input value is multiplied by 10: ${val * 10}`} /> */}

      {/* Compound Pattern */}
      {/* <Tabs value={currentIndex} onChange={index => setCurrnetIndex(index)}>
        <Tabs.HeaderContainer>
          <Tabs.HeaderItem label={"First"} index={0} />
          <Tabs.HeaderItem label={"Second"} index={1} />
          <Tabs.HeaderItem label={"Third"} index={2} />
        </Tabs.HeaderContainer>

        <Tabs.ContentContainer>
          <Tabs.Content index={0}>First Tab Content</Tabs.Content>
          <Tabs.Content index={1}>Second Tab Content</Tabs.Content>
          <Tabs.Content index={2}>Third Tab Content</Tabs.Content>
        </Tabs.ContentContainer>
      </Tabs> */}

      <>
        {/* <h1>Progressive Image</h1>
        <ProgressiveImage
          src={largeImg}
          placeholderImg={tinyImg}
          height={'450'}
          width={'450'}
        /> */}
      </>

      <>
        <ListScroll />
      </>
    </>
  )
}

export default App
