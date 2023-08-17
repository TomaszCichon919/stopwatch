import styles from './Timer.module.scss';

const Timer = (props) => {
    return (
      <div className={styles.text}>
       <span>{(props.time.h >=10)?props.time.h : "0"+ props.time.h}</span>
       <span>:</span>
       <span>{(props.time.m >=10)?props.time.m : "0"+ props.time.m}</span>
       <span>:</span>
       <span>{(props.time.s >=10)?props.time.s : "0"+ props.time.s}</span>
       <span>.</span>
       <span>{props.time.ms}</span>
      </div>
    );
}

export default Timer;