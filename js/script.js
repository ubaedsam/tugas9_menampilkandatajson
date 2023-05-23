function tampilkanSemuaProduct() {
    // Menggunakan Ajax untuk menampilkan semua data menu pada file product.json
    $.getJSON("data/product.json", function(data) {
        let product = data.product;
        $("#daftar-gunung").empty();
        $.each(product, function(i, data) {
            $("#daftar-gunung").append(
                '<div class="col-md-4"><div class="card mb-3 shadow-lg"><img src="img/product/' +
                data.image +
                '" class="card-img-top" width="100px" height="300px"><div class="card-body"><h5 class="card-title text-center mb-4">' +
                data.nama +
                '</h5><p class="card-text">Harga Product : ' +
                data.harga +
                '</h5><p class="card-text">Stok Product : ' +
                data.stok +
                '</h5><p class="card-text">Diskon Product : ' +
                data.diskon +
                '</p><h6 class="card-title">Informasi Product : <br><br>' +
                data.deskripsi +
                '</h6><button class="learn-more mt-3"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">More Info</span></button></div></div></div>'
            );
        });
    });
}

tampilkanSemuaProduct();

// Menampilkan semua data berdasarkan kategorinya
// untuk memindahkan link menu yang active pada saat dipilih
$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    let jenis_product = $(this).html(); // pada saat menu di klik menampilkan nama kategori yang dipilih
    $("h1").html(jenis_product);

    if (jenis_product == "All Product") {
        tampilkanSemuaProduct();
        return;
    }

    $.getJSON("data/product.json", function(data) {
        let product = data.product;
        let content = "";

        $.each(product, function(i, data) {
            if (data.jenis_product == jenis_product.toLowerCase()) {
                content +=
                    '<div class="col-md-4"><div class="card mb-3 shadow-lg"><img src="img/product/' +
                    data.image +
                    '" class="card-img-top" width="100px" height="300px"><div class="card-body"><h5 class="card-title text-center mb-4">' +
                    data.nama +
                    '</h5><p class="card-text">Harga Product : ' +
                    data.harga +
                    '</h5><p class="card-text">Stok Product : ' +
                    data.stok +
                    '</h5><p class="card-text">Diskon Product : ' +
                    data.diskon +
                    '</p><h6 class="card-title">Informasi Product : <br><br>' +
                    data.deskripsi +
                    '</h6><button class="learn-more mt-3"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">More Info</span></button></div></div></div>'
            }
        });

        $("#daftar-gunung").html(content);
    });
});