import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import AllergyAdvice from "./pages/AllergyAdvice"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Service from "./pages/Service"
import Menu from "./pages/Menu"
import Navigation from "./navbar/Navigation"
import Protected from "./pages/Protected"

function App() {
  return (
    <div>
      <Navigation/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/allergyAdvice" element={<AllergyAdvice/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>

<Route path="/service" element={<Service/>}/>
<Route path="/menu" element={<Protected Comp={Menu}/>}/>


</Routes>
    </div>
  )
}

export default App