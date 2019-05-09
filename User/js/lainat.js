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
        document.getElementById("v").innerHTML = "Theme 1";
        document.getElementById("vi").innerHTML = "Theme 2";
        document.getElementById("vii").innerHTML = "Theme 3";
        document.getElementById("1").innerHTML = "Loans";
        document.getElementById("2").innerHTML = "Loan";
        document.getElementById("3").innerHTML = "Book's ID:";
        document.getElementById("4").innerHTML = "Customer first name:";
        document.getElementsByName('etunimi')[0].placeholder = " First name";
        document.getElementById("5").innerHTML = "Customer last name:";
        document.getElementsByName('sukunimi')[0].placeholder = " Last name";
        document.getElementById("6").innerHTML = "The due date:";
        document.getElementById("7").value = "Submit";
        document.getElementById("8").innerHTML = "Return";
        document.getElementById("9").innerHTML = "Book's ID:";
        document.getElementById("10").value = "Submit";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "ENG");
        //let x = localStorage.getItem("abbreviation");
    }
    else if(x === "JPN"){
        document.getElementById("i").innerHTML = "書籍検索";
        document.getElementById("ii").innerHTML = "貸出検索";
        document.getElementById("iii").innerHTML = "貸出";
        document.getElementById("iv").innerHTML = "本の収集";
        document.getElementById("v").innerHTML = "テーマ 1";
        document.getElementById("vi").innerHTML = "テーマ 2";
        document.getElementById("vii").innerHTML = "テーマ 3";
        document.getElementById("1").innerHTML = "貸出";
        document.getElementById("2").innerHTML = "借り";
        document.getElementById("3").innerHTML = "本のID:";
        document.getElementById("4").innerHTML = "客の名前:";
        document.getElementsByName('etunimi')[0].placeholder = " 名前";
        document.getElementById("5").innerHTML = "客の苗字:";
        document.getElementsByName('sukunimi')[0].placeholder = " 苗字";
        document.getElementById("6").innerHTML = "返す日:";
        document.getElementById("7").value = "送信";
        document.getElementById("8").innerHTML = "返す";
        document.getElementById("9").innerHTML = "本のID:";
        document.getElementById("10").value = "送信";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "JPN");
        //let x = localStorage.getItem("abbreviation");
    }
    else if(x === "RUS"){
        document.getElementById("i").innerHTML = "Поиск книги";
        document.getElementById("ii").innerHTML = "Поиск выдач";
        document.getElementById("iii").innerHTML = "Выдачи";
        document.getElementById("iv").innerHTML = "Фонд";
        document.getElementById("v").innerHTML = "Тема 1";
        document.getElementById("vi").innerHTML = "Тема 2";
        document.getElementById("vii").innerHTML = "Тема 3";
        document.getElementById("1").innerHTML = "Выдачи";
        document.getElementById("2").innerHTML = "Выдать";
        document.getElementById("3").innerHTML = "ID книги:";
        document.getElementById("4").innerHTML = "Имя абонента:";
        document.getElementsByName('etunimi')[0].placeholder = " Имя";
        document.getElementById("5").innerHTML = "Фамилия абонента:";
        document.getElementsByName('sukunimi')[0].placeholder = " Фамилия";
        document.getElementById("6").innerHTML = "Выдано до:";
        document.getElementById("7").value = "Отправить:";
        document.getElementById("8").innerHTML = "Вернуть";
        document.getElementById("9").innerHTML = "ID книги:";
        document.getElementById("10").value = "Отправить";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "RUS");
        //let x = localStorage.getItem("abbreviation");
    }
    else if(x === "FIN"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("v").innerHTML = "Teema 1";
        document.getElementById("vi").innerHTML = "Teema 2";
        document.getElementById("vii").innerHTML = "Teema 3";
        document.getElementById("1").innerHTML = "Lainat";
        document.getElementById("2").innerHTML = "Laina";
        document.getElementById("3").innerHTML = "Teoksen ID:";
        document.getElementById("4").innerHTML = "Asiakkaan etunimi:";
        document.getElementsByName('etunimi')[0].placeholder = " Etunimi";
        document.getElementById("5").innerHTML = "Asiakkaan sukunimi:";
        document.getElementsByName('sukunimi')[0].placeholder = " Sukuunimi";
        document.getElementById("6").innerHTML = "Eräpäivä:";
        document.getElementById("7").value = "Lähetä";
        document.getElementById("8").innerHTML = "Palauta";
        document.getElementById("9").innerHTML = "Teoksen ID:";
        document.getElementById("10").value = "Lähetä";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "FIN");
        //let x = localStorage.getItem("abbreviation");
    }
    else if(x === "SWE"){
        document.getElementById("i").innerHTML = "Kirjahaku";
        document.getElementById("ii").innerHTML = "Lainahaku";
        document.getElementById("iii").innerHTML = "Lainat";
        document.getElementById("iv").innerHTML = "Kokoelma";
        document.getElementById("v").innerHTML = "Teema 1";
        document.getElementById("vi").innerHTML = "Teema 2";
        document.getElementById("vii").innerHTML = "Teema 3";
        document.getElementById("1").innerHTML = "Lainat";
        document.getElementById("2").innerHTML = "Laina";
        document.getElementById("3").innerHTML = "Teoksen ID:";
        document.getElementById("4").innerHTML = "Asiakkaan etunimi:";
        document.getElementsByName('etunimi')[0].placeholder = " Etunimi";
        document.getElementById("5").innerHTML = "Asiakkaan sukunimi:";
        document.getElementsByName('sukunimi')[0].placeholder = " Sukuunimi";
        document.getElementById("6").innerHTML = "Eräpäivä:";
        document.getElementById("7").value = "Lähetä";
        document.getElementById("8").innerHTML = "Palauta";
        document.getElementById("9").innerHTML = "Teoksen ID:";
        document.getElementById("10").value = "Lähetä";
        // kielen säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("abbreviation", "SWE");
        //let x = localStorage.getItem("abbreviation");
    }
}

// TEEMAT
function new_theme() {
    y = document.getElementById("select_theme").value;
    theme();
}

// teeman säilyminen siirtyessä toiselle sivulle
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

// teemat
function  theme() {
    if(y === "t1"){
        document.getElementById("body_of_page").style.backgroundColor = "yellow";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#ff8000";
        document.getElementsByTagName("h1")[0].style.color = "black";
        document.getElementsByTagName("legend")[0].style.color = "black";
        document.getElementsByTagName("legend")[1].style.color = "black";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "black";
        }
        document.getElementById("hakutulos").style.color = "black";//uusi
        // teeman säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("number", "t1");
        //let y = localStorage.getItem("number");
    }
    else if(y === "t2"){
        document.getElementById("body_of_page").style.backgroundColor = "white";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#d3d3d3";
        document.getElementsByTagName("h1")[0].style.color = "black";
        document.getElementsByTagName("legend")[0].style.color = "black";
        document.getElementsByTagName("legend")[1].style.color = "black";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "black";
        }
        document.getElementById("hakutulos").style.color = "black";//uusi
        // teeman säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("number", "t2");
        //let y = localStorage.getItem("number");
    }
    else if(y === "t3"){
        document.getElementById("body_of_page").style.backgroundColor = "black";
        document.getElementsByTagName("ul")[0].style.backgroundColor = "#404040";
        document.getElementsByTagName("h1")[0].style.color = "white";
        document.getElementsByTagName("legend")[0].style.color = "white";
        document.getElementsByTagName("legend")[1].style.color = "white";
        let p_elements = document.getElementsByTagName("p");
        let i;
        for (i = 0; i < p_elements.length; i++) {
            p_elements[i].style.color = "white";
        }
        document.getElementById("hakutulos").style.color = "white";//uusi
        // teeman säilyminen siirtyessä toiselle sivulle
        localStorage.setItem("number", "t3");
        //let y = localStorage.getItem("number");
    }
}

// Funktiot

// luodaan uusi lainatapahtuma tietokantaan
function laina(){

    let url = "http://localhost:80/Kirjasto/Server/laina/luo";

    // haetaan luotavan lainan tiedot
    let id = document.getElementsByName("id")[0].value;
    let etunimi = document.getElementsByName("etunimi")[0].value;
    let sukunimi = document.getElementsByName("sukunimi")[0].value;
    let erapaiva = document.getElementsByName("erapaiva")[0].value;

    // luodaan päivämäärä
    let paiva = new Date();
    let dd = paiva.getDate();
    let mm = paiva.getMonth()+1;
    let yyyy = paiva.getFullYear();

    if (dd<10) dd='0'+dd;
    if (mm<10) mm='0'+mm;

    let paivamaara = yyyy+"-"+mm+"-"+dd;

    let laina = {
        "id" : id,
        "etunimi" : etunimi,
        "sukunimi" : sukunimi,
        "paivamaara" : paivamaara,
        "erapaiva" : erapaiva
    };

    let data = JSON.stringify(laina);
    console.log(data);

    // tehdään XMLrequest ja lähetetään se
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status === 200) {
            alert(xml.responseText);
        }
    };
    xml.open("POST", url, true);
    xml.setRequestHeader("Content-Type", "application/json");
    xml.send(data);

}

// Palautetaan kirja
function palauta(){

    // Luodaan url

    let url = "http://localhost:80/Kirjasto/Server/laina/palauta/";

    let id = document.getElementsByName("id1")[0].value;
    let string = {"id" : id};
    let data = JSON.stringify(string);
    console.log(data);

    // tehdään XMLrequest ja lähetetään se
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status === 200) {
            alert(xml.responseText);
        }
    };

    xml.open("PUT", url, true);

    xml.setRequestHeader("Content-Type", "application/json");
    xml.send(data);
}