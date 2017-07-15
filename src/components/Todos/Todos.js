import React from 'react';
import { observer } from 'mobx-react';

// import TodoEntry from './TodoEntry';
import Header from '../Header/Header';

@observer class Todos extends React.Component {


    addTodo = () => {
        this.props.todoStore.addTodo(this.todoInput.value);
        this.todoInput.value = '';
    }

    addTodoClick = (e) => {
        e.preventDefault();
        this.addTodo();
    }

    addTodoKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }

    todoStatusChange = (e) => {
        const todoId = e.target.value;
        this.props.todoStore.toggleStatus(todoId);
    }

    render() {
        const { todoStore } = this.props;
        return (
            <div className="todo-container">
                <Header title="Todos"/>
                <input
                    className="todo-input"
                    type='text'
                    ref={(input) => { this.todoInput = input; }}
                    onKeyPress={this.addTodoKeyPress}
                />

                <button
                    className="add-todo-button"
                    onClick={this.addTodoClick}
                >
                    Add Todo
                </button>

                <div className="todo-list">
                    {todoStore.todos.map(todo =>
                        <li
                            className="todo-entry"
                            key={todo.id}
                        >
                            <input
                                className="todo-checkbox"
                                value={todo.id}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={this.todoStatusChange}
                            />
                            {todo.title}
                        </li>
                    )}
                </div>

            </div>
        );
    }
}

export default Todos;
