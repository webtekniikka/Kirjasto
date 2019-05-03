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
        document.getElementById("1").innerHTML = "Loan search";
        document.getElementById("2").innerHTML = "Search for book";
        document.getElementById("3").innerHTML = "Book's title:";
        document.getElementsByName('nimi')[0].placeholder = " Book's title";
        document.getElementById("4").innerHTML = "Author:";
        document.getElementsByName('knimi')[0].placeholder = " Author";
        document.getElementById("5").innerHTML = "Book's ID:";
        document.getElementById("6").innerHTML = "Book's language:";
        document.getElementsByName('kieli')[0].placeholder = " Language";
        document.getElementById("7").innerHTML = "Book's ISBN:";
        document.getElementById("8").innerHTML = "From year:";
        document.getElementsByName('vuodesta')[0].placeholder = "  Year (4 dig)";
        document.getElementById("9").innerHTML = "To year:";
        document.getElementsByName('vuoteen')[0].placeholder = "  Year (4 dig)";
        document.getElementById("10").innerHTML = "Eräpäivä:";
        document.getElementById("11").innerHTML = "Submit";
        localStorage.setItem("abr", "ENG");
        let x=localStorage.getItem("abr");
    }
    else if(x === "JPN"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Kirjahaku";
        document.getElementById("2").innerHTML = "Hae kirja";
        document.getElementById("3").innerHTML = "Teoksen nimi:";
        document.getElementsByName('nimi')[0].placeholder = " Teoksen nimi";
        document.getElementById("4").innerHTML = "Kirjailijan nimi:";
        document.getElementsByName('knimi')[0].placeholder = " Kirjailijan nimi";
        document.getElementById("5").innerHTML = "Teoksen ID:";
        document.getElementById("6").innerHTML = "Teoksen kieli:";
        document.getElementsByName('kieli')[0].placeholder = " Kieli";
        document.getElementById("7").innerHTML = "Teoksen ISBN:";
        document.getElementById("8").innerHTML = "Vuodesta:";
        document.getElementsByName('vuodesta')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("9").innerHTML = "Vuoteen:";
        document.getElementsByName('vuoteen')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("10").innerHTML = "Eräpäivä:";
        document.getElementById("11").innerHTML = "Lähetä";
        localStorage.setItem("abr", "JPG");
        let x=localStorage.getItem("abr");
    }
    else if(x === "RUS"){
        document.getElementById("i").innerHTML = "Поиск книги";
        document.getElementById("ii").innerHTML = "Поиск выдач";
        document.getElementById("iii").innerHTML = "Выдачи";
        document.getElementById("iv").innerHTML = "Фонд";
        document.getElementById("1").innerHTML = "Поиск выдач";
        document.getElementById("2").innerHTML = "Найти книгу";
        document.getElementById("3").innerHTML = "Название:";
        document.getElementsByName('nimi')[0].placeholder = " Название";
        document.getElementById("4").innerHTML = "Автор:";
        document.getElementsByName('knimi')[0].placeholder = " Автор";
        document.getElementById("5").innerHTML = "ID книги:";
        document.getElementById("6").innerHTML = "Язык:";
        document.getElementsByName('kieli')[0].placeholder = " Язык";
        document.getElementById("7").innerHTML = "ISBN книги:";
        document.getElementById("8").innerHTML = "С года:";
        document.getElementsByName('vuodesta')[0].placeholder = "  Год (4 dig)";
        document.getElementById("9").innerHTML = "По год:";
        document.getElementsByName('vuoteen')[0].placeholder = "  Год (4 dig)";
        document.getElementById("10").innerHTML = "Eräpäivä:";
        document.getElementById("11").innerHTML = "Отправить";
        localStorage.setItem("abr", "RUS");
        let x=localStorage.getItem("abr");
    }
    else if(x === "FIN"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Lainahaku";
        document.getElementById("2").innerHTML = "Hae kirja";
        document.getElementById("3").innerHTML = "Teoksen nimi:";
        document.getElementsByName('nimi')[0].placeholder = " Teoksen nimi";
        document.getElementById("4").innerHTML = "Kirjailijan nimi:";
        document.getElementsByName('knimi')[0].placeholder = " Kirjailijan nimi";
        document.getElementById("5").innerHTML = "Teoksen ID:";
        document.getElementById("6").innerHTML = "Teoksen kieli:";
        document.getElementsByName('kieli')[0].placeholder = " Kieli";
        document.getElementById("7").innerHTML = "Teoksen ISBN:";
        document.getElementById("8").innerHTML = "Vuodesta:";
        document.getElementsByName('vuodesta')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("9").innerHTML = "Vuoteen:";
        document.getElementsByName('vuoteen')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("10").innerHTML = "Eräpäivä:";
        document.getElementById("11").innerHTML = "Lähetä";
        localStorage.setItem("abr", "FIN");
        let x=localStorage.getItem("abr");
    }
    else if(x === "SWE"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("1").innerHTML = "Kirjahaku";
        document.getElementById("2").innerHTML = "Hae kirja";
        document.getElementById("3").innerHTML = "Teoksen nimi:";
        document.getElementsByName('nimi')[0].placeholder = " Teoksen nimi";
        document.getElementById("4").innerHTML = "Kirjailijan nimi:";
        document.getElementsByName('knimi')[0].placeholder = " Kirjailijan nimi";
        document.getElementById("5").innerHTML = "Teoksen ID:";
        document.getElementById("6").innerHTML = "Teoksen kieli:";
        document.getElementsByName('kieli')[0].placeholder = " Kieli";
        document.getElementById("7").innerHTML = "Teoksen ISBN:";
        document.getElementById("8").innerHTML = "Vuodesta:";
        document.getElementsByName('vuodesta')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("9").innerHTML = "Vuoteen:";
        document.getElementsByName('vuoteen')[0].placeholder = "  Vuosi (4 dig)";
        document.getElementById("10").innerHTML = "Eräpäivä:";
        document.getElementById("11").innerHTML = "Lähetä";
        localStorage.setItem("abr", "SWE");
        let x=localStorage.getItem("abr");
    }
}