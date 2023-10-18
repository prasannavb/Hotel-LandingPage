import "./About.css";
const About=()=>{
    return (
        <>
        <div id="About" className="Aboutpage">
            <h1 className="About-title">About</h1>
        </div>
        <div className="About">
            <div className="About-img"><img className="About_img" src="https://static.wixstatic.com/media/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg/v1/fill/w_640,h_426,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/68a265_1bf2b8fd7f2e43c6b003a123b51a5a0f~mv2.jpg" alt="Something went wrong"/></div>
             <div className="About-content">
                <p className="About-para">
                    This lavish property makes for a comfortable stay with its stylish rooms, multiple eateries, elegant banqueting facilities and a wide range of amenities.<br/>
                    <ul>
                        <li> Host lavish weddings and corporate events at the elegant indoor and outdoor event venues with state-of-the-art facilities.</li>
                        <li> Enjoy captivating views of the sea and the property's garden from the comfort of your room.</li>
                        <li> Visit the exciting VGP Aqua Kingdom which is 1.1 km away from the property.</li>

                    </ul>
                </p>
                 <a href="#" className="readmore">Read More ...</a>
            </div>
         </div>
        </>
    );
}
export default About;