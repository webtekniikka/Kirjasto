i=0;
function new_language() {
    x = document.getElementById("select_language").value;
    if(i===0){
        i = 1;
    }
    else {
        language();
        i = 0;
    }
}

x=localStorage.getItem("abr");
if (x==="ENG"){
    language();
}
if (x==="JPN"){
    language();
}
if (x==="RUS"){
    language();
}
if (x==="FIN"){
    language();
}
if (x==="SWE"){
    language();
}

function language() {
    //let x = document.getElementById("select_language").value;
    if(x === "ENG"){
        document.getElementById("i").innerHTML = "Book search";
        document.getElementById("ii").innerHTML = "Loan search";
        document.getElementById("iii").innerHTML = "Loans";
        document.getElementById("iv").innerHTML = "Collection";
        document.getElementById("1").innerHTML = "Loans";
        document.getElementById("2").innerHTML = "Loan";
        document.getElementById("3").innerHTML = "Book's ID:";
        document.getElementById("4").innerHTML = "Customer first name:";
        document.getElementsByName('etunimi')[0].placeholder = " First name";
        document.getElementById("5").innerHTML = "Customer second name:";
        document.getElementsByName('sukunimi')[0].placeholder = " Second name";
        document.getElementById("6").innerHTML = "The due date:";
        document.getElementById("7").innerHTML = "Submit";
        document.getElementById("8").innerHTML = "Return";
        document.getElementById("9").innerHTML = "Book's ID:";
        document.getElementById("10").innerHTML = "Submit";
        localStorage.setItem("abr", "ENG");
        let x=localStorage.getItem("abr");
    }
    else if(x === "JPN"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Lainat";
        document.getElementById("2").innerHTML = "Laina";
        document.getElementById("3").innerHTML = "Teoksen ID:";
        document.getElementById("4").innerHTML = "Asiakkaan etunimi:";
        document.getElementsByName('etunimi')[0].placeholder = " Etunimi";
        document.getElementById("5").innerHTML = "Asiakkaan sukunimi:";
        document.getElementsByName('sukunimi')[0].placeholder = " Sukuunimi";
        document.getElementById("6").innerHTML = "Eräpäivä:";
        document.getElementById("7").innerHTML = "Lähetä";
        document.getElementById("8").innerHTML = "Palauta";
        document.getElementById("9").innerHTML = "Teoksen ID:";
        document.getElementById("10").innerHTML = "Lähetä";
        localStorage.setItem("abr", "JPN");
        let x=localStorage.getItem("abr");
    }
    else if(x === "RUS"){
        document.getElementById("i").innerHTML = "Поиск книги";
        document.getElementById("ii").innerHTML = "Поиск выдач";
        document.getElementById("iii").innerHTML = "Выдачи";
        document.getElementById("iv").innerHTML = "Фонд";
        document.getElementById("1").innerHTML = "Выдачи";
        document.getElementById("2").innerHTML = "Выдать";
        document.getElementById("3").innerHTML = "ID книги:";
        document.getElementById("4").innerHTML = "Имя абонента:";
        document.getElementsByName('etunimi')[0].placeholder = " Имя";
        document.getElementById("5").innerHTML = "Фамилия абонента:";
        document.getElementsByName('sukunimi')[0].placeholder = " Фамилия";
        document.getElementById("6").innerHTML = "Выдано до:";
        document.getElementById("7").innerHTML = "Отправить:";
        document.getElementById("8").innerHTML = "Вернуть";
        document.getElementById("9").innerHTML = "ID книги:";
        document.getElementById("10").innerHTML = "Отправить";
        localStorage.setItem("abr", "RUS");
        let x=localStorage.getItem("abr");
    }
    else if(x === "FIN"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Lainat";
        document.getElementById("2").innerHTML = "Laina";
        document.getElementById("3").innerHTML = "Teoksen ID:";
        document.getElementById("4").innerHTML = "Asiakkaan etunimi:";
        document.getElementsByName('etunimi')[0].placeholder = " Etunimi";
        document.getElementById("5").innerHTML = "Asiakkaan sukunimi:";
        document.getElementsByName('sukunimi')[0].placeholder = " Sukuunimi";
        document.getElementById("6").innerHTML = "Eräpäivä:";
        document.getElementById("7").innerHTML = "Lähetä";
        document.getElementById("8").innerHTML = "Palauta";
        document.getElementById("9").innerHTML = "Teoksen ID:";
        document.getElementById("10").innerHTML = "Lähetä";
        localStorage.setItem("abr", "FIN");
        let x=localStorage.getItem("abr");
    }
    else if(x === "SWE"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Lainat";
        document.getElementById("2").innerHTML = "Laina";
        document.getElementById("3").innerHTML = "Teoksen ID:";
        document.getElementById("4").innerHTML = "Asiakkaan etunimi:";
        document.getElementsByName('etunimi')[0].placeholder = " Etunimi";
        document.getElementById("5").innerHTML = "Asiakkaan sukunimi:";
        document.getElementsByName('sukunimi')[0].placeholder = " Sukuunimi";
        document.getElementById("6").innerHTML = "Eräpäivä:";
        document.getElementById("7").innerHTML = "Lähetä";
        document.getElementById("8").innerHTML = "Palauta";
        document.getElementById("9").innerHTML = "Teoksen ID:";
        document.getElementById("10").innerHTML = "Lähetä";
        localStorage.setItem("abr", "SWE");
        let x=localStorage.getItem("abr");
    }
}