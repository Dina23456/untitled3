import React, {Component} from 'react';

class User extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                <h3>
                    {user.name}-{user.age}-{user.status.toString()}
                </h3>

            </div>
        );
    }
}

export default User;