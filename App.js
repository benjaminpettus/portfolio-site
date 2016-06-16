import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';
import Navbar from 'react-bootstrap/lib/Navbar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import {Grid, Row, Col} from 'react-bootstrap/lib';






class App extends React.Component {
  render(){
    return (
        
      <div fluid className="container border-box">

       <Navbar fluid fixedTop style={navi}>
     
        <Navbar.Header pullRight>
          <Navbar.Brand>
            <a href="#">Logo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <nav style={barlinks}>
            <a href="https://www.linkedin.com/in/benjaminpettus">LinkedIn</a>
            <a href="https://github.com/benjaminpettus">Github</a>
          </nav>
        </Navbar.Collapse>
      </Navbar>
     
          
      <Jumbotron style={jumbo} className="row no-gutter text-center">  
        <div className="col-md-12">
          <h2>about</h2>
            <p>Web Developer/Designer<br />
                 Honolulu, Hawaii<br />
            </p>
        </div>
      </Jumbotron>
    


     

          <div style={web} className="row no-gutter">
          <h2>web</h2>
            <ul >
              <div>
                <divider />
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

          <span style={footer} className="row no-gutter"d>
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
  paddingLeft: 10
}
var container = { 
  display: 'flex', 
  flexWrap: 'wrap',
  boxSizing: 'border-box'

}


var mainNav = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  color: 'black',
  height: 70
}
var iconz = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none'
}

var jumbo = {
  color: 'white',
  backgroundColor: 'green',
  flexDirection: 'column',
  // backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 350,
  paddingTop: 60,

}

var web = { 
  display: 'flex',
  color: 'black',
  flexDirection: 'column',
  backgroundColor: 'orange'

}

var projects = {
  display: 'flex',
  color: 'black',
  flexDirection: 'row',
  justifyContent: 'space-around'
 }

var project_button = {
  border: 'none',
  backgroundColor: 'white',
  color: 'purple'
 
}

var rule = {
  display: 'flex',
  alignItems: 'center'

}

var design = {
  display: 'flex',
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
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  backgroundColor: 'gray',
  height: 150,
  marginLeft: 0
}

export default App