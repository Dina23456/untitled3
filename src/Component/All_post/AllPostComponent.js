import React, {Component} from 'react';
import Postservice from "../../service/Postservice";
import Postcomponent from "../Post_component/Postcomponent";
import {Route, Switch, withRouter} from 'react-router-dom';
import Fullpost from "../Full_posts/Fullpost";

class AllPostComponent extends Component {
    Postservases = new Postservice();
    state = {posts: []};

    async componentDidMount() {
        let posts = await this.Postservases.posts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {URL}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Postcomponent item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={URL + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;

                        return <Fullpost {...props} key={id}/>;
                    }}/>
                </Switch>

                <hr/>
            </div>

        );
    }
}

export default withRouter(AllPostComponent);
