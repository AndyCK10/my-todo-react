import './icon.css'
import style from './icon.module.css'

export function IconA() {
    return (
        <>
        <div className='blue'>Icon A</div>
        <div className={style.green}>Icon A</div>
        </>
        
    )
}

export function IconB() {
    return (
        <>
        <div className='red'>Icon B</div>
        <div className={style.pink}>Icon B</div>
        </>
        
    )
}