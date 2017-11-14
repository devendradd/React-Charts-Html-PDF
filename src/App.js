import React from 'react';
import $ from "jquery";
import domtoimage from 'dom-to-image';
import {Doughnut, Bar} from 'react-chartjs-2';


var pdfConverter = require('jspdf');


const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};



class App extends React.Component {
  constructor(props){
    super(props);
    this.pdfToHTML=this.pdfToHTML.bind(this);
  }

  pdfToHTML(){
    console.log('here');

    var newCanvas = document.querySelector('#htmlToPDF canvas');
    //create image from dummy canvas
    console.log(newCanvas);
    var newCanvasImg = newCanvas.toDataURL("image/png", 1.0);
    
    var pdf = new pdfConverter('landscape');
    
    var width = pdf.internal.pageSize.width*0.9;
    var height = pdf.internal.pageSize.height/1.3;

    pdf.setFontSize(20);
    pdf.text(15, 15, "Graphs Download");
    pdf.addImage(newCanvasImg, 'JPEG', 10, 10, width, height );
    pdf.save('new-canvas.pdf');

    // ----------------

    // var node = document.querySelector('#htmlToPDF canvas');
    // domtoimage.toPng(node)
    // .then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    // })
    // .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    // });

  }

  render() {
    return (
      <div>
        <div id="htmlToPDF">

        <Bar data={data2} width={45} height={25}
            options={{
              maintainAspectRatio: true
            }}
            />
<Doughnut data={data} />

        </div>
        <button onClick={this.pdfToHTML}>Download PDF</button>
      </div>
    );
  }
}

export default App;
