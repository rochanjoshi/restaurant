
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
}

function fun4(){
    a2.style.display = "none";
    a1.style.display = "none";
    a3.style.display = "none";
    l1.classList.remove("active12");
    l3.classList.remove("active12");
    l2.classList.remove("active12");
}

