const submit = document.getElementById('submit')
const result = document.getElementById('password')
const copy = document.getElementById('tag')

const length = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const character = '!@#$%&'
const number = '1234567890'

const allcharacters = uppercase + lowercase + number + character

submit.addEventListener('click',()=>{
    let password = ''
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += character[Math.floor(Math.random()*character.length)]
    password += number[Math.floor(Math.random()*number.length)]
    while(length >password.length){
        password += allcharacters[Math.floor(Math.random()*allcharacters.length)]
    }
    result.value = password;
})

copy.addEventListener('click',()=>{
    result.select();
    document.execCommand("Copy");
})
