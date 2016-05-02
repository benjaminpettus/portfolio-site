import React from 'react';
import Gallery from 'react-photo-gallery';


class App extends React.Component {
  render(){
    return (
        <div className="container" style={container}>
          <div className="hero-wrapper">
            
          <div style={header}></div>
          <div style={about}>
            <h2>about</h2>
            <p>Web Developer/Designer<br />
               Honolulu, Hawaii<br />
            </p>
          </div>
          <div style={web}><h2>web</h2>
            <ul>
              <div>
                <hr style={rule}></hr>
                <li style={projects}>Get-A-Life
                  <div>Project discription</div>
                  <div>
                    <button>
                      <a href="http://getalife.events">View Project</a>
                    </button>
                  </div>
                </li>
              <hr style={rule}></hr>
              </div>
            </ul>
          </div>

          <div style={design}>
            <h2>design</h2>
             <Gallery photos={PHOTO_SET} />
          </div>

          <span style={footer}>
            <p>Benjamin Pettus 2016</p><a href="https://www.linkedin.com/in/benjaminpettus">linkedin</a>
            <p>benjaminpettus@gmail.com</p>
          </span>

          </div>

        </div>

        

    );
  }
}

var container = { 
  boxSizing: 'border-box',
}

var header = {
  backgroundImage : 'url(' + "./assets/img/portfolio-name.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 200

}


var about = {
  display: 'flex',
  color: 'White',
  backgroundColor: 'Orange',
  flexDirection: 'column',
  // backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 350

}

var web = { 
  display: 'flex',
  color: 'white',
  flexDirection: 'column',
  backgroundColor: 'teal'

}

var projects = {
  display: 'flex',
  color: 'white',
  flexDirection: 'row',

 
}

var rule = {
  display: 'flex',
  alignItems: 'center'

}

var design = {
  display: 'flex',
  color: 'white',
  backgroundColor: 'purple',
  height: 500
}

const PHOTO_SET = [
  {
    src: 'http://example.com/example/img1_small.jpg',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'http://example.com/example/img1_large.jpg',
    srcset: [
      'http://example.com/example/img1_1024.jpg 1024w',
      'http://example.com/example/img1_800.jpg 800w',
      'http://example.com/example/img1_500.jpg 500w',
      'http://example.com/example/img1_320.jpg 320w',
    ]
    }
  },
  {
    src: 'http://example.com/example/img2_small.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'http://example.com/example/img2_large.jpg',
    srcset: [
      'http://example.com/example/img2_1024.jpg 1024w',
      'http://example.com/example/img2_800.jpg 800w',
      'http://example.com/example/img2_500.jpg 500w',
      'http://example.com/example/img2_320.jpg 320w',
    ]
    }
  }
];

var footer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

  //stateless function component
// const App = () => <h1>NSJJ</h1>
export default App