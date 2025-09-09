const passwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailRegExp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

async function registration(){
/*    await fetch('http://localhost:3000/users').then(res => res.json())
    .then(data => console.log(data))
    }
*/

let nameField = document.querySelector('#nameField')
let emailField = document.querySelector('#emailField')
let passwdField = document.querySelector('#passwdField')
let confirmPasswdField = document.querySelector('#confirmPasswdField')

if(nameField.value=='' || emailField.value==''  || passwdField.value=='' || confirmPasswdField.value==''){
    alert('Nem adtál meg minden adatot')
    return
}

if (passwdField.value!=confirmPasswdField.value){
    alert('A megadott jelszavak nem egyeznek!')
    return;
}

if(!passwdRegExp.test(passwdField.value)){
    alert("A megadott jelszó nem biztonságos")
    return;
}

if(!emailRegExp.test(emailField.value)){
    alert("A megadott email nem megfelelő")
    return;
}


try {
    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        {
            name: nameField.value,
            email:emailField.value,
            password: passwdField.value
        })
    })
    
    
    const data = await res.json()
    /*console.log(data)*/
    alert(data.msg)

} 
catch (err) {
    console.log('Hiba történt: ', err)
    
}





}


function login(){
    
}

function logout(){

}

function getProfile(){

}

function updateProfile(){

}

function updatePassword(){
    
}