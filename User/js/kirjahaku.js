function new_language() {
    let x = document.getElementById("select_language").value;
    if(x === "ENG"){
        document.getElementById("i").innerHTML = "Book search";
        document.getElementById("ii").innerHTML = "Loan search";
        document.getElementById("iii").innerHTML = "Loans";
        document.getElementById("iv").innerHTML = "Collection";
        document.getElementById("1").innerHTML = "Book search";
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
        document.getElementById("10").innerHTML = "Submit";
    }
    else if(x === "JPN"){
        document.getElementById("demo").innerHTML = "こんにちは!";
    }
    else if(x === "RUS"){
        document.getElementById("i").innerHTML = "Поиск книги";
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
        document.getElementById("10").innerHTML = "Lähetä";
    }
    else if(x === "FIN"){
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
        document.getElementById("10").innerHTML = "Lähetä";
    }
    else if(x === "SWE"){
        document.getElementById("demo").innerHTML = "God dag!";
    }
}