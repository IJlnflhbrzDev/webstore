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
               console.log("True");
          } else {
               listFormControll[i].value = "";
               console.log("False");
          }

          // console.log("Hello Wordl")
     }
}

function showFilterProduk() {
     document.querySelector(".filter-produk").classList.toggle("show-filter")
     let ui_show_filter = document.querySelector('.filter-produk');
     ui_show_filter.classList.add('ui_show_filter_fixed');

     document.querySelector(".btn-show-filter").classList.add("d-none")
}

function closeFilterProduk() {
     let ui_show_filter = document.querySelector('.ui_show_filter_fixed');
     ui_show_filter.classList.add('close_show_produk');

     document.querySelector(".btn-show-filter").classList.remove("d-none")
}

window.addEventListener('scroll', function () {
     let btn_show_filter = document.querySelector('.btn-show-filter');
     let window_position = window.scrollY > 0;
     btn_show_filter.classList.toggle('btn-show-filter-fixed', window_position);
});