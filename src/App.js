import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import AllPostComponent from "./Component/All_post/AllPostComponent";
import Allcomments from "./Component/Allcoment/Allcomments";

class App extends Component {
    render() {
        return (


            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/posts'}>to all posts</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={'/comments'}>to all comments</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path={'/posts'} render={() => <AllPostComponent/>}/>
                        <Route path={'/comments'} render={() => <Allcomments/>}/>
                    </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;


