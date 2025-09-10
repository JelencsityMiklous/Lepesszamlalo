function ShowMessage(severity, title, message){
    let messageBox = document.querySelector('#messageBox')
    messageBox.innerHTML=''
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let btn = document.createElement('button')

    h3.innerHTML= title;
    p.innerHTML=message;
    p.classList.add('m-0', 'p-0')
    btn.classList.add('btn-close')
    //btn.setAttribute('data-bs-dissmiss', 'alert')
    btn.setAttribute('aria-label', 'Close')
    messageBox.classList=''
    messageBox.classList.add('alert', `alert-${severity}`, 'alert-dissmissible', 'fade', 'show')
    messageBox.setAttribute('role', 'alert')

    
    messageBox.appendChild(h3)
    messageBox.appendChild(btn)
    messageBox.appendChild(p)
    
    

    setTimeout(() => {
    
        messageBox.classList.remove('show')
        messageBox.classList.add('hide')


    }, 3000);
}

