function recommend(){
    var selectItem = document.getElementById('Location').value;
    localStorage.setItem('ddvalue',selectItem)

    if(selectItem=="Lucknow"){
        document.getElementById('type').innerHTML="City Of Nawabs"
    }else if(selectItem=="Mumbai"){
        document.getElementById('type').innerHTML="City Of Dreams"
    }else if(selectItem=="Goa"){
        document.getElementById('type').innerHTML="Pearl of the Orient"
    }else if(selectItem=="Pune"){
        document.getElementById('type').innerHTML="The Queen of Deccan"
    }else if(selectItem=="Delhi"){
        document.getElementById('type').innerHTML="Heart of Nation"
    }

    document.getElementById('recomend').style.display = "block";
    document.getElementById('locality').innerHTML = localStorage.getItem("ddvalue");
    return true;
}

function disappear(){
    document.getElementById('recomend').style.display = 'none'
}