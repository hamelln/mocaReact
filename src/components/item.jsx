import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { name, img, desc, link} = this.props.item;
        return (
            <li className="restaurant-item">
                <div className="restaurant-item-inner-wrap">
            <a href={link} className="project" target="blank" data-type="noodle">
                <img src={img} alt="github" className="project__img"/>
                <div className="project__description">
                    <h3>{name}</h3>
                    <span>{desc}</span>
                </div>
            </a>
            </div>
            </li>
        );
    }
}

export default Item;