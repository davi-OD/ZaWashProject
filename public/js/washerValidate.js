//Access feilds by name
const nameW = document.washerInfo.washer_name;
const genderW = document.washerInfo.gender;
const birthDate = document.washerInfo.dob;
const ninID = document.washerInfo.nin;
const residenceW = document.washerInfo.residence;
const employID = document.washerInfo.work_Id;


//Regular Expressions
const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;
const newRegex = /([A-Z][a-z])/;
const idRegex = /^[a-zA-Z0-9_]*$/;
// const minAge = /(01/01/2003);


//Errors
const nameWasherErr = (message) => {
    let name_Er = document.getElementById('nameEr');
    name_Er.innerText = message;
}
const genderWasherErr = (message) => {
    let gender_Er = document.getElementById('genderEr');
    gender_Er.innerText = message;
}
const dateOfBErr = (message) => {
    let bd_Er = document.getElementById('birthDEr');
    bd_Er.innerText = message;
}
const ninErr = (message) => {
    let nin_Er = document.getElementById('ninEr');
    nin_Er.innerText = message;
}
const residneceErr = (message) => {
    let resi_Er = document.getElementById('residenceEr');
    resi_Er.innerText = message;
}
const employIdErr = (message) => {
    let id_Er = document.getElementById('idEr');
    id_Er.innerText = message;
}


//Validations
var nameErr = () => {
    if (nameW.value == '') {
        nameWasherErr('Please Enter Washer Name');
        nameW.style.border = '2px solid red';
        event.preventDefault();
        nameW.focus();
        return false;
    }
    if (nameW.value.match(nameRegex)) {
        return true;
    }else{
        nameW.style.border = '2px solid red'
        nameWasherErr('Please Enter Name In Valid Format');
        event.preventDefault();
        nameW.focus();
        return false;
    }
};
var genderErr = () => {
    if (genderW.value == '--Select Gender-') {
        genderWasherErr('Please Select A Package');
        genderW.style.border = '2px solid red';
        event.preventDefault();
        genderW.focus();
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

var dateBirth = () => {
    if (birthDate.value == '') {
        dateOfBErr('Please Enter Date Of Birth');
        birthDate.style.border = '2px solid red';
        event.preventDefault();
        birthDate.focus();
        return false;
    }
    if (birthDate.value.match(minAge)) {
        return true;
    }else{
        birthDate.style.border = '2px solid red'
        dateOfBErr('Washer Is Not Of Age');
        event.preventDefault();
        birthDate.focus();
        return false;
    }
};
var nationIDEr = () => {
    if (ninID.value == '') {
        ninErr('Please Enter NIN');
        ninID.style.border = '2px solid red';
        event.preventDefault();
        ninID.focus();
        return false;
    }
    if (ninID.value.match(idRegex)) {
        return true;
    }else{
        ninID.style.border = '2px solid red'
        ninErr('Please Enter The Valid NIN');
        event.preventDefault();
        ninID.focus();
        return false;
    }
};
var residentWEr = () => {
    if (residenceW.value == '') {
        residneceErr('Please Enter Residence');
        residenceW.style.border = '2px solid red';
        event.preventDefault();
        residenceW.focus();
        return false;
    }
    if (residenceW.value.match(residenceRegex)) {
        return true;
    }else{
        residenceW.style.border = '2px solid red'
        residneceErr('Please Enter The Valid Format');
        event.preventDefault();
        residenceW.focus();
        return false;
    }
};
var workIDEr = () => {
    if (employID.value == '') {
        employIdErr('Please Enter WorkID');
        employID.style.border = '2px solid red';
        event.preventDefault();
        employID.focus();
        return false;
    }
    if (employID.value.match(idRegex)) {
        return true;
    }else{
        employID.style.border = '2px solid red'
        employIdErr('Please Enter The Valid Format');
        event.preventDefault();
        employID.focus();
        return false;
    }
};

var validate = () => {
    if (nameErr());
    if (genderErr());
    if (dateBirth());
    if (nationIDEr());
    if (residentWEr());
    if (workIDEr ());
};

document.addEventListener('submit', validate);
