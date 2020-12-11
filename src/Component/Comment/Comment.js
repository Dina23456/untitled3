import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Comment extends Component {
    render() {
        let {item, match: {URL}} = this.props
        return (
            <div>
                {item.id} - {item.name} - <Link to={URL + '/' + item.id}> comment </Link>
            </div>
        );
    }
}

export default withRouter(Comment);
