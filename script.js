function formatRupiah(angka) {
    return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function hitung() {
    let produkSelect = document.getElementById("produk");
    let harga = parseInt(produkSelect.value);
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let produkText = produkSelect.options[produkSelect.selectedIndex].text;

    if (jumlah < 1 || isNaN(jumlah)) {
        jumlah = 1;
        document.getElementById("jumlah").value = 1;
    }

    // Diskon 10R + Bingkai
    if (produkText.includes("10R + Bingkai") && jumlah > 3) {
        harga = 37000;
    }

    // Harga tengah untuk 5R Bingkai
    if (produkText.includes("5R + Bingkai")) {
        harga = 32000;
    }

    let total = harga * jumlah;
    document.getElementById("total").innerText = formatRupiah(total);
}

document.getElementById("produk").addEventListener("change", hitung);
document.getElementById("jumlah").addEventListener("input", hitung);

function kirimWA() {
    let nama = document.getElementById("nama").value.trim();

    if (nama === "") {
        alert("Nama harus diisi!");
        return;
    }

    let produk = document.getElementById("produk").options[document.getElementById("produk").selectedIndex].text;
    let jumlah = document.getElementById("jumlah").value;
    let total = document.getElementById("total").innerText;

    let pesan = `Halo kak, saya mau order:%0A
Nama: ${nama}%0A
Produk: ${produk}%0A
Jumlah: ${jumlah}%0A
Total: ${total}`;

    let nomor = "6287756973576";

    window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank');
}

hitung();