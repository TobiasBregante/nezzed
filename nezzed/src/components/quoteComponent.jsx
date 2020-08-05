import React, { useState } from 'react';
import { listPrices, shopCar } from './quoteDataListComponent';

const Quote = () => {
    const [price, setPrice] = useState(0);
    const [orderQuote, setOrderQuote] = useState('card')
    const handleChange = e => {
        e.target.classList.add('bg-success-quote-select')
        shopCar.push(listPrices[e.target.value])
        setPrice(shopCar.map((increment, object) => {let acc =+ increment.price; return acc;}).reduce((acc, incre) => parseFloat(acc + incre)))
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(Object.values(e.target).map(obj => {
            if(obj.name){
                if(obj.type === 'select-one'){
                    obj.classList.remove('bg-success-quote-select')
                }
            }
        }))
        setOrderQuote('card order-quote-popup-open')     
    }
    return(
        <>
        <article className="content-quote col-12 col-sm-12 col-lg-11 co-xl-11 bg-light">
            <form onSubmit={handleSubmit} id="frm-quote" method="POST">
                <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <h3 className="quote-title">Cotización</h3><span className="text-success price-quote">US$ { price === 0 ? '0.00' : price }</span>
                </article><hr/>
                <article className="card">
                    <article className="card-body">
                        <article className="count-step-left">1</article>
                        <h4>Alcance</h4><hr/>
                        <select onChange={handleChange} id="alcance" name="alcance">
                            <option value="null">---</option>
                            <option value="0">1 a 3 páginas</option>
                            <option value="1">Más de 3 páginas</option>
                            <option value="2">SPA (Single Page Application)</option>
                        </select>
                    </article>
                </article>
                <article className="card">
                    <article className="card-body">
                        <article className="count-step-right">2</article>
                        <h4>Almacenamiento</h4><hr/>
                        <select onChange={handleChange} id="almacenamiento" name="almacenamiento">
                            <option value="null">---</option>
                            <option value="3">Sin base de datos</option>
                            <option value="4">1 GB a 250 GB</option>
                            <option value="5">Más de 250 GB</option>
                        </select>
                    </article>
                </article>
                <article className="card">
                    <article className="card-body">
                        <article className="count-step-left">3</article>
                        <h4>Pagos internos</h4><hr/>
                        <select onChange={handleChange} id="payment" name="payment">
                            <option value="null">---</option>
                            <option value="6">Sin pagos internos</option>
                            <option value="7">Pasarela de pagos</option>
                            <option value="8">Pasarela y carro de compras</option>
                        </select>
                    </article>
                </article>
                <article className={orderQuote}>
                    <article className="card-body">
                        <ul className="order-quote">
                            {shopCar.length > 0 ? <h5>Orden de compra</h5> : <h5>Tu orden está vacía</h5>}
                            {shopCar.map((obj, i) => <li key={i}><span className="count-quote-li">{++i}</span> {obj.title}</li>)}
                        </ul>
                        <p className="card-desription">
                            <span className="text-success price-quote-order">US$ { price === 0 ? '0.00' : price }</span>
                        </p>
                    </article>
                </article>
                <article className="card">
                    <article className="card-body">
                        <input type="submit" className="btn btn-primary" value="Cotizar ya!"/>
                    </article>
                </article>
            </form>
        </article>
        </>
    )
}

export default Quote;