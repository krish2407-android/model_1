/** Catalog products — same IDs as category.html */
var CATALOG_PRODUCTS = {
    'men-white-t-shirt': {
        id: 'men-white-t-shirt',
        category: 'men',
        categoryLabel: 'Men',
        name: 'Classic Cotton Tee',
        desc: 'Stylish cotton T-shirt for men.',
        price: 999,
        image: './img/men1.jpg'
    },
    'men-blue-shirt': {
        id: 'men-blue-shirt',
        category: 'men',
        categoryLabel: 'Men',
        name: 'Formal Cotton Shirt',
        desc: 'Stylish shirt for everyday wear.',
        price: 1499,
        image: './img/m2.jpg'
    },
    'men-printing-shirt': {
        id: 'men-printing-shirt',
        category: 'men',
        categoryLabel: 'Men',
        name: 'Graphic Print Shirt',
        desc: 'Bold graphic print shirt for men.',
        price: 1999,
        image: './img/m3.jpg'
    },
    'men-lining-shirt': {
        id: 'men-lining-shirt',
        category: 'men',
        categoryLabel: 'Men',
        name: 'Premium Lining Shirt',
        desc: 'Premium lined shirt for a sharp look.',
        price: 3499,
        image: './img/m6.jpg'
    },
    'women-silk-saree': {
        id: 'women-silk-saree',
        category: 'women',
        categoryLabel: 'Women',
        name: 'Silk Saree',
        desc: 'Beautiful sari for women.',
        price: 2499,
        image: './img/w1.jpg'
    },
    'women-shirt': {
        id: 'women-shirt',
        category: 'women',
        categoryLabel: 'Women',
        name: 'Summer Casual Shirt',
        desc: 'Light and trendy summer shirt.',
        price: 899,
        image: './img/w2.jpg'
    },
    'women-casual-kurti': {
        id: 'women-casual-kurti',
        category: 'women',
        categoryLabel: 'Women',
        name: 'Casual Kurti',
        desc: 'Comfortable daily wear kurti.',
        price: 1299,
        image: './img/w3.jpg'
    },
    'women-blue-jeans': {
        id: 'women-blue-jeans',
        category: 'women',
        categoryLabel: 'Women',
        name: 'Slim Fit Jeans',
        desc: 'Comfortable slim fit jeans for women.',
        price: 3199,
        image: './img/w4.jpg'
    },
    'babyg-skirt-1': {
        id: 'babyg-skirt-1',
        category: 'girl',
        categoryLabel: 'Baby Girl',
        name: 'Floral Frock',
        desc: 'Cute frock for baby girls.',
        price: 699,
        image: './img/g1.jpg'
    },
    'babyg-skirt-2': {
        id: 'babyg-skirt-2',
        category: 'girl',
        categoryLabel: 'Baby Girl',
        name: 'Party Skirt',
        desc: 'Comfortable party skirt for little ones.',
        price: 1499,
        image: './img/g2.jpg'
    },
    'babyg-pink-fork': {
        id: 'babyg-pink-fork',
        category: 'girl',
        categoryLabel: 'Baby Girl',
        name: 'Cute Party Frock',
        desc: 'Party frock for baby girls.',
        price: 1999,
        image: './img/g3.jpg'
    },
    'babyg-pink-skirt': {
        id: 'babyg-pink-skirt',
        category: 'girl',
        categoryLabel: 'Baby Girl',
        name: 'Ruffle Skirt',
        desc: 'Ruffle skirt for baby girls.',
        price: 3499,
        image: './img/g4.jpg'
    },
    'babyb-baby-hoddie': {
        id: 'babyb-baby-hoddie',
        category: 'boy',
        categoryLabel: 'Baby Boy',
        name: 'Cozy Hoodie',
        desc: 'Soft cotton hoodie for baby boys.',
        price: 599,
        image: './img/b1.jpg'
    },
    'babyb-white-tshirt': {
        id: 'babyb-white-tshirt',
        category: 'boy',
        categoryLabel: 'Baby Boy',
        name: 'Everyday Cotton Tee',
        desc: 'Soft cotton tee for baby boys.',
        price: 1499,
        image: './img/b2.jpg'
    },
    'babyb-red-tshirt': {
        id: 'babyb-red-tshirt',
        category: 'boy',
        categoryLabel: 'Baby Boy',
        name: 'Sports Graphic Tee',
        desc: 'Sporty graphic tee for baby boys.',
        price: 1999,
        image: './img/b3.jpg'
    },
    'babyb-blue-tshirt': {
        id: 'babyb-blue-tshirt',
        category: 'boy',
        categoryLabel: 'Baby Boy',
        name: 'Polo Style Tee',
        desc: 'Smart polo style tee for baby boys.',
        price: 3499,
        image: './img/b4.jpg'
    }
};

function getProductById(id) {
    if (!id) return null;
    return CATALOG_PRODUCTS[id] || null;
}
