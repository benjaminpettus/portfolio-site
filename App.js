import React from 'react';
class App extends React.Component {
  render(){
    return (
        <div className="container" style={container}>
          <div className="hero-wrapper">
            
          <div style={header}></div>
          <div style={about}>
            <h2>About</h2>
            <p>Web Developer/Designer based out of Honolulu, Hawaii</p>
          </div>

          <div style={web}>
            <h2>Web</h2>
            <ul>
              <li class="project-title">Get-A-Life
                <span class="project-desc">Stuff</span>
                <span class="project-link">
                  <button>
                    <a href="http://getalife.events">View Project</a>
                  </button>
                </span>
              </li>

            </ul>
          </div>

          <div style={design}>
            <h2>Design</h2>
            <p></p>
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
  flexDirection: 'column',
  backgroundImage : 'url(' + "./assets/img/starry.jpg" + ')',
  backgroundRepeat: 'no-repeat',
  height: 550

}

var web = {
  backgroundColor: 'gray',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', 
  flexWrap: 'nowrap', 
  alignSelf: 'auto',
  alignContent: 'flex-start',
  height: 300
}

var design = {
  display: 'flex',
  backgroundColor: 'lavender',
  height: 500
}

var footer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

  //stateless function component
// const App = () => <h1>NSJJ</h1>
export default App