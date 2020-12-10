const ul = document.createElement("ul");
document.body.appendChild(ul);
const todoField = document.querySelector("#todoField");
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
    
    var stressJoined = stressMap.join(``)
    ul.innerHTML = stressJoined
});