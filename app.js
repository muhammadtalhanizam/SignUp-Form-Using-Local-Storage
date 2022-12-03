function signUp() {


  let userObj = {

      fName: document.getElementById("fName").value,
      lName: document.getElementById("lName").value,
      userName: document.getElementById("userName").value,
      phoneNum: document.getElementById("phoneNum").value,
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
      confirmPass: document.getElementById("confirmPass").value,
      
  }

  let res = JSON.stringify([userObj])
  localStorage.setItem("UserDATA", res);
  console.log(res)

  
}


