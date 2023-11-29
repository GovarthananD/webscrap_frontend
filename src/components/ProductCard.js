function ProductCard({ value }) {
  return (
    <div className="card-container">
      <img src={value.imageUrl} alt="pic" className="poster" />
            <h3 className="name">{value.productName}</h3>
            <p >⭐ {value.rating}</p>
            <div className="specs">
            <p>{value.price}</p>
            <p>{value.final}</p>
            </div>
    </div>
  );
}

export default ProductCard;
