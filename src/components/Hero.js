import  "./Hero.css";
import Nav from "./Nav"
const Hero=()=>
{
    return(
        <>
        <section  className="Hero" id="Home">
        <Nav/>

            <div  className="Hero-banner">
                <h1 className='Hero-Head'>Rooms & Suites</h1>
                <p>
                 Simply for You
                </p>
                <a href="#Services" className="Hero-btn">View Rooms</a>
            </div>
      </section>
      </>
        );
}
export default Hero;