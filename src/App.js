import './App.css';
import {Switch,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import SearchResults from './Pages/SearchResults/SearchResults';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/searchresults" component={SearchResults}/>
      </Switch>
    </div>
  );
}

export default App;
