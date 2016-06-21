import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Navbar from 'react-bootstrap/lib/Navbar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import {Grid, Row, Col, ButtonToolbar, Button, Glyphicon} from 'react-bootstrap/lib';






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
     
          
      <div style={first} className="row no-gutter text-center">  
        <div className="col-md-12">
          <h2>about</h2>
            <p>Web Developer/Designer<br />
                 Honolulu, Hawaii<br />
            </p>
        </div>
      </div>

     

      <div style={web} className="row no-gutter text-center">
      <h2>web</h2>
          <div>
          <Grid>
            <Row>
            <li style={projects}>Get-A-Life
              <Col>Map-based events app built using Angular, Ionic, and Leaflet</Col>
              <Col>
                <button style={project_button}><a href="http://getalife.events">View Project</a></button>
              </Col>
            </li>
            </Row>
          </Grid>
          </div>
      
      </div>

     

      <div style={design} className="row no-gutter">
        <h2>design</h2>
         <Gallery photos={PHOTO_SET} />
      </div>

      <footer style={foot} className="row no-gutter text-center">
        
        <Button><Glyphicon glyph="chevron-up" /></Button>
      
        <p>Benjamin Pettus 2016</p>
        <p>benjaminpettus@gmail.com</p>
      </footer>

    

    </div>
      
      

    );
  }
}
var navi = {
  backgroundColor: 'green',
  borderColor: 'transparent'
  
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

var first = {
  color: 'white',
  backgroundColor: 'green',
  // backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 600,
  paddingTop: 60,

}

var web = { 
  color: 'white',
  backgroundColor: 'orange'

}

var projects = {
  color: 'white',
  listStyle: 'none',
  display: 'inline-block'
 }

var project_button = {
  border: 'none',
  backgroundColor: 'white'
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

var foot = {
  color: 'white',
  backgroundColor: 'green',
  height: 150,
  borderColor: 'transparent' 
}

export default App