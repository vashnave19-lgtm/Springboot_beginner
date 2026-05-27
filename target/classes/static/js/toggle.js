// var userArray=[{"name":"John Doe","gender":"male","img":"img/john.png"},
//     {"name":"Jane Doe","gender":"female","img":"img/jane.png"}
// ];
// var currentIndex=1; 
// function toggleCard(){
//     currentIndex=1-currentIndex;
//     var nextUser=userArray[currentIndex];
//     // document.getElementById("userName").innerText=nextUser.name;
//     // document.getElementById("userGender").innerText=nextUser.gender;
//     // document.getElementById("userImage").src=nextUser.img;
//     displayUser(nextUser);
// }


// function displayUser(user){
//     // console.log(user);
//     document.getElementById("userName").innerText=user.name;
//     document.getElementById("userGender").innerText=user.gender;
//     document.getElementById("userImage").src=user.img;
// }



console.log("Hello world");
var users=[
    {"name": "John Doe","gender":"male","img":"img/john.png"},
    {"name": "Jane Doe","gender":"female","img":"img/jane.png"}
];
var currentUser=0;
function toggleCard(){
    currentUser=(currentUser+1)%2;
    var user=users[currentUser];
    document.getElementById("userName").innerText=user.name;
    document.getElementById("userGender").innerText=user.gender;
    document.getElementById("userImage").src=user.img;    
}
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});