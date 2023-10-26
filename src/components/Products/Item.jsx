import React from 'react'


const Item = (props) => {

    const { product, description, image } = props;

    return (
        <div className='cardContainer'>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <a href="https://wa.me/5492612421929" target='_blank' rel="noreferrer" className="btn btn-primary">Consultanos por Whatsapp</a>
            </div>
        </div>
    )
}

export default Item