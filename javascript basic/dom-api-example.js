
const para = document.createElement("p")
para.textContent = "this is created using DOM Appi";
para.setAttribute("id", "js-para");

para.classList.add("first-class");
para.classList.add("second-class");
para.classList.remove("second-class");

console.log(para.getAttribute("id"))


const span = document.createElement("span")
span.id =  "span-id";
span.className = "blue red";
span.innerHTML = "this is span created using <em>dom.createElement</em> "
span.style.backgroundColor = "yellow"

para.appendChild(span);

document.body.appendChild(para);

const hobbies = ["swim", "read", "coding"];
const list = document.createElement("ul");
for(let hobby of hobbies) {
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}

document.body.appendChild(list);


