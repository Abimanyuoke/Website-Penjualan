document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items : [
            { id : 1, name : 'Robusta Brazil', img: '1.png', price: 20000 },
            { id : 2, name : 'Arabica Blend', img: '2.png', price: 25000 },
            { id : 3, name : 'Primo Passo', img: '3.png', price: 30000 },
            { id : 4, name : 'Aceh Gayo', img: '4.png', price: 35000 },
            { id : 5, name : 'Sumatra Mandheling', img: '5.png', price: 40000 },
            { id : 6, name : 'Taro Coffe', img: '6.png', price: 45000 },
        ]
    }))


    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek appakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong 
            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id != newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantyty dan total 
                        item.quantity++;
                        item.total = item.price * item.quantity; 
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            // ambil item yang mau diremove berdasarkan id 
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari satu 
            if (cartItem.quantity > 1) {
                // telusuri 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if (item.id != id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantyty dan total 
                        item.quantity--;
                        item.total = item.price * item.quantity; 
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    } 
                })
            } else if (cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
                return item;
            }
        }
    })
})

// form validation 
const checkoutButton = document.querySelector('.checkout-button');
const form = document.querySelector('#checkout-form');
checkoutButton.disabled = true;

form.addEventListener('keyup', () => {
    for (let j = 0; j < form; j++) {
        if ( form.elements[j].length !== 0 ) {
            checkoutButton.classList.remove('disabled')   
            checkoutButton.classList.add('disabled');    
        } else {
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled')
});

// konversi rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits : 0,
    }).format(number);
}


// kirim data ketika tombol checkout dikirim
checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const massage  = formatMassage(objData);
    window.open('http://wa.me/6282257313006?text=' + encodeURIComponent(massage));
})


// format pesan whatsapp
const formatMassage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No Hp: ${obj.phone}
    Nama: ${obj.nama}
    Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
    TOTAL: ${rupiah(obj.total)}
    Terima Kasih.`;
}