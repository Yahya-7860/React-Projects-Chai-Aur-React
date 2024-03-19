import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>

        <Route 
        exact 
        path="/"
        element={<Home/>}>
        </Route>

        <Route 
        exact 
        path="/About"
        element={<About/>}>
        </Route>

        <Route 
        exact 
        path="/Contact"
        element={<Contact/>}>
        </Route>

        <Route 
        exact 
        path="/user/:username"
        element={<User/>}>
        </Route>

        <Route 
        exact 
        path="/github"
        element={<Github/>}>
        </Route>

      </Routes>  


      <Footer/>        
      </BrowserRouter>
 
    </>
  );
}

export default App;
