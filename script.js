document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Empty task should not be added

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        const checkbox = taskItem.querySelector('.checkbox');
        const deleteButton = taskItem.querySelector('.delete-btn');

        checkbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
    });
});
