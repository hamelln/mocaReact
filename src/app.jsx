import React, { Component } from 'react';
import './app.css';
import Items from './components/items';
import Navbar from './components/navbar';
import New from './components/new';
import Footer from './components/footer';
import Best from './components/best';
import Steady from './components/steady';

class App extends Component {

  state = {
    items: [
        {id: 1, name: '키햐아', img: process.env.PUBLIC_URL + '/imgs/noodle_1.jpg', title: '일식, 덮밥', desc: '일식, 덮밥', link: 'https://www.naver.com'},
        {id: 2, name: '그루', img: process.env.PUBLIC_URL + '/imgs/noodle_2.jpg', title: '텐동', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 3, name: '켄홈', img: process.env.PUBLIC_URL + '/imgs/noodle_3.jpg', title: '이자카야, 라멘', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 4, name: '국수나무', img: process.env.PUBLIC_URL + '/imgs/rice_1.jpg', title: '국수', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 5, name: '본죽', img: process.env.PUBLIC_URL + '/imgs/rice_2.jpg', title: '죽', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 5, name: '본죽', img: process.env.PUBLIC_URL + '/imgs/rice_2.jpg', title: '죽', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 5, name: '본죽', img: process.env.PUBLIC_URL + '/imgs/rice_2.jpg', title: '죽', desc: '맛있습니다.', link: 'https://www.naver.com'},
        {id: 6, name: '이삭 토스트', img: process.env.PUBLIC_URL + '/imgs/etc_1.jpg', title: '토스트', desc: '맛있습니다.', link: 'https://www.naver.com'},
    ],
  };  

  render() {
    return(
    <>
    <Navbar></Navbar>
    <New></New>
    <Items items={this.state.items}/>
    <Best items={this.state.items}/>
    <Steady items={this.state.items}/>
    <Footer></Footer>
    </>
    );
}
}

export default App;
