function new_language() {
    let x = document.getElementById("select_language").value;
    if(x === "ENG"){
        document.getElementById("demo").innerHTML = "Hello!";
    }
    else if(x === "JPN"){
        document.getElementById("demo").innerHTML = "こんにちは!";
    }
    else if(x === "RUS"){
        document.getElementById("demo").innerHTML = "Добрый день!";
    }
    else if(x === "FIN"){
        document.getElementById("demo").innerHTML = "Hyvää päivää!";
    }
    else if(x === "SWE"){
        document.getElementById("demo").innerHTML = "God dag!";
    }
}
