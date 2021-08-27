var namaRuang = ["Single Room", "Standart Room", "Triple Room"];
var hargaRuang = [1000000, 1500000, 2000000];
var gambarRuang = [
  "https://images.pexels.com/photos/6284232/pexels-photo-6284232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/6265937/pexels-photo-6265937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://cf.bstatic.com/images/hotel/max1024x768/131/131113700.jpg",
];

var listruang = document.getElementById("listruang");

var namaRuang_keranjang = [];
var hargaRuang_keranjang = [];

function showlistruang() {
  listruang.innerHTML = "";
  for (let i = 0; i < namaRuang.length; i++) {
    listruang.innerHTML +=
      '<div class="card float-left mr-3 mb-3 shadow bg-white rounded " style="width: 13rem">' +
      "<img src=" +
      gambarRuang[i] +
      ' class="card-img-top" alt="..." />' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      namaRuang[i] +
      "</h5>" +
      '<p class="card-text">Rp.' +
      hargaRuang[i] +
      "</p>" +
      '<a href="#" class="btn btn-primary" onclick="addlistitem(' +
      i +
      ')">Pesan</a>' +
      "</div>" +
      "</div>";
  }
}

function addlistitem(id) {
  namaRuang_keranjang.push(namaRuang[id]);
  hargaRuang_keranjang.push(hargaRuang[id]);

  showlistkeranjang();
}

var listkeranjang = document.getElementById("listkeranjang");
var tampilandiscount = document.getElementById("discount");
var tampilanpajak = document.getElementById("pajak");
var tampilantotalbayar = document.getElementById("totalbayar");

function showlistkeranjang() {
  listkeranjang.innerHTML = "";
  var discount = 0;
  var pajak = 0;
  var hargatotal = 0;
  var totalbayar = 0;
  for (let i = 0; i < namaRuang_keranjang.length; i++) {
    listkeranjang.innerHTML +=
      '<div class="listkeranjang" id="listkeranjang">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      namaRuang_keranjang[i] +
      "</h5>" +
      '<p class="card-text">Rp. ' +
      hargaRuang_keranjang[i] +
      "</p>" +
      "<p>Qty : 1</p>" +
      '<a href="#" class="btn btn-danger float-right" Onclick="deleteitem(' +
      i +
      ')">Batal</a>' +
      "</div>" +
      "</div>";

    hargatotal = hargaRuang_keranjang[i] + hargatotal;

    if (totalbayar > 3000000) {
      discount = totalbayar * 0.05;
    } else {
      discount = 0;
    }
    totalbayar = hargatotal - discount;
    pajak = totalbayar * 0.1;
    var totalbelanja = totalbayar - pajak;
    tampilanpajak.innerHTML = pajak;
    tampilandiscount.innerHTML = discount;
    tampilantotalbayar.innerHTML = totalbelanja;
  }
}

showlistruang();

function deleteitem(id) {
  namaRuang_keranjang.splice(id, 1);
  hargaRuang_keranjang.splice(id, 1);

  showlistkeranjang();
}
