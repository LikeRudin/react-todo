import React from "react";
import styles from "./Clock.module.css";

const Clock = () => {
    const [time, setTime] = React.useState("00:00:00");
    const [date, setDate] = React.useState("0000-00-00");

    const tikTok = ()=> {
        const clock = new Date();
        const hours = clock.getHours().toString().padStart(2, "0");
        const minutes = clock.getMinutes().toString().padStart(2, "0");
        const seconds = clock.getSeconds().toString().padStart(2, "0");
        setTime(`${hours}: ${minutes}: ${seconds}`);
    }

    React.useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDay().toString().padStart(2,"0");
        
        setDate(`${year}-${month}-${day}`);

        setInterval(tikTok, 1000);
    },[]);


    return (
        <div className={styles.Clock}>
            <div id="date"> {date} </div>
            <div id="time"> {time} </div>
        </div>
    )
    

};

export default Clock;