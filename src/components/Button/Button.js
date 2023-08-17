 import styles from './Button.module.scss';

const Button = props => {
    return ( <div>
    <button className={styles.button} onClick={props.start}>Start</button> 
    <button className={styles.button} onClick={props.stop}>Stop</button> 
    <button className={styles.button} onClick={props.reset}>Reset</button>
    </div>
    );
}

export default Button;