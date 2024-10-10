

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Equipments from './Components/Equipments/Equipments'
import Main from './Components/Main/Main'
//import BgImage from './assets/bg.png'


const bgStyle = {
 // backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "bo-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment:'fixed'
}
function App() {

  return (
    <>
     <div className="overflow-x-hidden">
     
      <Navbar/>
      <Hero/>
     
      <Equipments/>
      <Main/>
     </div>
    </>
  )
}

export default App
