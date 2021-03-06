import React, { Component } from 'react';

class Work extends Component {

    render() {

        const image = this.state.imageList[0].path;

        return (
            
    <section id="work" className="section">
    <div className="section__container">
        <h1>New</h1>
        <h3>요즘 뜨는 가게</h3>
        <div className="work__categories">
            <button className="category__btn selected" data-filter="*">
                모든 가게<span className="category__count">6</span>
            </button>
            <button className="category__btn" data-filter="noodle">
                면<span className="category__count">3</span>
            </button>
            <button className="category__btn" data-filter="rice">
                밥<span className="category__count">2</span>
            </button>
            <button className="category__btn" data-filter="etc">
                기타<span className="category__count">1</span>
            </button>
        </div>

        <div className="work__projects">
            <a href="rest_info.html" className="project" target="blank" data-type="noodle">
                <img src={image} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>정왕동 키햐아</h3>
                    <span>일식, 덮밥</span>
                </div>
            </a>
            {/* <a href="" className="project" target="blank" data-type="rice">
                <img src={require(`${image}`)} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>정왕동 그루</h3>
                    <span>텐동</span>
                </div>
            </a>
            <a href="" className="project" target="blank" data-type="noodle">
                <img src={require(`${image}`)} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>정왕동 켄홈</h3>
                    <span>이자카야, 라멘</span>
                </div>
            </a>
            <a href="" className="project" target="blank" data-type="rice">
                <img src={require(`${image}`)} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>Github Site</h3>
                    <span>Java Coding with HTML and CSS</span>
                </div>
            </a>
            <a href="" className="project" target="blank" data-type="noodle">
                <img src={require(`${image}`)} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>Github Site</h3>
                    <span>Java Coding with HTML and CSS</span>
                </div>
            </a>
            <a href="" className="project" target="blank" data-type="etc">
                <img src={require(`${image}`)} alt="Github" className="project__img"/>
                <div className="project__description">
                    <h3>Github Site</h3>
                    <span>Java Coding with HTML and CSS</span>
                </div>
            </a> */}
        </div>
    </div>
</section>

            );
    }
}
    export default Work;