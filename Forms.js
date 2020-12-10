const h3 = document.createElement("h3");
document.body.appendChild(h3);
const todoField = document.querySelector("#todoField");
var stress = [];


document.querySelector('#daForm').addEventListener("submit", function(event) {
    event.preventDefault();

    textEntry = todoField.value;
    stress.push(textEntry)
    const stressMap = stress.map(todo => `
        
          ${todo}
        
        `);
//    console.log(stressMap)
    
    var stressJoined = stressMap.join(``)
    h3.innerHTML = stressJoined
});