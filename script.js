const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const todoList = document.getElementById('todoList');

function getWeekday(dateStr) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateStr + 'T00:00:00'); // avoid timezone issues
  return days[date.getDay()];
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = taskInput.value.trim();
  const date = dateInput.value;
  if (!task || !date) return;

  const weekday = getWeekday(date);

  const li = document.createElement('li');

  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';

  const taskText = document.createElement('div');
  taskText.textContent = task;

  const taskDate = document.createElement('div');
  taskDate.className = 'task-date';
  taskDate.textContent = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  taskInfo.appendChild(taskText);
  taskInfo.appendChild(taskDate);

  const weekdaySpan = document.createElement('span');
  weekdaySpan.className = 'weekday';
  weekdaySpan.textContent = weekday;

  li.appendChild(taskInfo);
  li.appendChild(weekdaySpan);

  todoList.appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
});