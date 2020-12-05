import React, {Component} from 'react';
import Postcomponent from "../Post_component/Postcomponent";
import Bodycomponent from "../Post_component/Bodycomponent";

class AllPostComponent extends Component {
    state={post:[]}
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postFromAPI=>{this.setState({post:postFromAPI})})
    }
    selectThisPost=(id)=>{let chosenPost=this.state.post.find(value=> value.id===id);
    this.setState({chosenPost})}
    render() {
        let{post,classState,chosenPost}=this.state;
        return (
            <div>
              <h1 className={classState}>
                  All post page
              </h1>
                {
                post.map(value=>(
                <Postcomponent item={value}
                               key={value.id}
                               selectThisPost={this.selectThisPost}/>))}
                <hr/>
                {
                    chosenPost && <Bodycomponent item={chosenPost}/>
                }
            </div>
        );
    }
}

export default AllPostComponent;