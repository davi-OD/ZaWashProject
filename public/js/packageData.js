let dropdown = document.getElementById('package');
dropdown.length = 0;


let defaultOption = document.createElement('option');
defaultOption.text = "Choose Package";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

// Real inportant code 
function getPackage(){
    return fetch("../../washPackages.json")
    .then(response => response.json())
    .then(data => {
        return data
    })
};

function showOptions(optns){
    let opt = document.querySelector("#package")
    let optPack = "";
    optns.forEach(optn => {
        optPack += `<option id="${optn.id}" value="${optn.value}">${optn.value} - ${optn.price}</option>`
    });
    opt.innerHTML = optPack;
}

getPackage().then(data => {
    showOptions(data);
});