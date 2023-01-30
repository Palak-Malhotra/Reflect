function details(e){
    e.preventDefault()
    var name = document.querySelector("#nameF")
    const email = document.querySelector("#emailF")
    const password = document.querySelector("#passwordF")
    const confirm = document.querySelector("#confirmPasswordF")
    console.log(name.value, email.value, password.value, confirm.value)
    // createUserWithEmailAndPassword(auth, email.value, password.value)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    // });
    
}
