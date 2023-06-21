const button = document.querySelector("#submit");
const button1 = document.getElementById("clear");
button.addEventListener('click',convert);
button1.addEventListener('click',() => {
    document.getElementById("input").value='';
});
function convert(){
    let num = document.getElementById("input").value;
    let result = document.querySelector("#result");
    let split = '';
    let s=0;
    if(num.includes('+'))
    {
        split = num.split('+');
        s=Number(split[0])+Number(split[1]);
        result.innerHTML="The Answer Is  " + s;
}
else if(num.includes('-')){
    split = num.split('-');
    s=Number(split[0])-Number(split[1]);
    result.innerHTML="The Answer Is  " + s;
}
else if(num.includes('*')){
    split = num.split('*');
    s=Number(split[0])*Number(split[1]);
    result.innerHTML="The Answer Is  " + s;
}
else if(num.includes('/')){
    split = num.split('/');
    s=Number(split[0])/Number(split[1]);
    result.innerHTML="The Answer Is  " + s;
}
else if(num.includes('%')){
    split = num.split('%');
    s=Number(split[0])%Number(split[1]);
    result.innerHTML="The Answer Is  " + s;
}
else{
    s='Input format is wrong';
    result.innerHTML=s;
}
}