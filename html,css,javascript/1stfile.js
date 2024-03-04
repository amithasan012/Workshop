let mybutton=document.getElementById("button1")

mybutton.addEventListener("click",function addElement() {

    document.body.onload = addElement;

    const newDiv = document.createElement("div");
  
    const newContent = document.createTextNode("this is a new heading");

    newDiv.appendChild(newContent);
  
    const currentDiv = document.getElementById("div1");

    document.body.insertBefore(newDiv, currentDiv);

  })


// function name(){
//     for(let i=1;i<=1000;i++){
//         if(i=1000){
//             console.log(i);
//         }
//     }
//     let j=100000000000000000;
//     console.log(j);
// }