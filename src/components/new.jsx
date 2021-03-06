import React, { Component } from 'react';
import title from '../imgs/title.jpg';

class New extends Component {
    render() {
        return (
                    <section id="new">
        <div className="new__container">
            <img src={title} alt="new Restaurant" className="new__avatar"/>
            <h1 className="new__title"> Find Our Restaurant </h1>
            <h2 className="new__description">입맛대로, 취향대로</h2>
        </div>
    </section>
        );
    }
}

export default New;