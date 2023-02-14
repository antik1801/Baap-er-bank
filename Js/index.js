// connection check !
// console.log('Connection successful');

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

document.getElementById('btn-submit').addEventListener('click',function(){
    // step 1: Take the mail value
    const inpMail = document.getElementById('mail');
    const inpMailString = inpMail.value;

    // step 2: Take the Password Field
    const inpPass = document.getElementById('password');
    const inpPassString = inpPass.value;

    

    if(inpMailString === 'antik.edu@gmail.com' && inpPassString === 'antik##123'){
        window.location.href="bank.html";
    }
    else{
        alert('You have entered Wrong mail address!! or Password!!');
    }

})