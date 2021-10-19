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
     let btn_show_filter = document.querySelector('.btn-show-filter');
     let window_position = window.scrollY > 0;

     if (this.window.innerWidth === 768) {
          btn_show_filter.classList.toggle('btn-show-filter-fixed', window_position);
     }
});

// EVENT CLICK CHANGE SRC IMAGE LARGE
const container_produk_image = document.querySelector(".produk-image");
const imgLarge = document.querySelector(".thumbnail");

container_produk_image.addEventListener("click", function (e) {
     // membuat kondisi ketika event click container img ini meng klik sebuah salah satu gambar small
     if (e.target.className === "thumb-small") {
          imgLarge.src = e.target.src;
          imgLarge.classList.add("fade");

          setTimeout(() => {
               imgLarge.classList.remove("fade")
          }, 500);
     }

});


// event count bertambah
const btn_minus = document.querySelector("#btn-minus");
const btn_plus = document.querySelector("#btn-plus");
let countInput = document.querySelector("#value-count");

btn_minus.addEventListener("click", function () {
     return countInput;

})
btn_plus.addEventListener("click", function () {
     countInput.innerHTML = count_input++;
})

// let i = "hello world";
// let a = 10;
// for (let index = 0; index < a.length; index++) {


// }