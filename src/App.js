import React, {useState, useEffect, useReducer} from 'react';
let test=0;
const reducer=(state,action)=>{
    switch (action.type){
        case'Set_todo':{
            return action.payload
        }
        case'Change_todo_Status':{
            return{
            ...state,
                complited:!state.complited,
            }
        }
        case'Change_todo_title':{
            return{
                ...state,
                title:action.payload,
            }
        }
        default:{
            return state;
        }
    }
}

const intialState={
    userId:null,
    id:null,
    title:"",
    completed: false


}
export default function App() {
    const [state, dispatch]=useReducer(reducer,intialState)
    const [user, setuser] = useState({name: 'a', age: 18});
    const [counter, setCounter]=useState(1);
    // const [todo, setTodo]=useState()
    useEffect(() => {
        console.log('i was called');
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json =>
                dispatch({type:"Set_todo", payload: json}))
    }, [counter])

    // const onclickHandler = () => {
    //     // test++;
    //     // console.log(test);
    //     setuser((prevstate)=>({
    //         ...prevstate,
    //         age:prevstate.age +1
    //     }))
    // };
    // const nameonclickHandler = () => {
    //     setuser((prevstate) => ({
    //         ...prevstate,
    //         name: prevstate.name + '!'
    //     }))
    // };
    const onclickHandler=()=>setCounter((prev) => prev + 1);
    return (
        <div className='App'>
            <button onClick={onclickHandler}>inc</button>
            {/*<button onClick={nameonclickHandler}>change user</button>*/}
            {/*/!*<h1>User:{user}</h1>*!/*/}
            {/*<h2>hello world</h2>*/}
            {/*<h2>{test}</h2>*/}
            {/*<h2>{user.name}</h2>*/}
            {/*<h2>{user.age}</h2>*/}
            <h1> Counter:{counter}</h1>
            {!!state &&(
                <>
                <h2>{state.id}</h2>
                <h2>{state.title}</h2>
                <h2>{state.completed.toString()}</h2>
                </>
            ) }


        </div>
    )
}
