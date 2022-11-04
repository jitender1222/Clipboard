const input=document.getElementById('input');
const btn=document.getElementById('btn');
const result=document.querySelector('.show-result');
const heading=document.getElementById('h1');


btn.addEventListener('click',()=>{
    if(input.value.length == 0) alert("Write something first");

    else{
    input.select();
    navigator.clipboard.writeText(input.value);

    h1.innerHTML = input.value;

    setTimeout(()=>{
        heading.innerHTML="Clipboard";
        input.value="";
    },3000)
    }
})