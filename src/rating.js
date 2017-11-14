import React from 'react';
import $ from "jquery";
import {Doughnut, Bar} from 'react-chartjs-2';




class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <div id="htmlToPDF">

        
        </div>
        <button>Download PDF</button>
      </div>
    );
  }
}

export default App;
