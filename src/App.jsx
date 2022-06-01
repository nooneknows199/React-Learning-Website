import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Music from "./components/music/Music";
import SubjectService from "./components/subjects/SubjectService";
import DsaService from "./components/dsa/DsaService";
import Webdev from "./components/web development/Webdev";
import Roadmap from "./components/roadmap/Roadmap";
import { Switch, Route, Redirect} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dsaService" component={DsaService} />
        <Route exact path="/subjectService" component={SubjectService} />
        <Route exact path="/webdev" component={Webdev} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;