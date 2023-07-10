const button = document.querySelector("#submit");
const button1 = document.getElementById("clear");
const button2 = document.getElementById("clearAll");
button.addEventListener('click',convert);
button1.addEventListener('click',() => {
    let cl = document.getElementById("input").value;
    let a = cl.slice(0,-1);
    document.getElementById("input").value=a;
});
button2.addEventListener('click',()=>{
    document.getElementById("input").value='';
    result.innerHTML='';
});
/*function convert(){
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
}*/
function convert(){
    let num = document.getElementById("input").value;
    let result = document.querySelector("#result");
    let split = '';
    let s=0,j=0,n='',sym='';
    for(let i=0;i<num.length;i++){
    if(num[i] == '+' || num[i] == '-' || num[i] == '*' || num[i] == '/' || num[i] == '%'){
        sym += num[i];
    }
}
split = num.split(/[+\-*/%]/);
for(let j=0;j<split.length;j++){
    if(sym[j] == '+'){
        split[j+1] = Number(split[j]) + Number(split[j+1]);
    }
    if(sym[j] == '-'){
        split[j+1] = Number(split[j]) - Number(split[j+1]);
    }
    if(sym[j] == '*'){
        split[j+1] = Number(split[j]) * Number(split[j+1]);
    }
    if(sym[j] == '/'){
        split[j+1] = Number(split[j]) * Number(split[j+1]);
    }
    if(sym[j] == '%'){
        split[j+1] = Number(split[j]) % Number(split[j+1]);
    }
}
result.innerHTML="The Answer Is  " + split[split.length-1];
}