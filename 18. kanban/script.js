const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textArea-cont');
const allPriorityColors = document.querySelectorAll('.priority-color')
const removeBtn = document.querySelector('.remove-btn');
const allTickets = document.querySelectorAll('.ticket-cont')

// show modal flag.
let addTaskFlag = false;

let removeTaskFlag = false;

addBtn.addEventListener('click', function () {
    // toggle the flag. true > false ELSE false > true
    addTaskFlag = !addTaskFlag;

    if (addTaskFlag) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }
})

removeBtn.addEventListener('click', function () {
    removeTaskFlag = !removeTaskFlag;
    if (removeTaskFlag) {
        alert('Delete mode activated...')
        removeBtn.style.color = 'red'
    } else {
        removeBtn.style.color = 'white'
    }
})

function createTicket(ticketColor, ticketTask, ticketId) {
    // create a new ticket container element...
    const ticketCont = document.createElement('div');

    ticketCont.classList.add('ticket-cont');
    // ticketCont.setAttribute('class', 'ticket-cont');


    ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor}"></div>
            <div class="ticket-id">${ticketId}</div>
            <div class="task-area">${ticketTask}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>
    `
    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);
}

// attaching event to save/call create tciket function.
textArea.addEventListener('keydown', function (ev) {
    const key = ev.key;
    if (key === 'Shift') {
        const taskContent = textArea.value;
        // const ticketId = Math.random().toString(36).substring(2, 8)
        const ticketId = shortid();


        createTicket(modalPriorityColor, taskContent, ticketId);
        modalCont.style.display = "none";
        textArea.value = '';
    }
})

let modalPriorityColor = 'black'

// adding events to colors in modal...
allPriorityColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        console.log(colorElem);
        // remove active class

        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove('active')
        })

        colorElem.classList.add('active');
        modalPriorityColor = colorElem.classList[0]


    })
})

function handleRemoval(ticketElem) {
    ticketElem.addEventListener('click', function () {
        if (removeTaskFlag) {
            ticketElem.remove();
        }
    })
}

allTickets.forEach(function (ticket) {
    handleRemoval(ticket)
})