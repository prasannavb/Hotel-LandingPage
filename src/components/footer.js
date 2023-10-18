import  "./Footer.css";
const Footer=()=>
{ 
    return(
        <>
        <div className="Gallery">
            <h1 className="Gallery-title">Gallery</h1>
        </div>
        <div className="footer-above">
            <img className="footer-img-left" src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg"/>
            <img className="footer-img-right" src="https://cdn.pixabay.com/photo/2018/01/29/05/14/luxury-3115234_1280.jpg" alt="Something went wrong"/>
        </div>
        
        <div className="footer_details">
                <h2>VGP GOLDEN BEACH RESORT</h2>
                <address>No. 5/159, East coast Road, Injambakkam, 600115 Chennai, India</address>
        </div>
    </>
    );
}
export default Footer;