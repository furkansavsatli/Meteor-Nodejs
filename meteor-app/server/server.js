
Meteor.methods({
  meteorServerService() {

console.log("result");
    try {
      const result = HTTP.call('GET', 'http://localhost:8000/listele', {

      });

    console.log(result);



    const urunList = JSON.parse(result.content);
    console.log("başlioz");
    var i=0;
    for( i;i<urunList.length;i++){
    console.log("index "+i);
          console.log(urunList[i]);
          Urun.insert(urunList[i]); //
    }
      console.log("bitti");
    // const yeniUrun = {
    //     isim: urun.urunIsmi.value,
    //     tur: urun.urunFiyat.value,
    //     adet: urun.urunStok.value
    // }
    //  const islem = Session.get('islem')
    // if (islem == 'Ürün Düzenle') {
    //   const seciliUrun = Session.get('seciliUrun')
    //   Urun.update(seciliUrun._id, yeniUrun)
    //   Session.set('islem', "Ürün Ekle")
    // } else {
    //   Urun.insert(yeniUrun); //
    // }




      return true;
    } catch (e) {
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  }
});
