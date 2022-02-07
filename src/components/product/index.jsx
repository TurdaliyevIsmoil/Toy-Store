export default function ({data}) {
    return (<div>
        <img src={data.img} draggable="false" alt="" />
        <h2>{data.title}</h2>
        <a href="#" className='call-to-action'>$ {data.price.toFixed(2)} USD</a>
    </div>);
}
