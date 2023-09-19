import React from 'react';
import floatWhatsapp from '../../assets/images/whatsapp-flotante.png';

const ButtonWhatsapp = () => {

    const onHandleWhatsapp = () => {
        window.open('https://wa.me/5492612421929', '_blank');
    }

    return (
        <div className='floatWhatsapp' onClick={onHandleWhatsapp}>
            <img src={floatWhatsapp} alt="Whatsapp" />
        </div>
    )
}

export default ButtonWhatsapp