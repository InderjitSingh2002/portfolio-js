//Gets the Form and form elements from the DOM
const contactForm = document.getElementById('contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


//Adds event listener to submit button
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Form data arranged in JSON structure
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }


    //Generates HTTP Request
    let xhr = new XMLHttpRequest();
    //Posts the data
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    //Sends the JSON object in form of a string
    xhr.send(JSON.stringify(formData));


    //Alerts user that email has been sent
    alert("Your email has been sent");
    window.location.reload();
})