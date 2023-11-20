var myimage = document.getElementById("image")
var mybutton1 = document.getElementById("button1")
var mybutton2=document.getElementById("button2")
var mybutton3=document.getElementById("button3")
var mybutton4=document.getElementById("button4")
var mybutton5=document.getElementById("button5")

mybutton1.addEventListener("click",function(){
    myimage.src="1.webp"
})
mybutton2.addEventListener("click",function(){
    myimage.src="2.jpeg"
})
mybutton3.addEventListener("click",function(){
    myimage.src="3.jpeg"
})
mybutton4.addEventListener("click",function(){
    myimage.src="4.jpeg"
})
mybutton5.addEventListener("click",function(){
    myimage.src="5.jpeg"
})