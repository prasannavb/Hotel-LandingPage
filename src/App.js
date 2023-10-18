import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Service from "./components/Services.js";
import Footer from "./components/footer.js";
import Contact from "./components/contact.js";
import "./App.css"
const App=()=>
{
    return(
        <>
        <Hero/>
        <About/>
        <Service/>
        <Footer />
        <Contact/>
        </>
    )
}

export default App;