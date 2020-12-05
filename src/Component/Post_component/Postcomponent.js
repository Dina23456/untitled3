import React, {Component} from 'react';

class Postcomponent extends Component {
    render() {
        let {item, selectThisPost}=this.props;
        return (
            <div>
                    {item.id}-{item.title}
                    <button onClick={()=>selectThisPost (item.id)}> ok </button>
            </div>
        );
    }
}

export default Postcomponent;