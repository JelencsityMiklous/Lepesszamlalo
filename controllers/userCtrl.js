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
    ShowMessage('danger','Hiba','Nem adtál meg minden adatot!')
    return
}

if (passwdField.value!=confirmPasswdField.value){
    ShowMessage('danger','Hiba','Jelszavak nem egyeznek')
    return;
}

if(!passwdRegExp.test(passwdField.value)){
    ShowMessage('danger','Hiba','Jelszó nem biztonságos')
    return;
}

if(!emailRegExp.test(emailField.value)){
    ShowMessage('danger','Hiba','Email nem megfelelő')
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

    if(res.status==200){
        nameField.value=""
        emailField.value=""
        passwdField.value=""
        confirmPasswdField.value=""
        ShowMessage('success','Ok',data.msg)
    }
    else{
        ShowMessage('danger','Hiba',data.msg)
    }

} 
catch (err) {
    console.log('Hiba történt: ', err)
    
}





}


async function login(){
    let emailField = document.querySelector("#emailField")
    let passwdField = document.querySelector("#passwdField")

    if(emailField.value==''  || passwdField.value==''){
        ShowMessage('danger','Hiba','Nem adtál meg minden adatot!')
        return
    }

    let user = [];

    try {
        
        const res = await fetch(`${Server}/users/login`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        {
            email:emailField.value,
            password: passwdField.value
        })
        })

        user = await res.json()
        
        if(user.id!=undefined){
            loggedUser= user
        };


        if(!loggedUser){
            ShowMessage('danger', 'Hiba', 'Hibás belépési adatok')
            return
        }

        sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser))
        
        getLoggedUser()
        ShowMessage('success','Ok','Sikeres bejelentkezés')


    } catch (err) {
        ShowMessage('danger', 'Hiba', 'Hibás belépési adatok')
    }
    


}   

function logout(){

    sessionStorage.removeItem('loggedUser')
    getLoggedUser()
    render('login')
    
}

function getProfile(){

}

function updateProfile(){

}

function updatePassword(){
    
}