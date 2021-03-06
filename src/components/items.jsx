import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
    render() {
        return (
            <div className="items">
                <section id="work" className="section">
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

export default Items;