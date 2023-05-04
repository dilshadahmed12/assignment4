document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = document.getElementById('dob').value;
    const age = calculateAge(new Date(dob));
    document.getElementById('age-output').textContent = `Your age is ${age} years old.`;
});

function calculateAge(dob) {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        return age - 1;
    }
    return age;
}
