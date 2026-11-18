import React from 'react'
import ProductCart from './ProductCart';
import WrapCard from './wrapCard';

const Home = () => {

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    productName: "Backpack",
    price: 1099,
    onSale: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    productName: "Men's Casual T-Shirt",
    price: 599,
    onSale: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    productName: "Men's Cotton Jacket",
    price: 1499,
    onSale: true
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80",
    productName: "Men's Slim Fit T-Shirt",
    price: 799,
    onSale: false
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
    productName: "External Hard Drive",
    price: 3499,
    onSale: true
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1597872250969-6b7f7f9f2b5d?w=500&q=80",
    productName: "Gaming SSD",
    price: 4999,
    onSale: false
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    productName: "Gaming Monitor",
    price: 12999,
    onSale: true
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80",
    productName: "Computer Components",
    price: 4299,
    onSale: false
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
    productName: "Women's Gold Bracelet",
    price: 1999,
    onSale: true
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
    productName: "Women's Gold Ring",
    price: 2499,
    onSale: false
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
    productName: "Silver Hoop Earrings",
    price: 999,
    onSale: true
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80",
    productName: "Portable Storage Device",
    price: 2799,
    onSale: false
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80",
    productName: "Winter Jacket",
    price: 2199,
    onSale: true
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    productName: "Travel Backpack",
    price: 1299,
    onSale: false
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
    productName: "Classic Men's Tee",
    price: 499,
    onSale: true
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80",
    productName: "Casual Summer Shirt",
    price: 699,
    onSale: false
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80",
    productName: "Portable Hard Disk",
    price: 3199,
    onSale: true
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80",
    productName: "Women's Bracelet",
    price: 1799,
    onSale: false
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80",
    productName: "Elegant Gold Ring",
    price: 2299,
    onSale: true
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80",
    productName: "Silver Earrings",
    price: 899,
    onSale: false
  }
];



  return (
    <div className='grid grid-cols-4 gap-6' >

       

    {products.map((item) => {

    if(item.onSale){
      return  <WrapCard key={item.id}>
  <ProductCart
    image={item.image}
    productName={item.productName}
    price={item.price}
    onSale={item.onSale}
  />
</WrapCard>
    }



 return <ProductCart
    key={item.id}
    image={item.image}
    productName={item.productName}
    price={item.price}
    onSale = {item.onSale}
  />
})}

    </div>
  )
}

export default Home