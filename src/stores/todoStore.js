import { observable, action } from 'mobx';
import uuid from 'uuid';


const Todo = (title, completed = false) => ({
    id: uuid.v4(),
    title,
    completed,
});

class TodoStore {
    @observable todos = [];
    @observable loading = true;
    @observable error = false;

    findTodo(id) {
        const todoById = this.todos.find(todo => todo.id === id);
        return todoById;
    }

    @action addTodo(newTodo) {
        this.todos.push(Todo(newTodo));
    }

    @action toggleStatus(id) {
        const todo = this.findTodo(id);
        todo.completed = !todo.completed;
    }

}

const todoStore = new TodoStore();
todoStore.addTodo('check rendering performance of uncontrolled vs controlled components');
todoStore.addTodo('contribute to open-source');
todoStore.addTodo('create layouting for dev-dashboard app');


export default todoStore;

