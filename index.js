var colMails = document.getElementsByClassName('column-mails')[0];
var colMailContent = document.getElementsByClassName('column-mail-content')[0];

let mails = document.getElementsByClassName('mail');

for (const mail of mails) {
    mail.addEventListener('click', handleOnTapMail)
}

function handleOnTapMail() {
    if (window.outerWidth < 1500) {
    
        colMails.style.display = 'none';
        colMailContent.style.display = 'flex';
    }
}

function handleResize() {
    let colMailsDisplay = window.getComputedStyle(colMails, null).getPropertyValue("display");

    if (colMailsDisplay == 'none') {
        colMails.style.display = 'flex';
    }

    if (window.outerWidth < 1500) {
        colMailContent.style.display = 'none';
    } else {
        colMailContent.style.display = 'flex';
    }
}

window.onresize = handleResize;