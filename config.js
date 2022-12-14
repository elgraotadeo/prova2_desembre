function name(){
    document.getElementById('name').style.color="blue";
}

function birth_doble(){
    document.getElementById('birth').style.color="lightpink";
}

function birth(){
    var name = document.getElementById('box_name').value
    var address = document.getElementById('box_address').value
    var birth = document.getElementById('box_birth').value
    alert("benvingut"+" "+name+" "+address+" "+birth)
}