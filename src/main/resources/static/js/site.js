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
if (button) {
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
}
