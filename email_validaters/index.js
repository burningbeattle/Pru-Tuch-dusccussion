function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const error = document.getElementsByTagName("input")[0];
console.log(error);

let email = ""
error.addEventListener('change', (error) =>{
    email = error.target.value;
    console.log(email);
    
})
error.addEventListener('submit', (error)=>{
    console.log("jhydfkuwyh");
    if (!validateEmail(email)){error.classList.add('error')}

})

