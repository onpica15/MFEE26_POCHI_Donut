function ProductItem(props) {
  // 每個商品的物件
  // {
  //   "sid": "1",
  //   "product_name": "草莓波堤",
  //   "category_sid": "1",
  //   "product_price": "$35",
  //   "product_img": "./images/pon-de-strawberry.jpeg",
  //   "product_desc": "草莓甜甜的滋味，配上波堤可愛的風格",
  //   "created_at": "2022-05-31 08:28:44"
  // }

  const {
    sid,
    product_name,
    category_sid,
    product_img,
    product_price,
    count,
    setCount,
    removeItem,
  } = props;

  return (
    <>
      <div className="row border-top ">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={product_img} />
          </div>
          <div className="col">
            <div className="row text-muted">
              {category_sid === '1'
                ? '波堤'
                : category_sid === '2'
                ? '歐菲香'
                : category_sid === '3'
                ? '圓型甜甜圈'
                : ''}
            </div>
            <div className="row">{product_name}</div>
          </div>
          <div className="col">
            {/* 加入購物車按鈕 */}
            {count > 1 ? (
              <a
                className="text-decoration-none"
                href="#/"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </a>
            ) : (
              <a href="#/" className="close " onClick={removeItem}>
                <i className="fa-solid fa-trash-can "></i>
              </a>
            )}
            <a href="#/" className="border text-decoration-none">
              {count}
            </a>
            <a
              className="text-decoration-none"
              href="#/"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </a>
            {/* 加入購物車按鈕 */}
          </div>
          <div className="col">${product_price * count} </div>
          <div className="col">
            <a href="#/" className="close " onClick={removeItem}>
              <i className="fa-solid fa-trash-can "></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
