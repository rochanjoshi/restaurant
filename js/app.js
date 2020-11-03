function changeform(){
    location.replace('signup.html');
    console.log("cshcwu");
}

let a1 = document.getElementById("c2");
let a2 = document.getElementById("c3");
let a3 = document.getElementById("c4");
let a4 = document.getElementById("c5");
let l1 = document.getElementById("link11");
let l2 = document.getElementById("link12");
let l3 = document.getElementById("link13");
let l4 = document.getElementById("link14");

function fun423(){
    a2.style.display = "block";
    fun1();
    l2.classList.add("active12");
    console.log("asckjsdbcwedcvowhedvcwsdevb");
}

function fun1(){
    a1.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    l1.classList.remove("active12");
    l3.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun424(){
    a1.style.display = "block";
    l1.classList.add("active12");
    fun2();
    console.log("asckjsdbcwedcvowhedvcwsdevb");
}

function fun2(){
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    l2.classList.remove("active12");
    l3.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun425(){
    a3.style.display = "block";
    fun3();
    l3.classList.add("active12");
    console.log("asckjsdbcwedcvowhedvcwsdevb");
}

function fun3(){
    a2.style.display = "none";
    a1.style.display = "none";
    a4.style.display = "none";
    l1.classList.remove("active12");
    l2.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun426(){
    a4.style.display = "block";
    fun4();
    l4.classList.add("active12");
    console.log("asckjsdbcwedcvowhedvcwsdevb");
}

function fun4(){
    a2.style.display = "none";
    a1.style.display = "none";
    a3.style.display = "none";
    l1.classList.remove("active12");
    l3.classList.remove("active12");
    l2.classList.remove("active12");
}




let name = document.getElementById("input1");
let lname = document.getElementById("input2");
let email = document.getElementById("input3");
let password = document.getElementById("input4");


function func(){
    if(name.value == null || name.value == "")  alert("Please enter user's name");

    else if(email.value == null || email.value == "") alert("Email field shoulf not be empty!");

    else if(email.value == null || email.value == "") alert("Please enter email");

    else if(password.value == null || password.value == "") alert("Password field should not be empty!");

    else if(!validateEmail(email.value)) alert("Please enter a valid email address");

    else if(!testString(password.value)){
        alert("Please enter a valid password");
    }
    
    else{
        alert("Logged in successfully");
    }
    
}

function func1(){

    if(email.value == null || email.value == "") alert("Email field shoulf not be empty!");

    else if(email.value == null || email.value == "") alert("Please enter email");

    else if(password.value == null || password.value == "") alert("Password field should not be empty!");

    else if(!validateEmail(email.value)) alert("Please enter a valid email address");

    else if(!testString(password.value)){
        alert("Please enter a valid password");
    }
    
    else{
        alert("Logged in successfully");
    }
    
}


function testString(s) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}