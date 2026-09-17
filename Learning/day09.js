
let db = [
    {email:"a@gmail.com", password:123},
    {email:"b@gmail.com", password:123},
    {email:"c@gmail.com", password:123},
]

function validLogin(){
    
    let emailJs = document.getElementById("em").value
    let passJs = document.getElementById("ps").value

    let userFound = db.find((user)=> user.email == emailJs && user.password == passJs)

    if(userFound){
        window.open("success.htm")
    }else{
        alert("invalid credentials")
    }
}