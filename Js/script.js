let listItems = document.querySelectorAll('ul .items');

console.log(listItems)
for(let item of listItems) {
    item.addEventListener('click' , (ev) => {
        document.querySelector('ul .selected').classList.remove('selected');
        ev.target.classList.add('selected');
        
        let textTarget = ev.target.getAttribute('data-list');
        document.querySelector('section .selected').classList.remove('selected');
        document.querySelector(`section div[data-list="${textTarget}"]`).classList.add('selected');
    })
}