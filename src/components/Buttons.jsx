
import styles from '../css/button.module.css'
export default function Buttons({onBtnClick})
{
    
    const buttons = [
        'C', '±', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
      ];
    return <>
    <div className={styles.btnn}>
     {buttons.map((btn,index) => (
        <button className={styles.btn} onClick={()=> onBtnClick(btn)}>
            {btn}
        </button>
     ))}
     </div>
    </>
}