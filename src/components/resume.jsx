import React from "react"
import stock1 from "../img/My_CV-page-001.jpg"
class Resume extends React.Component{
 
  render(){
    return(
      <section id ="resume" className = "about-mf sect-pt4 route">
       <div className = "container">
         <div className="container">
           <div className="container">
             <div className="container">
        <img src={stock1} alt="" className="img-fluid" />
        </div>
        </div>
        </div>
        </div> 
      </section>
    )
  }
}
export default Resume;