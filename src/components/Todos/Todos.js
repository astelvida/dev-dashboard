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
        console.log('PROPS');
        console.log('OMG');
        return (
            <div className="todo-container">
                <Header title="Todos"/>

                <div className="todo-input-container">
                    <input
                        className="todo-input"
                        placeholder="What to do?"
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
                </div>
                <ul className="todo-list">
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
                            <span className="todo-title">
                            {
                                Object.keys(todo.meta).length ?
                                <a href={todo.meta.html_url}>{todo.title}</a> :
                                todo.title
                            }
                            </span>
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Todos;
