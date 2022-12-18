import React,{Fragment} from 'react';
import FirstApp from './Components/FirstApp';
import './App.css';

function App() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white text-center">
  <a class="navbar-brand" href="#"><span className="text-white fs-4 text-center" >Sri venkateswara Agencies</span>
  <img src="https://www.logolynx.com/images/logolynx/f2/f27ce6b1498db43c839299777a726e97.jpeg" width="80" height="70" class="d-inline-block align-top" alt=""></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AboutUs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ContactUs</a>
      </li>

    </ul>
  </div>
</nav> 
      <FirstApp />
    </Fragment>
    
  );
}
export default App;
