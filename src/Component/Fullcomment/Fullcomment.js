import React, {Component} from 'react';
import Commentservice from "../../service/Commentservice";

class Fullcomment extends Component {
    state = {comment: null}
     Commentservice= new Commentservice();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props
        let comment = await this.Commentservice.comment(id)
        this.setState({comment})
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {comment && <div>
                    {comment.id}- {comment.name}-{comment.email}-{comment.body}
                </div>}
            </div>
        );
    }
}
export default Fullcomment;