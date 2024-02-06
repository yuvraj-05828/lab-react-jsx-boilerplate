import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


  // code here
  render(){
    const imgData = this.props.data
    return (
      <div>
        <h1>Kalvium gallary</h1>
        <div className="row">
        {
         imgData.map((image) => {
          return(
            <div className="column"key={image.id}>
              <img src={image.img} alt=""/>
            </div>
          )
          
          })};
      </div>
  
      </div>
    );
  }
}
