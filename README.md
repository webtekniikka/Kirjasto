# Kirjasto

REST-api kuvaus


GET

http://localhost:80/Kirjasto/Server/kirja/?nimi=&knimi=&id=&kieli=&isbn=&vuosi=
http://localhost:80/Kirjasto/Server/lainassa/?nimi=&knimi=&id=&kieli=&isbn=&vuosi=&erapaiva=

Käytetään hakujen tekemiseen. Urlista tarkistetaan serverin puolella haetaanko kirjoja vai lainoja ja siitä saadaan myös hakukriteerit.
Hakutulos palautuu json-stringinä.


PUT

http://localhost:80/Kirjasto/Server/laina/palauta/

Käytetään lainanpalautuksessa kirjan ja lainan tietojen päivittämiseen. 
Kirjan id:stä tehdään json-objekti joka lähetetään serverille json-string muodossa. 


POST

http://localhost:80/Kirjasto/Server/kirja/
http://localhost:80/Kirjasto/Server/laina/luo/

Käytetään uusien kirjojen ja lainaustapahtuminen luomiseen. Urlista päätellään 
Kirjan ja lainan tiedoista tehdään json-objekti joka muutetaan string muotoon tiedon lähetystä varten. 


DELETE

http://localhost:80/Kirjasto/Server/kirja/?id=

Käytetään kirjojen poistamiseen tietokannasta. Tietokannasta poistetaan kirja ja kaikki sen lainatapahtumat.
Poistettavan kirjan id saadaan urlista. 
