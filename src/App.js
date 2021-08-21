import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Homepage from './Homepage';
import AOpage from './AOpage';
import RGpage from './RGpage';
import WNpage from './WNpage';
import UOpage from './UOpage';
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
        <Section />
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