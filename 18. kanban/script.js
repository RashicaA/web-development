const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textArea-cont');
const allPriorityColors = document.querySelectorAll('.priority-color')
const removeBtn = document.querySelector('.remove-btn');
const allTickets = document.querySelectorAll('.ticket-cont');


const toolBoxColors = document.querySelectorAll('.color');

// show modal flag.
let addTaskFlag = false;

let removeTaskFlag = false;

// lock flags
const lockClose = 'fa-lock';
const lockOpen = 'fa-lock-open';

// LS implementation

const ticketsArr = JSON.parse(localStorage.getItem('tickets')) || [];
console.log(ticketsArr);

// for every reload.. fetch from LS. ( in starting )
// RETRIEVAL FROM LS FLOW..
function init() {
    // i will see data from LS
    // if something is presnet, i will call createTicket(...) and that function will render my UI.

    if (localStorage.getItem("tickets")) {
        ticketsArr.forEach(function (ticket) {
            createTicket(ticket.ticketColor, ticket.taskContent, ticket.ticketId)
        })
    }
}

init();

function updateLocalStorage() {
    // to set the LS from your local array.
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
}

function getTicketArrIndex(id) {
    // give me indeex from array which is getting affected.
    let foundIdx = ticketsArr.findIndex(function (tkt) {
        return id === tkt.ticketId
    })
    return foundIdx;
}




function handleLock(ticketElem) {
    const ticketLockElem = ticketElem.querySelector('.ticket-lock');
    const ticketLockIcon = ticketLockElem.children[0];
    console.log("ticketLockElem", ticketLockElem);
    console.log("ticketLockIcon", ticketLockIcon);
    const ticketTaskArea = ticketElem.querySelector('.task-area');


    const idElem = ticketElem.querySelector(".ticket-id");
    const id = idElem.innerText;

    ticketLockIcon.addEventListener('click', function () {
        const idx = getTicketArrIndex(id);

        if (ticketLockIcon.classList.contains(lockClose)) {
            // right now, lock is there.
            // remove lock, show unlock.
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'true');
        } else {
            ticketLockIcon.classList.add(lockClose)
            ticketLockIcon.classList.remove(lockOpen)
            ticketTaskArea.setAttribute('contenteditable', 'false');
        }

        ticketsArr[idx].taskContent = ticketTaskArea.innerText;
        updateLocalStorage();
    })


}

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
    handleColor(ticketCont);
    handleLock(ticketCont)
}

// attaching event to save/call create tciket function.
textArea.addEventListener('keydown', function (ev) {
    const key = ev.key;
    if (key === 'Shift') {
        const taskContent = textArea.value;
        // const ticketId = Math.random().toString(36).substring(2, 8)
        const ticketId = shortid();


        createTicket(modalPriorityColor, taskContent, ticketId);
        // USING LS IN CREATE FLOW..
        ticketsArr.push({ ticketId, taskContent, ticketColor: modalPriorityColor })
        updateLocalStorage();

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
    const idElem = ticketElem.querySelector(".ticket-id");
    const id = idElem.innerText;

    ticketElem.addEventListener('click', function () {
        if (removeTaskFlag) {
            ticketElem.remove();
            // update LS also...
            const tktIdx = getTicketArrIndex(id);
            ticketsArr.splice(tktIdx, 1);
            updateLocalStorage()
        }
    })
}

allTickets.forEach(function (ticket) {
    handleRemoval(ticket)
})


const colors = ['lightpink', 'lightgreen', 'lightblue', 'black']

function handleColor(ticketElem) {
    const ticketColorBand = ticketElem.querySelector('.ticket-color');
    const idElem = ticketElem.querySelector('.ticket-id')


    ticketColorBand.addEventListener('click', function () {

        const ticketIdx = getTicketArrIndex(idElem.innerText);

        const currentColor = ticketColorBand.style.backgroundColor;
        console.log(currentColor)

        let currentColorIndexInColorsArray = colors.findIndex(function (col) {
            return currentColor === col;
        })

        currentColorIndexInColorsArray++;

        const newTicketColorIndex = currentColorIndexInColorsArray % colors.length;
        const newTicketColor = colors[newTicketColorIndex];

        ticketColorBand.style.backgroundColor = newTicketColor;

        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        updateLocalStorage()

    })
}

toolBoxColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        const selectedColor = colorElem.classList[0];
        console.log({ selectedColor })
        const allTickets = document.querySelectorAll('.ticket-cont');
        console.log(allTickets)
        allTickets.forEach(function (ticketElem) {
            const ticketColorBand = ticketElem.querySelector(".ticket-color");
            if (ticketColorBand.style.backgroundColor === selectedColor) {
                // its a match
                ticketElem.style.display = 'block'
            } else {
                ticketElem.style.display = 'none'
            }
        })

    })

    // TO RESET THE FILTER, USER WILL DOUBLE CLICK

    colorElem.addEventListener('dblclick', function () {
        const allTickets = document.querySelectorAll('.ticket-cont');
        allTickets.forEach(function (ticketElem) {
            ticketElem.style.display = 'block';
        })

    })

})