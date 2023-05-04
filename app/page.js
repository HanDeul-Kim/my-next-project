import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
    let name = 'kim'
    return (
        <>
            <h4 className="title">쿠팡후레시</h4>
            <p className="title-sub">by dev {name}</p>
        </>
    )
}
