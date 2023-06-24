import React from 'react';
import Todo from './Todo';
import Clock from './Clock';
import Weather from './Weather';
import styles from './App.module.css';

function App() {
  const [color, setColor] = React.useState("tomato");
  const changeColor = () => {
    const deg = Math.round(Math.random() * 360);
    const r1 = Math.round(Math.random() * 255);
    const g1 = Math.round(Math.random() * 255);
    const b1 = Math.round(Math.random() * 255);
    const t1 = Math.round(Math.random() * 100);

    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);
    const t2 = Math.round(Math.random() * 100);

    const percent = Math.round(Math.random() * 100);

    const option = `linear-gradient(${deg}deg, rgba(${r1},${g1},${b1},${t1}), rgba(${r2},${g2},${b2},${t2}) ${percent}%)`;
    console.log(option);
    setColor(option);
    console.log(color);
};

  const onClick = ()=> {
    changeColor();
  }

  return (
    <div className={styles.App} style={{background:`${color}`,}}>
      <button onClick={onClick}>change background Color</button>
      <div>
        <Clock/>
        <Weather/>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
