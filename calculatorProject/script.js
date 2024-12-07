let input =document.getElementById("inputBox")
let buttons = document.querySelectorAll('button')
// console.log(buttons);

let csr = document.querySelector(".cursor")
// console.log(csr);


document.body.addEventListener("mousemove",function(e){
    
    csr.style.left=e.x+"px"
    csr.style.top=e.y+"px"
    
})

buttons.forEach(function(ele){
    console.log(ele);
    
    ele.addEventListener("mouseenter",function(){
        csr.style.scale=1.7
        crs.style.border = "0.5px solid "
        crs.style.backgroundColor = "transparent"
        csr.style.transition="all linear .4s"
    })

    ele.addEventListener("mouseleave", function () {
        csr.style.scale = 1
        
        
    })
})


let string =""
let arr = Array.from(buttons)

// console.log(arr);

arr.forEach(element => {
    element.addEventListener("click",function (e){
        console.log(e.target);
        if(e.target.innerHTML === "="){
            string = eval(string)
            console.log(string);
            input.value=string;
        }
        else if(e.target.innerHTML==="Ac"){
            string=""
            input.value=string
        }
        else if(e.target.innerHTML === "DEL"){
            string=string.substring(0,string.length-1)
            input.value=string
        }
        else{
            string+= e.target.innerHTML
            input.value=string;
            
        }

        input.style.color="white"
    })
});

let calc = document.querySelector(".calculator")
document.querySelector("#bright").addEventListener("click",function(){
        document.body.style.background="#fff"
        calc.style.backgroundColor="#0a0a0a"
        document.querySelector("#bright").style.backgroundColor="black"
        document.querySelector("#bright").style.color="white"
            
})
document.querySelector("#dark").addEventListener("click",function(){
        document.body.style.background="#0a0a0a"
        calc.style.backgroundColor="#0a0a0a"
        document.querySelector("#dark").style.backgroundColor="rgb(218, 213, 213)"
        document.querySelector("#bright").style.color="white"
        document.querySelector("#bright").style.backgroundColor="#ffffff27"
        document.querySelector("#bright").style.color="white"
            
})







