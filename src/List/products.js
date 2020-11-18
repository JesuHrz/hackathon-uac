import carrot from '../img/carrot.jpg'
import tomatoes from '../img/tomatoes.jpg'
import garlic from '../img/garlic.jpg'
import cabbage from '../img/cabbage.jpg'

const Product = [
    {
        id: 0,
        name: 'Carrot',
        description: 'Lorem ipsum hopman tue',
        farm: 'Boyacá',
        stock: 300,
        pricePerPack: '45.000',
        image: carrot
    },
    {
        id: 1,
        name: 'Tomatoes',
        description: 'Lorem ipsum hopman tue',
        farm: 'Santander',
        stock: 140,
        pricePerPack: '64.000',
        image: tomatoes
    },
    {
        id: 2,
        name: 'Garlic',
        description: 'Lorem ipsum hopman tue',
        farm: 'Eje Cafetero',
        stock: 780,
        pricePerPack: '8.000',
        image: garlic
    },
    {
        id: 3,
        name: 'Cabbage',
        description: 'Lorem ipsum hopman tue',
        farm: 'Boyacá',
        stock: 70,
        pricePerPack: '12.000',
        image: cabbage
    }
]

export default Product;