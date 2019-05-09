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
        document.getElementById("1").innerHTML = "Loan search";
        document.getElementById("2").innerHTML = "Search for loan";
        document.getElementById("3").innerHTML = "Book's title:";
        document.getElementsByName('nimi')[0].placeholder = " Book's title";
        document.getElementById("4").innerHTML = "Author:";
        document.getElementsByName('knimi')[0].placeholder = " Author";
        document.getElementById("5").innerHTML = "Book's ID:";
        document.getElementById("6").innerHTML = "Book's language:";
        document.getElementsByName('kieli')[0].placeholder = " Language";
        document.getElementById("7").innerHTML = "Book's ISBN:";
        document.getElementById("8").innerHTML = "Published:";
        document.getElementsByName('vuosi')[0].placeholder = " Year (4 dig)";
        document.getElementById("9").innerHTML = "The due date:";
        document.getElementById("10").value = "Submit";
        document.getElementById("loanhistory_legend").innerHTML = "Search for loan history";
        document.getElementById("11").value = "Loan history";
        document.getElementById("loan_search_legend").innerHTML = "Results";
        document.getElementById("caption").innerHTML = "RESULTS";
        //document.getElementById("12").innerHTML = "ID";
        document.getElementById("13").innerHTML = "Book's title";
        document.getElementById("14").innerHTML = "First name";
        document.getElementById("15").innerHTML = "Last name";
        document.getElementById("16").innerHTML = "Date";
        document.getElementById("17").innerHTML = "The due date";
        document.getElementById("18").innerHTML = "Returned";
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
        document.getElementById("1").innerHTML = "貸出検索";
        document.getElementById("2").innerHTML = "貸出を探す";
        document.getElementById("3").innerHTML = "書籍名:";
        document.getElementsByName('nimi')[0].placeholder = " 書籍名";
        document.getElementById("4").innerHTML = "著者名:";
        document.getElementsByName('knimi')[0].placeholder = " 著者名";
        document.getElementById("5").innerHTML = "本のID:";
        document.getElementById("6").innerHTML = "言語:";
        document.getElementsByName('kieli')[0].placeholder = " 言語";
        document.getElementById("7").innerHTML = "本のISBN:";
        document.getElementById("8").innerHTML = "出版年:";
        document.getElementsByName('vuosi')[0].placeholder = " 年 (4 dig)";
        document.getElementById("9").innerHTML = "返す日:";
        document.getElementById("10").value = "送信";
        document.getElementById("loanhistory_legend").innerHTML = "貸出記を探す";
        document.getElementById("11").value = "貸出記";
        document.getElementById("loan_search_legend").innerHTML = "結果";
        document.getElementById("caption").innerHTML = "結果";
        //document.getElementById("12").innerHTML = "ID";
        document.getElementById("13").innerHTML = "書籍名";
        document.getElementById("14").innerHTML = "名前";
        document.getElementById("15").innerHTML = "苗字";
        document.getElementById("16").innerHTML = "年月日";
        document.getElementById("17").innerHTML = "返す日";
        document.getElementById("18").innerHTML = "返された";
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
        document.getElementById("1").innerHTML = "Поиск выдач";
        document.getElementById("2").innerHTML = "Найти выдачу";
        document.getElementById("3").innerHTML = "Название:";
        document.getElementsByName('nimi')[0].placeholder = " Название";
        document.getElementById("4").innerHTML = "Автор:";
        document.getElementsByName('knimi')[0].placeholder = " Автор";
        document.getElementById("5").innerHTML = "ID книги:";
        document.getElementById("6").innerHTML = "Язык:";
        document.getElementsByName('kieli')[0].placeholder = " Язык";
        document.getElementById("7").innerHTML = "ISBN книги:";
        document.getElementById("8").innerHTML = "Год издания:";
        document.getElementsByName('vuosi')[0].placeholder = " Год (4 dig)";
        document.getElementById("9").innerHTML = "Выдано до:";
        document.getElementById("10").value = "Отправить";
        document.getElementById("loanhistory_legend").innerHTML = "Поиск истории выдач";
        document.getElementById("11").value = "История выдач";
        document.getElementById("loan_search_legend").innerHTML = "Результаты поиска";
        document.getElementById("caption").innerHTML = "РЕЗУЛЬТАТЫ ПОИСКА";
        //document.getElementById("12").innerHTML = "ID";
        document.getElementById("13").innerHTML = "Название";
        document.getElementById("14").innerHTML = "Имя";
        document.getElementById("15").innerHTML = "Фамилия ";
        document.getElementById("16").innerHTML = "Дата";
        document.getElementById("17").innerHTML = "Выдано до";
        document.getElementById("18").innerHTML = "Возвращено";
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
        document.getElementById("1").innerHTML = "Lainahaku";
        document.getElementById("2").innerHTML = "Hae laina";
        document.getElementById("3").innerHTML = "Teoksen nimi:";
        document.getElementsByName('nimi')[0].placeholder = " Teoksen nimi";
        document.getElementById("4").innerHTML = "Kirjailijan nimi:";
        document.getElementsByName('knimi')[0].placeholder = " Kirjailijan nimi";
        document.getElementById("5").innerHTML = "Teoksen ID:";
        document.getElementById("6").innerHTML = "Teoksen kieli:";
        document.getElementsByName('kieli')[0].placeholder = " Kieli";
        document.getElementById("7").innerHTML = "Teoksen ISBN:";
        document.getElementById("8").innerHTML = "Julkaisuvuosi:";
        document.getElementsByName('vuosi')[0].placeholder = " Vuosi (4 dig)";
        document.getElementById("9").innerHTML = "Eräpäivä:";
        document.getElementById("10").value = "Lähetä";
        document.getElementById("loanhistory_legend").innerHTML = "Hae lainahistoria";
        document.getElementById("11").value = "Lainahistoria";
        document.getElementById("loan_search_legend").innerHTML = "Hakutulokset";
        document.getElementById("caption").innerHTML = "HAKUTULOKSET";
        //document.getElementById("12").innerHTML = "ID";
        document.getElementById("13").innerHTML = "Teoksen nimi";
        document.getElementById("14").innerHTML = "Etunimi";
        document.getElementById("15").innerHTML = "Sukunimi";
        document.getElementById("16").innerHTML = "Päivämäärä";
        document.getElementById("17").innerHTML = "Eräpäivä";
        document.getElementById("18").innerHTML = "Palautettu";
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
        document.getElementById("1").innerHTML = "Lainahaku";
        document.getElementById("2").innerHTML = "Hae laina";
        document.getElementById("3").innerHTML = "Teoksen nimi:";
        document.getElementsByName('nimi')[0].placeholder = " Teoksen nimi";
        document.getElementById("4").innerHTML = "Kirjailijan nimi:";
        document.getElementsByName('knimi')[0].placeholder = " Kirjailijan nimi";
        document.getElementById("5").innerHTML = "Teoksen ID:";
        document.getElementById("6").innerHTML = "Teoksen kieli:";
        document.getElementsByName('kieli')[0].placeholder = " Kieli";
        document.getElementById("7").innerHTML = "Teoksen ISBN:";
        document.getElementById("8").innerHTML = "Julkaisuvuosi:";
        document.getElementsByName('vuosi')[0].placeholder = " Vuosi (4 dig)";
        document.getElementById("9").innerHTML = "Eräpäivä:";
        document.getElementById("10").value = "Lähetä";
        document.getElementById("loanhistory_legend").innerHTML = "Hae lainahistoria";
        document.getElementById("11").value = "Lainahistoria";
        document.getElementById("loan_search_legend").innerHTML = "Hakutulokset";
        document.getElementById("caption").innerHTML = "HAKUTULOKSET";
        //document.getElementById("12").innerHTML = "ID";
        document.getElementById("13").innerHTML = "Teoksen nimi";
        document.getElementById("14").innerHTML = "Etunimi";
        document.getElementById("15").innerHTML = "Sukunimi";
        document.getElementById("16").innerHTML = "Päivämäärä";
        document.getElementById("17").innerHTML = "Eräpäivä";
        document.getElementById("18").innerHTML = "Palautettu";
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
        let legend_elements = document.getElementsByTagName("legend");
        let j;
        for (j = 0; j < legend_elements.length; j++) {
            legend_elements[j].style.color = "black";
        }
        //document.getElementsByTagName("legend")[0].style.color = "black";
        //document.getElementsByTagName("legend")[1].style.color = "black";
        //document.getElementsByTagName("legend")[2].style.color = "black";
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
        let legend_elements = document.getElementsByTagName("legend");
        let j;
        for (j = 0; j < legend_elements.length; j++) {
            legend_elements[j].style.color = "black";
        }
        //document.getElementsByTagName("legend")[0].style.color = "black";
        //document.getElementsByTagName("legend")[1].style.color = "black";
        //document.getElementsByTagName("legend")[2].style.color = "black";
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
        let legend_elements = document.getElementsByTagName("legend");
        let j;
        for (j = 0; j < legend_elements.length; j++) {
            legend_elements[j].style.color = "white";
        }
        //document.getElementsByTagName("legend")[0].style.color = "white";
        //document.getElementsByTagName("legend")[1].style.color = "white";
        //document.getElementsByTagName("legend")[2].style.color = "white";
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

// HAUT

// Hakee vain palauttamattomat lainat
function hae_lainat(){

    let url = "http://localhost:80/Kirjasto/Server/lainassa/";

    let nimi = document.getElementsByName("nimi")[0].value;
    url += "nimi=" + nimi;
    let knimi = document.getElementsByName("knimi")[0].value;
    url += "&knimi=" + knimi;
    let id = document.getElementsByName("id")[0].value;
    url += "&id=" + id;
    let kieli = document.getElementsByName("kieli")[0].value;
    url += "&kieli=" + kieli;
    let isbn = document.getElementsByName("isbn")[0].value;
    url += "&isbn=" + isbn;
    let vuosi = document.getElementsByName("vuosi")[0].value;
    url += "&vuosi=" + vuosi;
    let erapaiva = document.getElementsByName("erapaiva");
    url += "&erapaiva=" + erapaiva;

    console.log(url);

    // tehdään XMLrequest ja lähetetään se
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            let vastaus = xml.responseText;
            console.log(vastaus);
            let json = JSON.parse(vastaus);

            //Tyhjennetään taulu mahdollisista vanhoista hakutuloksista
            let taulu = document.getElementsByTagName("TBODY")[0];
            while (taulu.firstChild) {
                taulu.removeChild(taulu.firstChild);
            }

            if (json.length < 1) { //Jos haku ei tuota tulosta viedään tauluun tyhjä rivi
                let rivi = document.createElement("tr");
                for (let i = 0; i < 7; i++) {
                    let solu = document.createElement("td");
                    solu.innerHTML = " - ";
                    rivi.appendChild(solu);
                }
                taulu.appendChild(rivi);
            } else { //Täytetään taulu hakutuloksilla
                for (let i = 0; i < json.length; i++) {
                    let tiedot = [
                        json[i].Kirja_Id,
                        json[i].Nimi,
                        json[i].Lainaaja_etunimi,
                        json[i].Lainaajan_sukunimi,
                        json[i].Lainaus_pvm,
                        json[i].Viimeinen_pvm,
                        json[i].Palautus_pvm
                    ];

                    let rivi = document.createElement("tr");
                    for (let j = 0; j < tiedot.length; j++) {
                        let solu = document.createElement("td");
                        solu.innerHTML = tiedot[j];
                        rivi.appendChild(solu);
                    }

                    document.getElementsByTagName("TBODY")[0].appendChild(rivi);
                }
            }
        }
    };
    document.getElementById("hakutulos").style.display = 'block'; //Muutetaan taulukko näkyväksi

    xml.open("GET", url, true);
    xml.send();

}

//Funktio hakee koko lainahistorian
function hae_lainahistoria() {

    let url = "http://localhost:80/Kirjasto/Server/lainassa/historia/";

    // tehdään XMLrequest ja lähetetään se
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            let vastaus = xml.responseText;
            let json = JSON.parse(vastaus);

            let taulu = document.getElementsByTagName("TBODY")[0];
            while (taulu.firstChild) {
                taulu.removeChild(taulu.firstChild);
            }

            if (json.length < 1) {
                let rivi = document.createElement("tr");

                for (let i = 0; i < 7; i++) {
                    let solu = document.createElement("td");
                    solu.innerHTML = " - ";
                    rivi.appendChild(solu);
                }
                taulu.appendChild(rivi);

            } else {
                for (let i = 0; i < json.length; i++) {
                    let tiedot = [
                        json[i].Kirja_Id,
                        json[i].Nimi,
                        json[i].Lainaaja_etunimi,
                        json[i].Lainaajan_sukunimi,
                        json[i].Lainaus_pvm,
                        json[i].Viimeinen_pvm,
                        json[i].Palautus_pvm
                    ];

                    let rivi = document.createElement("tr");
                    for (let j = 0; j < tiedot.length; j++) {
                        let solu = document.createElement("td");
                        solu.innerHTML = tiedot[j];
                        rivi.appendChild(solu);
                    }

                    document.getElementsByTagName("TBODY")[0].appendChild(rivi);
                }
            }
        }
    };
    document.getElementById("hakutulos").style.display = 'block';

    xml.open("GET", url, true);
    xml.send();

}
