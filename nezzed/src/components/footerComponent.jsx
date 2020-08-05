import React from 'react';

const reDirect = () => {
    window.location = '/';
}

export default function Footer(){
    return(
        <footer className="row">
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <ul>
                    <li>&copy;Copyright reserved Nezzed Solutions IT 2020 | <a href="/" onClick={reDirect}>www.nezzed.com</a></li>
                    <li>- Buenos Aires City, Argentina</li>
                </ul>
            </article>
        </footer>
    )
}