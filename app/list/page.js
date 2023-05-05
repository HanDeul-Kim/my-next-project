// Image컴포넌트 lazy loading + layout shift 줄이기 + 사이즈 최적화 
// import Image from 'next/image'
// import imgs from '/public/food0.png';
export default function List() {
    let item = ['cos', 'arket', 'soui'];
    return (
        <>
            <h4 className='title'>상품목록</h4>
            {
                item.map( (el, idx) => {
                    return (
                        <div className ='food' key={idx}>
                            <img src={`/food${idx}.png`} className="food-img"></img>
                            <h4>{el} $40</h4>
                        </div>
                    )
                })
            }
            
        </>
    )
}
