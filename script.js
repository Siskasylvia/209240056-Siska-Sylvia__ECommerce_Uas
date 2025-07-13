// Inisialisasi keranjang dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(nama, harga) {
  // Tambahkan produk ke array keranjang
  cart.push({ nama, harga });

  // Simpan kembali ke localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update jumlah keranjang
  updateCartCount();

  // Tampilkan isi keranjang
  displayCart();
}

// Menampilkan jumlah item di keranjang (pada <span id="cart-count">)
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Menampilkan isi keranjang belanja di <div id="cart-items">
function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${item.nama} - Rp ${item.harga.toLocaleString()} 
    <button onclick="removeFromCart(${index})">Hapus</button>`;
    cartItemsDiv.appendChild(itemDiv);

    total += item.harga;
  });

  totalSpan.textContent = "Rp " + total.toLocaleString();
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

// Fungsi untuk navigasi ke bagian halaman tertentu (misal keranjang)
function showSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Jalankan saat halaman dimuat
window.onload = () => {
  updateCartCount();
  displayCart();
};
