const Product = (props)=>{
    const{id, productName , productImage , price}=props.data
    return(
        <div className="col-3">
            <img src={productImage} className="w-50" />
            <h5>{productName}</h5>
            <p>price:{price}$</p>
            <button className="btn btn-info btn-sm">
            +
            </button>
        </div>
    )
}
export default Product;