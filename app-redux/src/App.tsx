import logo from "./logo.svg"
import { Header } from "./features/header/Header"
import { Footer } from "./features/footer/Footer"
import { Title } from "./features/title/Title"
import { Carousel } from "./features/carousel/Carousel"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
         <Header />
      </div>
      
        <div>
          <div>
            <Title/>
          </div>
          <Carousel/>
        </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
