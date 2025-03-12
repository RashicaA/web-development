const addBtn = document.querySelector('.add-btn');
const modalCont = document.querySelector('.modal-cont');
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textArea-cont');
const allPriorityColors = document.querySelectorAll('.priority-color')

// show modal flag.
let addTaskFlag = false;

addBtn.addEventListener('click', function () {
    // toggle the flag. true > false ELSE false > true
    addTaskFlag = !addTaskFlag;

    if (addTaskFlag) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }
})

function createTicket() {
    // create a new ticket container element...
    const ticketCont = document.createElement('div');

    ticketCont.classList.add('ticket-cont');
    // ticketCont.setAttribute('class', 'ticket-cont');

    ticketCont.innerHTML = `
    <div class="ticket-color"></div>
            <div class="ticket-id">123456</div>
            <div class="task-area">Random task</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>
    `
    mainCont.appendChild(ticketCont);

}


// attaching event to save/call create tciket function.
textArea.addEventListener('keydown', function (ev) {
    const key = ev.key;
    if (key === 'Shift') {
        createTicket();
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