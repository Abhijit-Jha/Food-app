import './App.css'
import Header from './components/Header'
import Card from './components/Cards'
import Signup from './components/Signup'
import Login from './components/Login'
import banner from "./store/images/banner.jpg"
import PaneerTikka from "./store/images/paneer_tikka_masala.jpg"
import Fries from "./store/images/fries.jpg"
import Daal from "./store/images/dalMakhni.jpg"
import paneerSticks from "./store/images/paneer_stick.jpg"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DisplayCards></DisplayCards>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  </> 
}

function DisplayCards(){
  return <>
  <Header Name ={"tomato"} text1={"Login"} text2 = {"Signup"}></Header>
  <div className='grid grid-cols-4'>
    <Card title ={"PaneerTikka"} description={"Delicious"} imageUrl={PaneerTikka} price={299}></Card>
    <Card title ={"Veg Burger"} description={"Delicious"} imageUrl={banner} price={299}></Card>
    <Card title ={"Fries"} description={"Delicious"} imageUrl={Fries} price={299}></Card>
    <Card title ={"Dal Makhni"} description={"Delicious"} imageUrl={Daal} price={299}></Card>
    <Card title ={"Paneer Tikka Masala"} description={"Delicious"} imageUrl={paneerSticks} price={299}></Card>
    </div>
    </>
}


export default App
