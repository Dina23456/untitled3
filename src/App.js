import React, {useEffect} from 'react';
import Todolist from "./todo/Todolist";
import Context from "./comtex/context";
import Load from "./Load";
import Modal from './Modal/Modal'
const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./Add/AddTodo'))
    }, 3000)
}))


function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })

            }, [])

        function toggleTodo(id) {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))
        }

        function removeTodo(id) {
            setTodos(todos.filter(todo => todo.id !== id))
        }

        function addTodo(title) {
            setTodos(todos.concat([{
                title,
                id: Date.now(),
                completed: false

            }]))
        }

        return (
            <Context.Provider value={{removeTodo}}>
                <div className='wraper'>
                    <h1> REACT</h1>
                    <Modal />
                    <React.Suspense fallback={<Load/>}>
                        <AddTodo onCreate={addTodo}/>
                    </React.Suspense>

                    {loading && <Load/>}
                    {todos.length ? <Todolist todos={todos} onToggle={toggleTodo}/> :
                            loading ? null : (
                                <p>No todos!</p>

                        )
                    }
                </div>
            </Context.Provider>
        )


    }
    export default App

