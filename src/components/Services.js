import React from "react";
import {carddata} from "../card_data.js";
import css from "./Service.css";
 const Service=()=>
{
    return(
        <>
         <div  id="Services" className="Servicepage">
            <h1 className="Service-title">Services</h1>
        </div>
        <div className="card_rack">
            {
                carddata.map((data)=>{
                    return(
                        <div className="cards"  key={data.id}>
                            <img className="card-img" src={data.img}/>
                            <span className="card-price">{data.price}</span>
                            <h2 style={{textAlign:"center"}}>{data.name}</h2>
                            <p style={{margin:"2%"}}>{data.content}</p>
                            <a className="Explore" href="#" >Explore</a>
                        </div>
                    );
                })
            }
        </div>
        </>

    );
}
export default Service;