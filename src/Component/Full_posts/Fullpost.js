import React, {Component} from 'react';
import Postservice from "../../service/Postservice";

class Fullpost extends Component {
    state = {post: null};
    Postservases = new Postservice();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let post = await this.Postservases.post(id);
        this.setState({post});
        console.log(this.props);
    }

    render() {

        let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id}-{post.title}-{post.body}</div>}
            </div>
        );
    }
}

export default Fullpost;
