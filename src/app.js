document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items : [
            { id : 1, name : 'Robusta Brazil', img: '1.png', price: 20000 },
            { id : 2, name : 'Arabica Blend', img: '2.png', price: 25000 },
            { id : 3, name : 'Primo Passo', img: '3.png', price: 30000 },
            { id : 4, name : 'Aceh Gayo', img: '4.png', price: 35000 },
            { id : 5, name : 'Sumatra Mandheling', img: '5.png', price: 40000 },
        ]
    }))
})