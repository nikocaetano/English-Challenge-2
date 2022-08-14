let one = document.querySelector(".addOne");

let count = 0;

function Add(){
    count = count + 1;
    one.textContent = count;
}
function Less(){
    count = count - 1;
    one.textContent = count;

}

