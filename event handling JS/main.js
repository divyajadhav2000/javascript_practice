function handlClick(){
    alert("you have clicked the button")
}

document.getElementById("clickme").addEventListener("click", handlClick)



function handleMouseOver(event){
    console.log(event);
}


document.getElementById("start").addEventListener("click", function handlClick(){
    document.addEventListener("mouseover", handleMouseOver)
})

document.getElementById("stop").addEventListener("click", function handlClick(){
    document.removeEventListener("mouseover", handleMouseOver)
})
