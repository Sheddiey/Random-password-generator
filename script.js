const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const captialElement=document.querySelector('#captial');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const frm=document.querySelector('#frm');


//Button Click to copy password
btnCopy.addEventListener('click',async()=>{
  const pass=outputElement.value;
  if(pass){
      await navigator.clipboard.writeText(pass);
      alert("Copied to clipboard");
  }else{
    alert("There is no password to copy");
  }
});
