import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Postcomponent extends Component {
    render() {
        let {item, match: {URL}} = this.props
        return (
            <div>
                {item.id}-{item.title} - <Link to={URL + '/' + item.id}>user details</Link>
            </div>
        );
    }
}

export default withRouter(Postcomponent);
