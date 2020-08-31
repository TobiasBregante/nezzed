import React from 'react';

const SocialMedial = () => {
    const handleRedirectWpp = e => {
        window.open('https://api.whatsapp.com/send?phone=5491124767008&text=Hola!%20tengo%20una%20consulta.%20Gracias!', '_blank');
    }
    const handleRedirectIg = e => {
        window.open('https://www.instagram.com/nazarenobregante/?hl=es-la', '_blank');
    }
    const handleRedirectFb = e => {
        window.open('https://www.facebook.com/nazareno.bregante/', '_blank');
    }
    return(
        <ul className="social-media-list">
            <li className="nav-item bg-warning header-social-media"></li>
            <li onClick={handleRedirectWpp} className="nav-item wpp">
                <img src="/img/whatsapp.png" alt="wpp"/>
            </li>
            <li onClick={handleRedirectIg} className="nav-item ig">
                <img src="/img/instagram.png" alt="ig"/>
            </li>
            <li onClick={handleRedirectFb} className="nav-item fb">
                <img src="/img/facebook.png" alt="fb"/>
            </li>
        </ul>
    )
}

export default SocialMedial;