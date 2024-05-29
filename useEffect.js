//import logo from './logo.svg';
//import './App.css';

import { useState, useEffect } from 'react';

function App() {

  
  // timer 만들기
  const Timer = (props) =>  {
    useEffect(() => {

      const timer = setInterval(() => {
        console.log("타이머 돌아가는중 ...");
      }, 1000);


      // 타이머 클린 시켜줌
      return () => {
        clearInterval(timer);
        console.log("타이머가 종료됨!!!");
      }
    }, []);


    return (

      <div>
        <span>타이머가 시작됨!!!</span>
      </div>
      
    );
  
  };

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handlecount = () => {
    setCount(count +1);
  }

  const handleinit = () => {
    setCount(0);
  }

  const handleInput = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {

  }, []); // 마운트 될 떄만 업데이트
  
  useEffect(() => {

  }, [name]); // name 변화가 일어나면 업데이트
  
  //랜더링 매번 실행됨 
  useEffect(() => {

  }); // name 변화가 일어나면 업데이트


  // true 일때만 보여주기
  const [showtimer, setShowtimer] = useState(false);
  
  return (
    <div>
        <span>count:{count}</span>
        <br></br>
        <button onClick={handlecount}>UP</button>
        <button onClick={handleinit}>Init</button>

        <br></br>
        <input type='text' value={name} onChange={handleInput}/>
        <span>name: {name}</span>
        <br/>
        {showtimer && <Timer/>}
        <button onClick={() => setShowtimer(!showtimer)}>TIMER</button>
    </div>
  );
}

export default App;
