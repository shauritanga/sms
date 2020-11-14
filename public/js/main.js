const numberInput = document.getElementById('number');
const messageInput = document.getElementById('message');
const button = document.getElementById('button');

button.addEventListener('click', send, false);


async function send(){
    console.log('called');
    const number = numberInput.value.replace(/\D/g, '');
    const text = messageInput.value;
    try {
        const response = await fetch('/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({number, text})
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}