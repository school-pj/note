const addTask = document.querySelector('.add');
const list = document.querySelector('.tasks');

let todos = []

function addTodo(text) {
    const todo = {
        id: Date.now(),
        text,
    }
    todos.push(todo);
}

function renderTodo() {
    let temp = '';
    todos.forEach(todo => {
        const html = `
        <li key="${todo.id}">
            <span>${todo.text}</span>
            <i class="delete">delete</i>
        </li>
        `;
        temp += html;
    });

    list.innerHTML = temp;
}

addTask.addEventListener('submit', e => {
    e.preventDefault();

    const text = addTask.add.value.trim();
    if(text !== '') {
        addTodo(text);
        addTask.reset();
        renderTodo();
    }
});

list.addEventListener('click', e => {
    const key = e.target.parentElement.getAttribute('key');
    todos = todos.filter(todo => todo.id !== Number(key))
    renderTodo();
});