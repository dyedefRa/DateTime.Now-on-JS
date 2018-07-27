   function gunuAl() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //Ocak için 0 geliyor o yüzden +1
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }
                /////SAAT
                var d = new Date(); 
                saat = d.getHours();   // Mesela 8 olsun;
                if (saat < 10) {
                    saat = '0' + saat;  // 08 gelir
                }
                dakika = d.getMinutes(); //  11 icin
                if (dakika < 10) {
                    dakika = '0' + dakika;  // Buras yine 11
                }
                saniye = d.getSeconds(); //  3 oldugunu varsayalım
                if (saniye < 10) {
                    saniye = '0' + saniye; // 03 olur
                }
                tarih = dd + '/' + mm + '/' + yyyy;
                saat = saat + ':' + dakika + ':' + saniye;
                hepsi = tarih + '  ' + saat;
                return hepsi;
            }
            alert(gunuAl());
