import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Footer from './features/footer/Footer';
import Header from './features/header/Header';
import Home from './features/pages/Home';
import Projects from './features/pages/Projects';
import Research from './features/pages/Research';
import Resume from './features/pages/Resume';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
