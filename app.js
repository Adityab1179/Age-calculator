let today=new Date();
let date=new Date(document.querySelector(".input").value);
let currDate=today.toLocaleDateString('en-US')
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    date=new Date(document.querySelector(".input").value);
    if(isValidDate(date)){
    let yeardiff=today.getFullYear()-date.getFullYear();
    let monthdiff=today.getMonth()-date.getMonth();
    let datediff=today.getDate()-date.getDate()
    if(monthdiff<0||(monthdiff==0 && today.getDate()<date.getDate())){
        yeardiff--;
    }
    if(monthdiff<0){
        monthdiff=12+monthdiff
    }
    let outputSection=document.querySelector(".output-section")
    outputSection.style.display="flex"
    let output=document.querySelector(".output")
    output.innerHTML=`your age is: ${yeardiff} year ${monthdiff}month and ${datediff}days`
    console.log(`your age  is ${yeardiff} year ${monthdiff} month and ${datediff} days`)
}
else{
    let outputSection=document.querySelector(".output-section")
    outputSection.style.opacity=1;
    let output=document.querySelector(".output")
    output.innerHTML="Enter the Valid date format"
}
})
function isValidDate(dateStr) {
    const dateObj = new Date(dateStr);
    return !isNaN(dateObj.getTime());
}
date.addEventListener("click",function(){
    let outputSection=document.querySelector(".output-section")
    outputSection.style.opacity="0"
})