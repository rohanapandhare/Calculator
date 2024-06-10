import styles from '../css/display.module.css';
export default function Display({res})
{
    return <>
    <h>Calculator</h>
    <input type="text" value={res} className={styles.display}/>
    </>
}