Meteor.subscribe("urunler");
Template.urunListe.helpers({
  urunler() {
    return Urun.find({});
  }
});

Template.urun.events({
  'click #duzenle' (event) {
    const urun = this; //secilen urun
    Session.set('islem', 'Ürün Düzenle') // islem duzenle
    Session.set('seciliUrun', urun) // secili urunu Session a kaydet
  },
  'click #sil'(event){
       const urun = this;
       Urun.remove(urun._id)
    }
})


Template.urunDuzenle.helpers({
  islem() {
    return Session.get('islem') || "Ürün Ekle"
  },
  islemYazi() {
    return Session.get('islem') == "Ürün Ekle" ? "Ekle" : "Kaydet"
  },

  seciliUrun(field) {
    let seciliUrun = Session.get('seciliUrun') || {}
    return seciliUrun ? seciliUrun[field] : ""
  }

})

Template.urunDuzenle.events({
  'submit #duzenleForm' (event) {
    event.preventDefault(); //varsayılan form davranışını iptal et

    const urun = event.target;
    const yeniUrun = {
        isim: urun.urunIsmi.value,
        tur: urun.urunFiyat.value,
        fiyat: urun.urunTur.value
    }
     const islem = Session.get('islem')
    if (islem == 'Ürün Düzenle') {
      const seciliUrun = Session.get('seciliUrun')
      Urun.update(seciliUrun._id, yeniUrun)
      Session.set('islem', "Ürün Ekle")
    } else {
      Urun.insert(yeniUrun); //
    }

    urun.urunIsmi.value = ""; //textbox ları temizliyoruz.
    urun.urunFiyat.value = "";
    urun.urunTur.value = "";
  }

})






Template.urunListe.events({
  'click #servisGetir' (event) {


    Meteor.call('meteorServerService',  function (err, res) {
          // The method call sets the Session variable to the callback value
          if (err) {
            Session.set('location', {error: err});
          } else {
            Session.set('location', res);
            return res;
          }
        });


  }
})
