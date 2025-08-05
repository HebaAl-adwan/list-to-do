let todolist = JSON.parse(localStorage.getItem('todolist')) || [];
let curfil = 'kul';

function aatodolist() {
  const ele = document.getElementById('eletodolist');
  ele.innerHTML = '';

  todolist
    .filter(item => {
      if (curfil === 'done') return item .done;
      if (curfil === 'no') return !item .done;
      return true;
    })
    .forEach((item , index) => {
      const li = document.createElement('li');
      li.className = taskk.done ? 'completed' : '';

      const span = document.createElement('span');
      span.textContent = taskk.nass;

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = taskk.done;
      check.onchange = () => togtask(index);

      const btndelete = document.createElement('button');
      btndelete.textContent = 'delete';
      btndelete.onclick = () => deleteitem (index);

      li.appendChild(check);
      li.appendChild(span);
      li.appendChild(btndelete);
      ele.appendChild(li);
    });

  localStorage.setItem('todolist', JSON.stringify(todolist));
}

function additem () {
  const input = document.getElementById('inputitem ');
  if (input.value.trim() !== '') {
    todolist.push({ nass: input.value, done: false });
    input.value = '';
    aatodolist();
  }
}

function togtask(index) {
  todolist[index].done = !todolist[index].done;
  aatodolist();
}

function deleteitem (index) {
  todolist.splice(index, 1);
  aatodolist();
}

function filtertodolist(filter) {
  curfil = filter;
  aatodolist();
}

document.getElementById('inputitem ').addEventListener('keypress', e => {
  if (e.key === 'Enter') additem ();
});

aatodolist();