import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header.component';
import CharacterList from './pages/CharacterList.component';
import Favorites from './pages/Favorites.components';
import NotFound from './pages/NotFound.component';
import CharacterPage from './pages/CharacterPage.component';

import './App.css';
import Home from './pages/Home.component';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/characters" component={ CharacterList }></Route>
          <Route path="/favorites" component={ Favorites }></Route>
          <Route path='/character/:name' component={CharacterPage} />
          <Route path="*" component={ NotFound }></Route>
      </Switch>
    </div>
  );
}

export default App;
