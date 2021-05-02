var studentNames=[];

function submitNames() {
var name1=document.getElementById("input1").value;
var name2=document.getElementById("input2").value;
var name3=document.getElementById("input3").value;
var name4=document.getElementById("input4").value;
studentNames.push(name1);
studentNames.push(name2);
studentNames.push(name3);
studentNames.push(name4);
console.log (studentNames);
document.getElementById("displayNames").innerHTML=studentNames;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sortNames() {
    studentNames.sort();
    console.log(studentNames);
    document.getElementById("displayNames").innerHTML=studentNames;
}