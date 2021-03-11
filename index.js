const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
let result = document.getElementById('result');
const clearBtn = document.querySelector('.deleteAll')




addBtn.addEventListener('click', (e) => {
    if (input.value === '') return;
        renderTasks(input.value)
        input.value = '';
});

function renderTasks(value) {

    const li = document.createElement('li')
    const span = document.createElement('span')

    const editField = document.createElement('input')


    editField.value = value
    span.textContent = value

    li.className = 'li'

    li.appendChild(span)
    li.appendChild(editField)


    const btnToggle = document.createElement('button')
    btnToggle.className = 'btnToggle'
    btnToggle.textContent = 'Toggle'
    li.appendChild(btnToggle)

    const btnEdit = document.createElement('button')
    btnEdit.className = 'btnEdit'
    btnEdit.textContent = 'Edit'
    li.appendChild(btnEdit)

    const btnRemove = document.createElement('button')
    btnRemove.className = 'btnRemove'
    btnRemove.textContent = 'Remove'
    li.appendChild(btnRemove)

    btnRemove.addEventListener('click', () => {
        result.removeChild(li)
    });

    btnToggle.addEventListener('click', () => {
        li.classList.toggle('toggleLi')
    })

    btnEdit.addEventListener('click', () => {
        if(editField.classList.contains('showField')) {
            let newValue = editField.value;
            span.textContent = newValue;
            span.classList.remove('hideField');
            span.classList.add('showField');
            editField.classList.remove('showField');
            editField.classList.add('hideField');
        } else {
            editField.classList.remove('hideField')
            editField.classList.add('showField')
            span.classList.add('hideField')
            span.classList.remove('showField')
        }
    })

    result.appendChild(li)

}

clearBtn.onclick = function () {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

