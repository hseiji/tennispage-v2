import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import PageTitle from './PageTitle';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Header />
        <Switch>
          <Route path="/AO">
            <PageTitle title="Australian Open"/>
            <Section content="The AO tournament tipically starts on January ..."/>
          </Route>
          <Route path="/RG">
            <PageTitle title="Roland Garros"/>
          </Route>
          <Route path="/WN">
            <PageTitle title="Wimbledon"/>
          </Route>
          <Route path="/UO">
            <PageTitle title="US Open"/>
          </Route>
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