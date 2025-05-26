import React from 'react'

class TodoClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["Walk"],
            newTodo: ''
        }
    }

    componentDidMount() {
        console.log("[componentDidMount] called")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        // console.log({ prevProps, prevState })
        // console.log({ props: this.props, state: this.state })
        if (prevState.todos !== this.state.todos) {
            console.log("updated todos..")
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    handleChange = (ev) => {
        this.setState({ newTodo: ev.target.value })
    }

    handleAdd = () => {
        if (this.state.newTodo) {
            this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' })
        }
    }

    render() {
        return <>
            <h1>Todos</h1>
            <input type='text' placeholder='Enter todo...'
                value={this.state.newTodo}
                onChange={this.handleChange}
            />
            <button onClick={this.handleAdd}>Add todo</button>
            <ul>
                {this.state.todos.map((todo, i) => <li key={i + todo}>{todo}</li>)}
            </ul>
        </>
    }
}

export default TodoClass;