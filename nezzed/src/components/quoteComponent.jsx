import React, { useState } from 'react';
import { listPrices, shopCar } from './quoteDataListComponent';

const Quote = () => {
  const [price, setPrice] = useState(0);
  const [listQuote, setListQuote] = useState([]);
  const [toggleNoti, setToggleNoti] = useState({ display: 'none' });
  const handleChange = (e) => {
    if (e.target.value !== 'null') {
      e.target.classList.add('bg-success-quote-select');
      shopCar.push(listPrices[e.target.value]);
      setListQuote(shopCar);
      setPrice(
        shopCar
          .map((increment, object) => {
            let acc = +increment.price;
            return acc;
          })
          .reduce((acc, incre) => parseFloat(acc + incre))
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputVerify = [];
    let queryOrder;
    Object.values(e.target).map((obj) => {
      if (obj.name) {
        if (obj.type === 'select-one') {
          obj.classList.remove('bg-success-quote-select');
          if (obj.value === 'null') {
            inputVerify.push(obj.value);
            console.log(inputVerify);
          }
        }
      }
      if (inputVerify.length >= 1) {
        if (obj.name) {
          if (obj.type === 'select-one') {
            if (obj.value === 'null') {
              obj.classList.add('bg-danger');
              setToggleNoti({ display: 'block' });
              setTimeout(() => {
                setToggleNoti({ display: 'none' });
                obj.classList.remove('bg-danger');
              }, 2000);
            }
          }
        }
      }
      return (queryOrder =
        'Una orden! ' +
        listQuote.map((obj, i) => ++i + ') ' + obj.title).join(' - ') +
        ' - Total: US$' +
        price.toFixed(2));
    });
    if (inputVerify.length < 1) {
      window.open(
        'https://api.whatsapp.com/send?phone=5491124767008&text=' + queryOrder,
        '_blank'
      );
      Object.values(e.target).map((obj) => {
        if (obj.name) {
          obj.value = 'null';
        }
        return obj.value;
      });
      inputVerify = [];
      shopCar.length = 0;
      setListQuote([]);
      setPrice(0);
    }
  };
  return (
    <>
      <section className='container--cotizacion col-12 col-sm-12 col-lg-11 co-xl-11 '>
        <form onSubmit={handleSubmit} id='frm-quote' method='POST'>
          <article className='col-12 col-sm-12 col-lg-12 col-xl-12'>
            <h3 className='quote-title'>Cotización</h3>
            {/* <span className='price-quote'>
              US$ {price === 0 ? '0.00' : price.toFixed(2)}
            </span> */}
          </article>
          <hr />

          <article className='card--cotizacion'>
            <h4 className='card--title'>Alcance</h4>
            <select
              onChange={handleChange}
              id='alcance'
              name='alcance'
              className='card--select'
              required>
              <option value='null'>--- Seleccione---</option>
              <option value='0'>1 a 3 páginas</option>
              <option value='1'>Más de 3 páginas</option>
              <option value='2'>SPA (Single Page Application)</option>
            </select>
          </article>

          <article className='card--cotizacion'>
            <h4 className='card--title'>Almacenamiento</h4>
            <select
              onChange={handleChange}
              id='almacenamiento'
              name='almacenamiento'
              className='card--select'
              required>
              <option value='null'>--- Seleccione ---</option>
              <option value='3'>Sin base de datos</option>
              <option value='4'>1 GB a 250 GB</option>
              <option value='5'>Más de 250 GB</option>
            </select>
          </article>

          <article className='card--cotizacion'>
            <h4 className='card--title'>Pagos internos</h4>

            <select
              onChange={handleChange}
              id='payment'
              name='payment'
              className='card--select'
              required>
              <option value='null'>--- Seleccione ---</option>
              <option value='6'>Sin pagos internos</option>
              <option value='7'>Pasarela de pagos</option>
              <option value='8'>Pasarela y carro de compras</option>
            </select>
          </article>
          <hr />
          <article className='card-body'>
            <ul className='order-quote'>
              {listQuote.length > 0 ? <h5>Orden de compra</h5> : null}
              {listQuote.map((obj, i) => (
                <li value={i} key={i}>
                  <span className='count-quote-li'>{++i}</span> {obj.title}
                </li>
              ))}
            </ul>
            <p className='card-desription'>
              <span className='net-amount-title'>Total: </span>
              <span className='text-success price-quote-order'>
                US$ {price === 0 ? '0.00' : price.toFixed(2)}
              </span>
            </p>
          </article>

          <input
            type='submit'
            className='card--btn'
            value='Cotizar por Whatsapp!'
          />

          <article className='card popup-error bg-warning' style={toggleNoti}>
            <article className='card-body'>
              <p>Por favor, complete los campos correctamente.</p>
            </article>
          </article>
        </form>
      </section>
    </>
  );
};

export default Quote;
