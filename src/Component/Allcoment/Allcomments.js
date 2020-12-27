import React, {Component} from 'react';
import Comentservice from "../../service/Commentservice";
import Comment from "../Comment/Comment";
import {Route, Switch, withRouter} from 'react-router-dom';
import Fullcomment from "../Fullcomment/Fullcomment";

class Allcomments extends Component {
    state = {comments: []}
    Commentservice = new Comentservice();

    async componentDidMount() {
        let comments = await this.Commentservice.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match: {URL}} = this.props;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>)}
                <Switch>
                    <Route path={URL + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props
                        return <Fullcomment {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Allcomments);