import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
            <section id="contact" className="section">
            <h1>문의</h1>
            <h2>vusdus91@gmail.com</h2>
            <div className="contact__links">
                <a href="" target="blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <p className="contact__rights">2020 Hyun - All rights reserved</p>
        </section>
        <button className="arrowBtn"><i className="fas fa-arrow-up"></i></button>
    </>
        );
    }
}

export default Footer;