
function Goods(props) { // получает даные через пропсы и просто их выводит
    return (

        <div className="goods-block">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            <p>{props.cost}</p>
            <button className="add-to-cart" data-key={props.articul}> Add to cart </button>
            {/* здесь прорисовывается кнопка */}
        </div>
    )
}


export default Goods