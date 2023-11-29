'use client'
import price from './data.js';
export default function Cart() {
    let items = ['그램', '맥']
    let cards = {
        '현대카드': '현대카드 무이자 할부 5개월!',
        '롯데카드': '롯데카드 무이자 할부 12개월!',
        '신한카드': '신한카드 무이자 할부 9개월!'
    }
    
    let colors = {
        red: 'red',
        blue: 'blue'
    }
    
    return (
        <div>
            <h4 className="title">Cart</h4>
            <Banner cards={cards}/>
            <CartItem items={items}/>
            <Button colors={colors}/>
        </div>
    )
} 


function Banner(props) {
    let cardName = '신한카드'
    return (
        <h1>{props.cards[cardName]}</h1>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.items}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Button(props) {
    return (
        <button style={{background: props.colors.red, color: '#fff'}}>버튼 컴포넌트</button>
    )
}