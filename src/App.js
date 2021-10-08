import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewPost from './Components/NewPost';
import Post from './Components/Post';
import DeletePost from './Components/DeletePost';

function App() {

  return (
    <div className="App container container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/edit/:id" component={NewPost} />
          <Route exact path="/delete/:id" component={DeletePost} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
