const sendOTP = document.querySelector('.sendOTP a');
sendOTP.addEventListener('click',() => {
    const x = document.getElementsByClassName('sendOTP');
    x[0].style.display = 'none';
    const y = document.getElementsByClassName('cnf_email');
    y[0].style.display = 'flex';
});

const cnf_email = document.querySelector('.cnf_email .cnf_OTP a');
cnf_email.addEventListener('click',()=>{
    const y = document.getElementsByClassName('cnf_email');
    y[0].style.display = 'none';
    const z = document.getElementsByClassName('verified');
    z[0].style.display = 'flex';
})

const register = document.querySelector('#submit');

register.addEventListener('click',() => {
    const a = document.getElementsByClassName('pass')[0].getElementsByTagName('input')[0].value;
    const b = document.getElementsByClassName('cnfpass')[0].getElementsByTagName('input')[0].value;
    
    if(a!=b){
        alert("Both Password must be same");
        document.getElementsByClassName('pass')[0].getElementsByTagName('input')[0].value = "";
        document.getElementsByClassName('cnfpass')[0].getElementsByTagName('input')[0].value = "";
    }

})
