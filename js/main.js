// call ides & classes
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let drag = null;

// create function onclick to add text for btn
btn.onclick = function(){
    if(inp.value != "") {
        // add paragraph inside the box
        boxs[0].innerHTML += `
            <p class="item" draggable= "true">${inp.value}</p>
        `
        // remove text inside the input
        inp.value = '';
    }

    // call function dragItem
    dragItem();
}

// create function drag & drop
function  dragItem() {
    // create variable to take all items
    let items = document.querySelectorAll('.item');

    // loop for each item
    items.forEach(item => {
      // add event listener for drag start
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5';
        })

        // add event listener for drag end
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
        })

         // loop for each box
            boxs.forEach(box => {
                // add event listener for drag over
                box.addEventListener('dragover', function(e){
                    e.preventDefault();
                    this.style.background = '#090';
                    this.style.color = '#fff';
                })

                // add event listener for drag leave
                box.addEventListener('dragleave', function(){
                    this.style.background = '#fff';
                    this.style.color = '#000';
                })

                // add event listener for drag drop
                box.addEventListener('drop', function(){
                    box.append(drag);
                    this.style.background = '#fff';
                    this.style.color = '#000';
                })
            })
    })
}