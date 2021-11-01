import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from './pages/Homepage';
import AOpage from './pages/AOpage';
import RGpage from './pages/RGpage';
import WNpage from './pages/WNpage';
import UOpage from './pages/UOpage';
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <div className="content-wrap">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/AO" component={AOpage}/>
          <Route path="/RG" component={RGpage}/>
          <Route path="/WN" component={WNpage}/>
          <Route path="/UO" component={UOpage}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}



export default App;


// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })