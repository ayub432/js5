let user = {
    name: "",   
    id: "",         
    password: "", 
};

user.name = prompt("Ismingizni kiriting");
user.id = prompt("Space ID'ingizni kiriting");
user.password = prompt("Space parolingizni kiriting");

console.log("name: " + user.name + "\nid: " + user.id + "\nPassword: " + user.password);