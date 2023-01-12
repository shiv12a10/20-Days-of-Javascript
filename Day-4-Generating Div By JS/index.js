let so = document.getElementById("so");
let add_div = document.getElementById("add_div");
let remove_div = document.getElementById("remove_div");



add_div.onclick =  function (){
    let new_div=document.createElement('input');
    new_div.setAttribute('type','text');
    new_div.setAttribute('name','so[]');
    new_div.setAttribute('size','50');
    new_div.setAttribute('placeholder','New Div');
    new_div.setAttribute('class','so');

    so.appendChild(new_div);
};

remove_div.onclick = function () {
    let old_div = so.getElementsByTagName('input');
    if(old_div.length > 2){
        so.removeChild(old_div[(old_div.length) - 1]);
    }
}