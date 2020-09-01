import React from 'react';
import Assistant from '../components/assistantComponent';
import Footer from '../components/footerComponent';
export default function About() {
  return (
    <>
      <article className='content-about'>
        <article className='col-12 col-sm-12 col-lg-12 col-xl-12 about-title'>
          <i className='large material-icons'>format_quote</i>
          <h2>
            Sobre Nuestra Historia <span className='suspense-point'>...</span>
          </h2>
          <i className='large material-icons'>chat</i>
          <br />
          <article className='content-p-narrate col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='assistant'>
              <img src='/img/assistant.png' alt='assistant' />
            </article>
            <p className='about-p-narrate'>
              Hola, soy la narradora visual de esta historia. Nezzed comenzó en
              el año 2019. Empezó llamándose Ned Solutions IT, y renovó su marca
              a Nezzed Solutions IT, en el 2020.
            </p>
          </article>
          <article className='content-p-ask col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='client'>
              <img src='/img/client.png' alt='client' />
            </article>
            <p className='about-p-ask'>¿Qué es Nezzed?</p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              Nezzed es el nombre de nuestra consultora de desarrollo de
              software.
            </p>
          </article>
          <article className='content-p-ask col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='client'>
              <img src='/img/client.png' alt='client' />
            </article>
            <p className='about-p-ask'>¿Qué ofrece, Nezzed?</p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              Nezzed es uno de los primeros en ofrecer soluciones IT a pequeñas
              y medianas empresas dentro del Distrito Tecnológico.
            </p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>No solo eso.</p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              Nezzed tiene como primer foco, incrementar el reconocimiento de
              las empresas locales.
            </p>
          </article>
          <article className='content-p-ask col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='client'>
              <img src='/img/client.png' alt='client' />
            </article>
            <p className='about-p-ask'>
              ¿Y cómo lo harán, para que las PyMEs puedan ser reconocidas?
            </p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              Bien, es un tema bastante extenso, pero nuestro labor es
              incrementar la presencia de las PyMEs, en el marco digital.
            </p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              Nezzed cuenta con un equipo de desarrollo que activamente realiza
              investigaciones del mercado. Si bien, el mercado es muy
              competitivo, hay pasos claves que uno como PyME, debe seguir.
            </p>
          </article>
          <article className='content-p-ask col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='client'>
              <img src='/img/client.png' alt='client' />
            </article>
            <p className='about-p-ask'>
              Entiendo, o sea, dices que hay un camino que lo sigue la mayoría
              de las PyMEs, bueno. Casi la mayoría.
            </p>
          </article>
          <article className='content-p col-12 col-sm-12 col-lg-12 col-xl-12'>
            <article className='representant'>
              <img src='/img/representant.png' alt='representant' />
            </article>
            <p className='about-p'>
              asi es, Tomás! Ya vas entendiendo a qué vamos en Nezzed.
            </p>
          </article>
        </article>
        <Assistant />
      </article>
      <Footer />
    </>
  );
}
