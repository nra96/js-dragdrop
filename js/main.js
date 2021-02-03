const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//FILL LISTENER

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//LOOP THROUGH EMPTIES AND CALL DRAG EVENTs
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}



//DRAG FUNCTIONS
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault(); // so item can bounce back
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'; //display the hovered area
}

function dragLeave() {
    this.className = 'empty'; //so the other empty boxes wont get hover effect
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill); //drop the item
}