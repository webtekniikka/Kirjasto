// KIELET
function new_language() {
    x = document.getElementById("select_language").value;
    if(x === "JPN"){
        document.getElementById("body_of_page").style.fontFamily = "Meiryo, sans-serif";
        document.getElementById("body_of_page").style.fontSize = "16px";
        // korjaus navigaatioon
        document.getElementById("navigation").style.height = "53px";
    }
    else{
        document.getElementById("body_of_page").style.fontFamily = "initial";
        document.getElementById("body_of_page").style.fontSize = "19px";
        // korjaus navigaatioon
        document.getElementById("navigation").style.height = "initial";
    }
    language();
}

// kielen säilyminen siirtyessä toiselle sivulle
x = localStorage.getItem("abbreviation");
if (x === "ENG"){
    document.getElementsByName("ENG")[0].selected = "true";
    language();
}
if (x === "JPN"){
    document.getElementsByName("JPN")[0].selected = "true";
    document.getElementById("body_of_page").style.fontFamily = "Meiryo, sans-serif";
    document.getElementById("body_of_page").style.fontSize = "16px";
    // korjaus navigaatioon
    document.getElementById("navigation").style.height = "53px";
    language();
}
if (x === "RUS"){
    document.getElementsByName("RUS")[0].selected = "true";
    language();
}
if (x === "FIN"){
    document.getElementsByName("FIN")[0].selected = "true";
    language();
}
if (x === "SWE"){
    document.getElementsByName("SWE")[0].selected = "true";
    language();
}

// käännökset
function language() {
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
        document.getElementById("10").value = "Submit";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "ENG");
        let x = localStorage.getItem("abbreviation");
    }
    else if(x === "JPN"){
        document.getElementById("i").innerHTML = "書籍検索";
        document.getElementById("ii").innerHTML = "貸出検索";
        document.getElementById("iii").innerHTML = "貸出";
        document.getElementById("iv").innerHTML = "本の収集";
        document.getElementById("1").innerHTML = "書籍検索";
        document.getElementById("2").innerHTML = "本を探す";
        document.getElementById("3").innerHTML = "書籍名:";
        document.getElementsByName('nimi')[0].placeholder = " 書籍名";
        document.getElementById("4").innerHTML = "著者名:";
        document.getElementsByName('knimi')[0].placeholder = " 著者名";
        document.getElementById("5").innerHTML = "本のID:";
        document.getElementById("6").innerHTML = "言語:";
        document.getElementsByName('kieli')[0].placeholder = " 言語";
        document.getElementById("7").innerHTML = "本のISBN:";
        document.getElementById("8").innerHTML = "年から:";
        document.getElementsByName('vuodesta')[0].placeholder = " 年 (4 dig)";
        document.getElementById("9").innerHTML = "年まで:";
        document.getElementsByName('vuoteen')[0].placeholder = " 年 (4 dig)";
        document.getElementById("10").value = "送信";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "JPN");
        let x = localStorage.getItem("abbreviation");
    }
    else if(x === "RUS"){
        document.getElementById("i").innerHTML = "Поиск книги";
        document.getElementById("ii").innerHTML = "Поиск выдач";
        document.getElementById("iii").innerHTML = "Выдачи";
        document.getElementById("iv").innerHTML = "Фонд";
        document.getElementById("1").innerHTML = "Поиск книги";
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
        document.getElementsByName('vuodesta')[0].placeholder = " Год (4 dig)";
        document.getElementById("9").innerHTML = "По год:";
        document.getElementsByName('vuoteen')[0].placeholder = " Год (4 dig)";
        document.getElementById("10").value = "Отправить";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "RUS");
        let x = localStorage.getItem("abbreviation");
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
        document.getElementById("10").value = "Lähetä";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "FIN");
        let x = localStorage.getItem("abbreviation");
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
        document.getElementById("10").value = "Lähetä";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "SWE");
        let x = localStorage.getItem("abbreviation");
    }
}


// TEEMAT
function new_theme() {
    y = document.getElementById("select_theme").value;
    theme();
}

y = localStorage.getItem("number");
if (y === "t1"){
    document.getElementsByName("t1")[0].selected = "true";
    theme();
}
if (y === "t2"){
    document.getElementsByName("t2")[0].selected = "true";
    theme();
}
if (y === "t3"){
    document.getElementsByName("t3")[0].selected = "true";
    theme();
}
function  theme() {
    if(y === "t1"){
        document.getElementById("body_of_page").style.backgroundColor = "yellow";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#ff8000";
        document.getElementsByTagName("h1")[0].style.color = "black";
        document.getElementsByTagName("legend")[0].style.color = "black";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "black";
        }
        localStorage.setItem("number", "t1");
        let y = localStorage.getItem("number");
    }
    else if(y === "t2"){
        document.getElementById("body_of_page").style.backgroundColor = "white";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#d3d3d3";
        document.getElementsByTagName("h1")[0].style.color = "black";
        document.getElementsByTagName("legend")[0].style.color = "black";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "black";
        }
        localStorage.setItem("number", "t2");
        let y = localStorage.getItem("number");
    }
    else if(y === "t3"){
        document.getElementById("body_of_page").style.backgroundColor = "black";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#404040";
        document.getElementsByTagName("h1")[0].style.color = "white";
        document.getElementsByTagName("legend")[0].style.color = "white";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "white";
        }
        localStorage.setItem("number", "t3");
        let y = localStorage.getItem("number");
    }
}

// HAUT
function hae_kirja(){

    // Luodaan url
    let url = "http://localhost:80/Kirjasto/Server/index.php?";

    let nimi = document.getElementsByName("nimi")[0].value;
    url += "nimi="+nimi;
    let knimi = document.getElementsByName("knimi")[0].value;
    url += "&knimi=" + knimi;
    let id = document.getElementsByName("id")[0].value;
    url += "&id=" + id;
    let kieli = document.getElementsByName("kieli")[0].value;
    url += "&kieli="+kieli;
    let isbn = document.getElementsByName("isbn")[0].value;
    url += "&isbn="+isbn;
    let vuodesta = document.getElementsByName("vuodesta")[0].value;
    url += "&vuodesta="+vuodesta;
    let vuoteen = document.getElementsByName("vuoteen")[0].value;
    url += "&vuoteen="+vuoteen;

    // tehdään XMLrequest ja lähetetään se
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status === 200) {
            document.getElementById("hakutulos").innerHTML = xml.responseText;
        }
    };
    xml.open("GET", url, true);
    xml.send();

}