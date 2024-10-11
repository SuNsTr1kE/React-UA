import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import MyButton from "./components/customButton/MyButton"

function App() {
  return (
    <>
    <div className="container py-3">
       <Header></Header>
       <MyButton></MyButton>
       <Footer></Footer>
    </div>
   
  
    </>
  )
}

export default App
