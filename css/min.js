

let singName = document.getElementById('singName')
let singEmail = document.getElementById('singEmail')
let singPassword = document.getElementById('singPassword')
let singMessege = document.getElementById('singMessege')
let singButton = document.getElementById('singButton')
  

usersArray = []


if(localStorage.getItem('user')){
    usersArray = JSON.parse(localStorage.getItem('user'))
}

function singUp(){
    let user = {username : singName.value , email : singEmail.value , password : singPassword.value}
   
if(user.username == '' || user.email == '' || user.password == '' ){

    singMessege.innerHTML = "all inputs are required"
}

else if(iOldEmail(user.email)==true){
    singMessege.innerHTML = "email alredy exists"
}


else{

    singMessege.innerHTML = "Success"
    usersArray.push(user)
    localStorage.setItem('user', JSON.stringify(usersArray))
}

}



function iOldEmail(email) {
    
for(let i=0 ;i<usersArray.length ;i++){
    if(usersArray[i].email == email){
        return true
    }
}

return false
}

if(singButton !=null)
singButton.addEventListener('click' , singUp)



let loginEmail=(document.getElementById('loginEmail'))
let loginPassword=(document.getElementById('loginPassword'))
let loginMessege=(document.getElementById('loginMessege'))
let loginButton=(document.getElementById('loginButton'))
let homepage=(document.getElementById('homepage'))


function login(){
  
if(loginEmail.value == '' || loginPassword.value == ''){
    loginMessege.innerHTML = "all inputs are required "
}

else if(isUserExist(loginEmail.value , loginPassword.value) == false){



    loginMessege.innerHTML = "Incorrect email or password "
}
else{
    loginButton.href = 'home.html'
}

}




function isUserExist(email , password){
    for(let i=0 ; i<usersArray.length ; i++){
        if(email == usersArray[i].email && password == usersArray[i].password){

localStorage.setItem('home' , JSON.stringify(usersArray[i].username))

            return true
        }
    }
    return false
}




if(loginButton !=null)
loginButton.addEventListener('click' , login)


if(homepage != null){
    homepage.innerHTML = `welcome ${JSON.parse(localStorage.getItem('home'))}`
}
