const ProductCart = ({ image, productName, price, onSale }) => {
  return (
    <div>
       
      <img
        src={image}
        alt={productName}
        className="w-40 h-40 object-contain"
      />

      <p>{productName}</p>
      <h1>₹{price}</h1>
    </div>
  );
};

export default ProductCart;