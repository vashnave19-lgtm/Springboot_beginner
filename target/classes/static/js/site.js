console.log("Hello world");
var users=[
    {name: "Alice","gender":"male","img":"img/john.png"},
    {name: "Bob","gender":"female","img":"img/jane.png"}
];
var currentUser=0;
function toggleCard(){
    currentUser=(currentUser+1)%2;
    var user=users[currentUser];
    document.getElementById("name").innerText=user.name;
    document.getElementById("gender").innerText=user.gender;
    document.getElementById("img").src=user.img;    
}
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
