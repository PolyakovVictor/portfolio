import Header from "./Components/Header"
import IntroSection from "./Components/IntroSection"
import AboutSection from "./Components/AboutSection"

import './index.css'

function App() {
  return (
    <>
      <Header />
      <IntroSection text="Welcome to my profile page"/>
      <AboutSection text= "Hello World!"/>
      <div className='extend' />
    </>
  )
}

export default App
