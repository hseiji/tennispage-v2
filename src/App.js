import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import PageTitle from './PageTitle';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/AO">
          <PageTitle title="Australian Open"/>
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
      <Footer />
    </div>
  );
}

export default App;
