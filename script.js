function checkFilter(inputID) {
     let listCheckbox = document.getElementsByClassName("form-check-input");
     for (let i = 0; i < listCheckbox.length; i++) {
          listCheckbox[i].checked = false;
     }

     document.getElementById(inputID).checked = true;
}

function resetFilter() {
     let listFormControll = document.querySelectorAll(".class-input");
     console.log(listFormControll)
     for (let i = 0; i < listFormControll.length; i++) {

          if (listFormControll[i].getAttribute("type") == "checkbox") {
               listFormControll[i].checked = false;
          } else {
               listFormControll[i].value = "";
          }
     }
}

function showFilterProduk() {
     document.querySelector(".filter-produk").classList.add("show-filter");
     let ui_show_filter = document.querySelector('.filter-produk');
     ui_show_filter.classList.add('ui_show_filter_fixed');
     document.querySelector(".btn-show-filter").classList.add("d-none")
}

function closeFilterProduk() {
     document.querySelector(".filter-produk").classList.remove("show-filter");
     let ui_show_filter = document.querySelector('.filter-produk');
     ui_show_filter.classList.remove('ui_show_filter_fixed');
     document.querySelector(".btn-show-filter").classList.remove("d-none")
}

// const navLinks = document.querySelectorAll('.nav-item');
// const navButtonMenuHumberger = document.querySelector(".navbar-toggler ");
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
// navLinks.forEach((l) => {
//      l.addEventListener('click', () => {
//           bsCollapse.toggle();
//           navButtonMenuHumberger.classList.remove("opened")
//      })
// })


window.addEventListener('scroll', function () {
     let navbar = document.querySelector('nav.navbar');
     let btn_show_filter = document.querySelector('.btn-show-filter');
     let window_position = window.scrollY;
     if (window_position) {

     }

     if (window.innerWidth == 768) {
          btn_show_filter.classList.toggle('btn-show-filter-fixed', window_position);
     }
});

// EVENT CLICK CHANGE SRC IMAGE LARGE
const container_produk_image = document.querySelector(".produk-image");
const imgLarge = document.querySelector(".thumbnail");

container_produk_image.addEventListener("click", function (e) {
     // membuat kondisi ketika event click container img ini meng klik sebuah salah satu gambar small
     if (e.target.className == "thumb-small") {
          imgLarge.src = e.target.src;
          imgLarge.classList.add("fade");

          setTimeout(() => {
               imgLarge.classList.remove("fade")
          }, 500);
     }

});


// event count bertambah

let minusBtn = document.querySelector("#btn-minus"),
     plusBtn = document.querySelector("#btn-plus"),
     valueNumber = document.getElementById("value_count"),
     number = 1, /// number value
     min = 1, /// min number
     max = 10; /// max number

let hargaProduk = document.querySelector("#harga-produk"),
     totalHargaProduk = document.getElementById("total-harga-produk"),
     defaultHargaProduk = 149000,
     hargaJual = 149000;



minusBtn.addEventListener("click", function () {
     if (number > min) {
          number = number - 1;
          valueNumber.innerText = number;
          valueNumber.style.color = "black";
          // mengitung harga
          defaultHargaProduk = defaultHargaProduk - hargaJual;
          totalHargaProduk.innerText = "Rp." + defaultHargaProduk;
     } else {
          valueNumber.style.color = "red ";
     }
});

plusBtn.addEventListener("click", function () {
     if (number < max) {
          number = number + 1;
          valueNumber.innerText = number;
          valueNumber.style.color = "black";
          defaultHargaProduk = defaultHargaProduk + hargaJual;
          totalHargaProduk.innerText = "Rp." + defaultHargaProduk;

     } else {
          valueNumber.style.color = "red ";
          alert("Ups Stock Terbatas");


     }
});
// end script event count button