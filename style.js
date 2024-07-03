//varialbe delaration
//first drumset
let snare = document.querySelector(".snare");
let snareCount = 0;
let snareSound = document.querySelector(".snareSound");
let OHihat = document.querySelector(".OHihat");
let OHihatCount = 0;
let OHihatSound = document.querySelector(".OHihatSound");
let CHihat = document.querySelector(".CHihat");
let CHihatCount = 0;
let CHihatSound = document.querySelector(".CHihatSound");
let cymbal = document.querySelector(".cymbal");
let cymbalCount = 0;
let cymbalSound = document.querySelector(".cymbalSound");
let base = document.querySelector(".base");
let baseCount = 0;
let baseSound = document.querySelector(".baseSound");
let clap = document.querySelector(".clap");
let clapCount = 0;
let clapSound = document.querySelector(".clapSound");

//second drumset
let snare1 = document.querySelector(".snare1");
let snareCount1 = 0;
let snareSound1 = document.querySelector(".snareSound1");
let OHihat1 = document.querySelector(".OHihat1");
let OHihatCount1 = 0;
let OHihatSound1 = document.querySelector(".OHihatSound1");
let CHihat1 = document.querySelector(".CHihat1");
let CHihatCount1 = 0;
let CHihatSound1 = document.querySelector(".CHihatSound1");
let cymbal1 = document.querySelector(".cymbal1");
let cymbalCount1 = 0;
let cymbalSound1 = document.querySelector(".cymbalSound1");
let base1 = document.querySelector(".base1");
let baseCount1 = 0;
let baseSound1 = document.querySelector(".baseSound1");
let clap1 = document.querySelector(".clap1");
let clapCount1 = 0;
let clapSound1 = document.querySelector(".clapSound1");
//third drumset
// let snare2 = document.querySelector(".snare2");
// let snareCount2 = 0;
// let snareSound2 = document.querySelector(".snareSound2");
// let OHihat2 = document.querySelector(".OHihat2");
// let OHihatCount2 = 0;

// let CHihat2 = document.querySelector(".CHihat2");
// let CHihatCount2 = 0;

// let cymbal2 = document.querySelector(".cymbal2");
// let cymbalCount2 = 0;

// let base2 = document.querySelector(".base2");
// let baseCount2 = 0;

// let clap2 = document.querySelector(".clap2");
// let clapCount2 = 0;

//the functions
snare.addEventListener("click", function(){
    if(snareCount === 0){
    snare.style.backgroundColor = "black";
    snareCount++;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    snareSound.play();
    snareSound.loop = true;
    }
    else{
        snare.style.backgroundColor = "purple";
        snareCount--;
        snareSound.pause();
        snareSound.currentTime = 0;
        snareSound.loop = false;
    }
});
snare1.addEventListener("click", function(){
    if(snareCount1 === 0){
    snare1.style.backgroundColor = "black";
    snareCount1++;
    snareSound.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    snareSound1.play();
    snareSound1.loop = true;
    }
    else{
        snare1.style.backgroundColor = "red";
        snareCount1--;
        snareSound1.pause();
        snareSound1.currentTime = 0;
        snareSound1.loop = false;
    }
});
// snare2.addEventListener("click", function(){
//     if(snareCount2 === 0){
//     snare2.style.backgroundColor = "black";
//     snareCount2++;
//     snareSound2.play();
//     snareSound2.loop = true;
//     }
//     else{
//         snare2.style.backgroundColor = "green";
//         snareCount2--;
//         snareSound2.pause();
//         snareSound2.loop = false;
//     }
// });
OHihat.addEventListener("click", function(){
    if(OHihatCount === 0){
    OHihat.style.backgroundColor = "black";
    OHihatCount++;
    snareSound1.currentTime = 0;
    snareSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    OHihatSound.play();
    OHihatSound.loop = true;
    }
    else{
        OHihat.style.backgroundColor = "purple";
        OHihatCount--;
        OHihatSound.pause();
        OHihatSound.currentTime = 0;
        OHihatSound.loop = false;
    }
});
OHihat1.addEventListener("click", function(){
    if(OHihatCount1 === 0){
    OHihat1.style.backgroundColor = "black";
    OHihatCount1++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    OHihatSound1.play();
    OHihatSound1.loop = true;
    }
    else{
        OHihat1.style.backgroundColor = "red";
        OHihatCount1--;
        OHihatSound1.pause();
        OHihatSound1.currentTime = 0;
        OHihatSound1.loop = false;
    }
});
// OHihat2.addEventListener("click", function(){
//     if(OHihatCount2 === 0){
//     OHihat2.style.backgroundColor = "black";
//     OHihatCount2++;
//     }
//     else{
//         OHihat2.style.backgroundColor = "green";
//         OHihatCount2--;
//     }
// });
CHihat.addEventListener("click", function(){
    if(CHihatCount === 0){
    CHihat.style.backgroundColor = "black";
    CHihatCount++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    CHihatSound.play();
    CHihatSound.loop = true;
    }
    else{
        CHihat.style.backgroundColor = "purple";
        CHihatCount--;
        CHihatSound.pause();
        CHihatSound.currentTime = 0;
        CHihatSound.loop = false;
    }
});
CHihat1.addEventListener("click", function(){
    if(CHihatCount1 === 0){
    CHihat1.style.backgroundColor = "black";
    CHihatCount1++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    CHihatSound1.play();
    CHihatSound1.loop = true;
    }
    else{
        CHihat1.style.backgroundColor = "red";
        CHihatCount1--;
        CHihatSound1.pause();
        CHihatSound1.currentTime = 0;
        CHihatSound1.loop = false;
    }
});
// CHihat2.addEventListener("click", function(){
//     if(CHihatCount2 === 0){
//     CHihat2.style.backgroundColor = "black";
//     CHihatCount2++;
//     }
//     else{
//         CHihat2.style.backgroundColor = "green";
//         CHihatCount2--;
//     }
// });
cymbal.addEventListener("click", function(){
    if(cymbalCount === 0){
    cymbal.style.backgroundColor = "black";
    cymbalCount++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    cymbalSound.play();
    cymbalSound.loop = true;
    }
    else{
        cymbal.style.backgroundColor = "purple";
        cymbalCount--;
        cymbalSound.pause();
        cymbalSound.currentTime = 0;
        cymbalSound.loop = false;
    }
});
cymbal1.addEventListener("click", function(){
    if(cymbalCount1 === 0){
    cymbal1.style.backgroundColor = "black";
    cymbalCount1++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    cymbalSound1.play();
    cymbalSound1.loop = true;
    }
    else{
        cymbal1.style.backgroundColor = "red";
        cymbalCount1--;
        cymbalSound1.pause();
        cymbalSound1.currentTime = 0;
        cymbalSound1.loop = false;
    }
});
// cymbal2.addEventListener("click", function(){
//     if(cymbalCount2 === 0){
//     cymbal2.style.backgroundColor = "black";
//     cymbalCount2++;
//     }
//     else{
//         cymbal2.style.backgroundColor = "green";
//         cymbalCount2--;
//     }
// });
base.addEventListener("click", function(){
    if(baseCount === 0){
    base.style.backgroundColor = "white";
    baseCount++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    baseSound.play();
    baseSound.loop = true;
    }
    else{
        base.style.backgroundColor = "purple";
        baseCount--;
        baseSound.pause();
        baseSound.currentTime = 0;
        baseSound.loop = false;
    }
});
base1.addEventListener("click", function(){
    if(baseCount1 === 0){
    base1.style.backgroundColor = "white";
    baseCount1++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.currentTime = 0;
    baseSound1.play();
    baseSound1.loop = true;
    }
    else{
        base1.style.backgroundColor = "red";
        baseCount1--;
        baseSound1.pause();
    baseSound1.currentTime = 0;
        baseSound1.loop = false;
    }
});
// base2.addEventListener("click", function(){
//     if(baseCount2 === 0){
//     base2.style.backgroundColor = "white";
//     baseCount2++;
//     }
//     else{
//         base2.style.backgroundColor = "green";
//         baseCount2--;
//     }
// });
clap.addEventListener("click", function(){
    if(clapCount === 0){
    clap.style.backgroundColor = "black";
    clapCount++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound1.currentTime = 0;
    clapSound.play();
    clapSound.loop = true;
    }
    else{
        clap.style.backgroundColor = "purple";
        clapCount--;
        clapSound.pause();
        clapSound.currentTime = 0;
        clapSound.loop = false;
    }
});
clap1.addEventListener("click", function(){
    if(clapCount1 === 0){
    clap1.style.backgroundColor = "black";
    clapCount1++;
    snareSound.currentTime = 0;
    snareSound1.currentTime = 0;
    OHihatSound.currentTime = 0;
    OHihatSound1.currentTime = 0;
    CHihatSound.currentTime = 0;
    CHihatSound1.currentTime = 0;
    cymbalSound.currentTime = 0;
    cymbalSound1.currentTime = 0;
    baseSound.currentTime = 0;
    baseSound1.currentTime = 0;
    clapSound.currentTime = 0;
    clapSound1.play();
    clapSound1.loop = true;
    }
    else{
        clap1.style.backgroundColor = "red";
        clapCount1--;
        clapSound1.pause();
    clapSound1.currentTime = 0;
        clapSound1.loop = false;
    }
});
// clap2.addEventListener("click", function(){
//     if(clapCount2 === 0){
//     clap2.style.backgroundColor = "black";
//     clapCount2++;
//     }
//     else{
//         clap2.style.backgroundColor = "green";
//         clapCount2--;
//     }
// });

