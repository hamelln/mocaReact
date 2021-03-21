import React, { Component } from 'react';
import Item from './item';

class Steady extends Component {
    render() {
        return (
            <div className="items">
                <section id="work" className="section">
                    <h2>오래 사랑 받는 가게들</h2>
                    {this.props.items.map(item => (
                        <Item
                        key = {item.id}
                        item = {item}
                        />
                    ))}
                    </section>
            </div>
        );
    }
}

export default Steady;