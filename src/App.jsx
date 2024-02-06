import './App.css';



function App(props) {
  
  console.log(props.data);
  var x=props.data

  return(
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {
          x.map((elements) => {
            return(
              <div className="column"key={elements.id}>
                <img src={elements.img} alt="" />
              </div>
            )
          })};
      </div>
    </div>
  )
}

export default App;
