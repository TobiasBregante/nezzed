import React from 'react';
import SliderBanner from '../components/sliderBannerComponent';
import Quote from '../components/quoteComponent';
import Footer from '../components/footerComponent';

export default function Home(){
    return(
        <>
        <SliderBanner/>
        <article className="content row">
            <article className="box-info col-12 col-sm-12 col-lg-3 col-xl-3 card">
                <article className="card-body">
                    <h3 className="card-title">Software Factory</h3><hr/>
                    <p className="card-description">
                        Somos software factory en todo LATAM. Nos destacamos por la calidad, 
                        y no por la cantidad. <i>Código bonito y ágil</i>.
                    </p>
                    <img src="/img/factory.png" alt="Factory" className="img-box-info"/>
                </article>
            </article>
            <article className="box-info col-12 col-sm-12 col-lg-3 col-xl-3 card">
                <article className="card-body">
                    <h3 className="card-title">Software Consulting</h3>
                    <p className="card-description">
                        Somos tu partner en el desarrollo, y en la producción. 
                        Entendemos tu negocio, tenemos la solución.
                    </p>
                    <img src="/img/consulting.png" alt="Factory" className="img-box-info"/>
                </article>
            </article>
            <article className="box-info col-12 col-sm-12 col-lg-3 col-xl-3 card">
                <article className="card-body">
                    <h3 className="card-title">Outsourcing</h3>
                    <p className="card-description">
                        Trabajamos en conjunto con tu equipo de desarrollo. 
                        Ahorrate invertir en capacitación, nosotros lo hacemos por usted.
                    </p>
                    <img src="/img/outsourcing.png" alt="Factory" className="img-box-info"/>
                </article>
            </article>
            <Quote/>
        </article>
        <Footer/>
        </>
    )
}