   function gunuAl() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }
                /////SAAT
                var d = new Date(); // for now
                saat = d.getHours(); // => 9
                if (saat < 10) {
                    saat = '0' + saat;
                }
                dakika = d.getMinutes(); // =>  30
                if (dakika < 10) {
                    dakika = '0' + dakika;
                }
                saniye = d.getSeconds(); // => 51
                if (saniye < 10) {
                    saniye = '0' + saniye;
                }
                tarih = dd + '/' + mm + '/' + yyyy;
                saat = saat + ':' + dakika + ':' + saniye;
                hepsi = tarih + '  ' + saat;
                return hepsi;
            }
            alert(gunuAl());