import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import User from "./pages/user";

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user/allRestaurant" element={<User/>} />
      <Route path="/restaurant/:restaurantId" element={<Restaurant/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
    <Toaster/>
   </Router>
  )
}

export default App
