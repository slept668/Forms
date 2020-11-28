const h3 = document.createElement("h3");
document.body.appendChild(h3);
const h2 = document.querySelector("h2");
const todoField = document.querySelector("#todoField");
const sectionTag = document.querySelector("h2");
var stress = [];


document.querySelector('#daForm').addEventListener("submit", function(event) {
    event.preventDefault();

    textEntry = todoField.value;
    stress.push(textEntry)
    const stressMap = stress.map(todo => `
        <li>
          ${todo}
        </li>
        `);
//    console.log(stressMap)
    
    stressJoined = stressMap.join(``)
    h3.innerHTML = stressJoined
});