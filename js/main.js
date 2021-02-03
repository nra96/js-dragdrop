const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//FILL LISTENER

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//DRAG FUNCTIONS
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}