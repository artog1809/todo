// Находим элементы на странице 

const form = document.querySelector("#form");

const taskInput = document.querySelector("#taskInput");

const tasksList = document.querySelector("#tasksList");

const emptyList = document.querySelector("#emptyList");

// Добавление задачи
form.addEventListener('submit', addTask);

// Удаление задачи
tasksList.addEventListener('click', deleteTask);

// Выполнение задачи
tasksList.addEventListener('click', doneTask);

function addTask(event) {
    // Отменяем отправку формы
    event.preventDefault();

    // Достаем текст задачи из поля ввода
    const taskText = taskInput.value;

    // Формируем разметку для новой задачи
    const taskHtml = `
                    <li class="list-group-item d-flex justify-content-between task-item">
                    <span class="task-title">${taskText}</span>
                    <div class="task-item__buttons">
                        <button type="button" data-action="done" class="btn-action">
                            <img src="./img/tick.svg" alt="Done" width="18" height="18">
                        </button>
                        <button type="button" data-action="delete" class="btn-action">
                            <img src="./img/cross.svg" alt="Done" width="18" height="18">
                        </button>
                        </div>
                        </li>
                    `

    // Добавляем задачу на стрвницу
    tasksList.insertAdjacentHTML('beforeend', taskHtml);

    // Очищаем поле ввода и вовзращаем на него фокус
    taskInput.value = "";
    taskInput.focus();

    // Если список задач не пуст, то скрываем блок "Список дел пуст "
    if (tasksList.children.length > 1) {
        emptyList.classList.add("none");
    }
}


function deleteTask(event) {

    // Проверяем был ли клик по кнопке удаления
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.list-group-item');
        parentNode.remove();

        // Если список задач пуст, то показываем блок "Список дел пуст"
        if (tasksList.children.length === 1) {
            emptyList.classList.remove("none");
        }
    }
}

function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        const parentNode = event.target.closest('.list-group-item');
        const taskTitle = parentNode.querySelector('.task-title');
        taskTitle.classList.toggle('task-title--done')
        console.log(taskTitle);
    }
}