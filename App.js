import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Navbar from 'react-bootstrap/lib/Navbar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import {Grid, Row, Col, ButtonToolbar, Button} from 'react-bootstrap/lib';






class App extends React.Component {
  render(){
    return (    
      <div fluid className="container-fluid no-gutter">

       <Navbar fluid fixedTop style={navi}>
     
        <Navbar.Header pullRight>
          <Navbar.Brand>
            <a href="#">Logo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <nav style={barlinks}>
          <ButtonToolbar>
            <Button bsStyle="link"><a href="https://www.linkedin.com/in/benjaminpettus">LinkedIn</a></Button>
            <Button bsStyle="link"><a href="https://github.com/benjaminpettus">Github</a></Button>
          </ButtonToolbar>
          </nav>
        </Navbar.Collapse>
      </Navbar>
     
          
      <div style={jumbo} sm={6} lg={3} className="row no-gutter text-center">  
        <div className="col-md-12">
          <h2>about</h2>
            <p>Web Developer/Designer<br />
                 Honolulu, Hawaii<br />
            </p>
        </div>
      </div>

     

      <div style={web} className="row no-gutter text-center">
      <h2>web</h2>
        <ul >
          <div>
          
            <li style={projects}>Get-A-Life
              <div>Map-based events app built using Angular, Ionic, and Leaflet</div>
              <div>
                <button style={project_button}><a href="http://getalife.events">View Project</a></button>
              </div>
            </li>
          
          </div>
        </ul>
      </div>

     

      <div style={design} className="row no-gutter">
        <h2>design</h2>
         <Gallery photos={PHOTO_SET} />
      </div>

      <span style={footer} className="row no-gutter">
        <p>Benjamin Pettus 2016</p>
        <a href="https://www.linkedin.com/in/benjaminpettus">linkedin</a>
        <p>benjaminpettus@gmail.com</p>
      </span>

    

        </div>
      
      

    );
  }
}
var navi = {
  backgroundColor: 'green',
  
}
var navbar = {
    marginBottom: 0,
    backgroundColor: 'purple',
    color: 'white', 
    zIndex: 9999,
    border: 0,
    fontSize: 12,
    lineHeight: 1.42857143,
    letterSpacing: 4,
    borderRadius: 0,
    style: "none"
}

var barlinks = {
  float: 'right',
  paddingLeft: 10,
  paddingTop: 5

}
var container = {  
  
  boxSizing: 'border-box'
  

}


var mainNav = {
  color: 'black',
  height: 70
}
var iconz = {
  listStyle: 'none'
}

var jumbo = {
  color: 'white',
  backgroundColor: 'green',
  // backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 350,
  paddingTop: 60,

}

var web = { 
  color: 'white',
  backgroundColor: 'orange'

}

var projects = {
  color: 'white',
  
 }

var project_button = {
  border: 'none',
  backgroundColor: 'white'
}

var rule = {
 

}

var design = {
  color: 'white'
  
  
}

const PHOTO_SET = [
  
  {
    src: "./assets/img/skittles.jpg", 
    width: 450,
    height: 300,
    aspectRatio: 1.2,
    lightboxShowImageCount: false,
    lightboxImage:{
    src: "./assets/img/skittles.jpg",
    srcset: [
      "./assets/img/skittles.jpg"
    ]
    }
  },
  {
  src: "./assets/img/irielove.jpg", 
    width: 300,
    height: 450,
    aspectRatio: 1.5,
    lightboxShowImageCount: false,
    lightboxImage:{
    src: "./assets/img/irielove.jpg",
    srcset: [
      "./assets/img/irielove.jpg"
    ]
    }
  },
  {
    src: "./assets/img/helldown_300.jpg", 
    width: 300,
    height: 450,
    aspectRatio: 1.5,
    lightboxShowImageCount: false,
    lightboxImage:{
    src: "./assets/img/helldown_300.jpg",
    srcset: [
      "./assets/img/helldown_300.jpg"
    ]
    }
  },
{
  src: "./assets/img/Kimie_300.jpg", 
    width: 300,
    height: 450,
    aspectRatio: 1.5,
    lightboxShowImageCount: false,
    lightboxImage:{
    src: "./assets/img/kimie_600.jpg",
    srcset: [
      "./assets/img/Kimie.jpg"
    ]
    }
  },
  {
    src: "./assets/img/mikelove_300.jpg", 
    width: 450,
    height: 300,
    aspectRatio: 1.5,
    lightboxShowImageCount: false,
    lightboxImage:{
    src: "./assets/img/mikelove_300.jpg",
    srcset: [
      "./assets/img/mikelove_300.jpg"
    ]
    }
  }
];

var footer = {
  color: 'black',
  backgroundColor: 'gray',
  height: 150
}

export default App