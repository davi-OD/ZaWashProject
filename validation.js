//Access fields by name
const numP = document.vehicleReg.number_plate;
const carC = document.vehicleReg.car_Color;
const timeA = document.vehicleReg.time;
const dateA = document.vehicleReg.date;
const makeV = document.vehicleReg.make_Vehicle;
const typeV = document.vehicleReg.type_Vehicle;
const packW = document.vehicleReg.package;
const assignW = document.vehicleReg.assign_To;


//Regular Expressions
const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;
const newRegex = /([A-Z][a-z])/;


//Errors
const numPErr = (message) => {
    let numP_Er = document.getElementById('num_PlateEr');
    numP_Er.innerText = message;
}
const colorErr = (message) => {
    let color_Er = document.getElementById('colorEr');
    color_Er.innerText = message;
}
const timeAErr = (message) => {
    let timeA_Er = document.getElementById('timeAEr');
    timeA_Er.innerText = message;
}
const dateAErr = (message) => {
    let dateA_Er = document.getElementById('dateAEr');
   dateA_Er.innerText = message;
}
const makeErr = (message) => {
    let make_Er = document.getElementById('makeEr');
    make_Er.innerText = message;
}
const typeErr = (message) => {
    let type_Er = document.getElementById('typeEr');
    type_Er.innerText = message;
}
const packErr = (message) => {
    let pack_Er = document.getElementById('packEr');
    pack_Er.innerText = message;
}
const assignErr = (message) => {
    let assign_Er = document.getElementById('assignEr');
    assign_Er.innerText = message;
}

//Validations
var numb_Plate = () => {
    if (numP.value == '') {
        numPErr('Please Enter Vehicle Number Plate');
        numP.style.border = '2px solid red';
        event.preventDefault();
        numP.focus();
        return false;
    }
    if (numP.value.match(nameRegex)) {
        return true;
    }else{
        numP.style.border = '2px solid red'
        numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
        event.preventDefault();
        numP.focus();
        return false;
    }
};

var carColor = () => {
    if (carC.value == '') {
        colorErr('Please Enter Vehicle Color');
        carC.style.border = '2px solid red';
        event.preventDefault();
        carC.focus();
        return false;
    }
    // if (numP.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     numP.style.border = '2px solid red'
    //     numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     numP.focus();
    //     return false;
    // }
};
var timeArrived = () => {
    if (timeA.value == '') {
        timeAErr('Please Enter Arrival Time');
        timeA.style.border = '2px solid red';
        event.preventDefault();
        timeA.focus();
        return false;
    }
    // if (numP.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     numP.style.border = '2px solid red'
    //     numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     numP.focus();
    //     return false;
    // }
};
var dateArrived = () => {
    if (dateA.value == '') {
        dateAErr('Please Enter Arrival Date');
        dateA.style.border = '2px solid red';
        event.preventDefault();
        dateA.focus();
        return false;
    }
    // if (numP.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     numP.style.border = '2px solid red'
    //     numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     numP.focus();
    //     return false;
    // }
};
var makeVE = () => {
    if (makeV.value == '') {
        makeErr('Please Enter Vehicle Make');
        makeV.style.border = '2px solid red';
        event.preventDefault();
        makeV.focus();
        return false;
    }
    // if (numP.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     numP.style.border = '2px solid red'
    //     numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     numP.focus();
    //     return false;
    // }
};
var typeVE = () => {
    if (typeV.value == '') {
        typeErr('Please Enter Vehicle Type');
        typeV.style.border = '2px solid red';
        event.preventDefault();
        typeV.focus();
        return false;
    }
    // if (numP.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     numP.style.border = '2px solid red'
    //     numPErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     numP.focus();
    //     return false;
    // }
};

var packageW = () => {
    if (packW.value == '--Select Package-') {
        packErr('Please Select A Package');
        packW.style.border = '2px solid red';
        event.preventDefault();
        packW.focus();
        return false;
    }
    // if (assignW.value.match(nameRegex)) {
    //     return true;
    // }else{
    //     assignW.style.border = '2px solid red'
    //     assignErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
    //     event.preventDefault();
    //     assignW.focus();
    //     return false;
    // }
};
var assign = () => {
    if (assignW.value == '') {
        assignErr('Please Assign Vehicle To Washer');
        assignW.style.border = '2px solid red';
        event.preventDefault();
        assignW.focus();
        return false;
    }
    if (assignW.value.match(nameRegex)) {
        return true;
    }else{
        assignW.style.border = '2px solid red'
        assignErr('Please Enter valid Number Plate starting 3 letters, 7 alphanumeric legth');
        event.preventDefault();
        assignW.focus();
        return false;
    }
};

var validate = () => {
    if (numb_Plate());
    if (carColor());
    if (timeArrived());
    if (dateArrived());
    if (makeVE());
    if (typeVE());
    if (packageW());
    if (assign());
};

document.addEventListener('submit', validate);