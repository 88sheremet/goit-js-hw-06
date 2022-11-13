// const form = document.querySelector('.login-form');
// // console.log(form);
// const inputs = document.querySelectorAll('input');

// form.addEventListener('submit', (event) => {
// event.preventDefault();

// const data = new FormData(event.target);
// const myData = {};

// for ( let i = 0; i < event.target.elements.length; i ++){
//     const element = event.target.elements[i];
//    if (element.name){
//     // console.log(element.value);
//     myData[element.name] = data.get(element.name)
//    }
// }

// inputs.forEach(input => {
//     if (input.value === '') { 
//     alert("Все поля должны быть заполнены!")
//     } else {console.log(myData);}
// })

// event.target.reset();
// // console.log(myData);





// // console.log(event.target);
// // console.log(event.currentTarget);
// })

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены!')
    }
    const userDetails = { Email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}



