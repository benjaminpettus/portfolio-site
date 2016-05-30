import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-photo-gallery';






class App extends React.Component {
  render(){
    return (
        
        <div className="container">

       
          <nav style={mainNav}>
            <button><a href="https://github.com/benjaminpettus">GitHub</a></button>
            <button><a href="https://github.com/benjaminpettus">Linkedin</a></button>
          </nav>
     
          
        
          <div style={about}>
            <h2>about</h2>
            <p>Web Developer/Designer<br />
               Honolulu, Hawaii<br />
            </p>
          </div>

          <hr />

          <div style={web}><h2>web</h2>
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

          <hr />

          <div style={design}>
            <h2>design</h2>
             <Gallery photos={PHOTO_SET} />
          </div>

          <span style={footer}>
            <p>Benjamin Pettus 2016</p><a href="https://www.linkedin.com/in/benjaminpettus">linkedin</a>
            <p>benjaminpettus@gmail.com</p>
          </span>

    

        </div>
      
      
        

    );
  }
}


var container = { 
  display: 'flex', 
  flexWrap: 'wrap',
  boxSizing: 'border-box',
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

var about = {
  color: 'black',
  backgroundColor: 'white',
  flexDirection: 'column',
  // backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 350

}

var web = { 
  display: 'flex',
  color: 'black',
  flexDirection: 'column',
  backgroundColor: 'white'

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
  height: 150
}

export default App