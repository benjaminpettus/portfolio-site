import React from 'react';
class App extends React.Component {
  render(){
    return (
        <div className="section-home">
          <div className="hero-wrapper">
            <h1 className="title-page">Benjamin Pettus</h1>

          <div style={about}>
            <h2>About</h2>
            <p>Web Developer/Designer based out of Honolulu, Hawaii</p>
            <p>this is my running react project portfolio site</p>
          </div>

          <div style={web}>
            <h2>Web</h2>
            <ul>
              <li class="project-title">Get-A-Life
                <span class="project-desc">Stuff</span>
                <span class="project-link">
                  <a href="http://getalife.events">View Project</a>
                </span>
              </li>

            </ul>
          </div>

          <div style={design}>
            <h2>Design</h2>
            <p></p>
          </div>

          <span class="footer">
            <p>Benjamin Pettus 2016</p><a href="https://www.linkedin.com/in/benjaminpettus">linkedin</a>
          </span>

          </div>

        </div>

        

    );
  }
}
var about = {
  color: 'white',
  backgroundColor: 'purple',
  backgroundRepeat: 'none',
  height: 550
}

var web = {
  backgroundColor: 'gray'
}

var design = {
  backgroundColor: 'lavender'
}

  //stateless function component
// const App = () => <h1>NSJJ</h1>
export default App