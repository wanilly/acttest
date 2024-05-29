import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const initwork = () => {
    return ['홍길동', '김민수']; // 초기
  };

  const [names, setNames] = useState(() => {
    return initwork();
  });

  // 초기값은 랜더링 될떄마다 넣으면 가벼운 작업은 괜찮지만, 큰 작업은 계속 랜더링을 하기에 비효율적임
  // 한번만 랜더링 하도록 처리 -> useState 안에 콜백을 넣어준다

  
  // input 트래킹
  const [input, setInput] = useState('');

  const [time, setTime] = useState(1); //배열 형태로 반환

  // handle 함수
  const handleclick = () => {
    let newt;

    if(time >24) {
      newt = 1;
    } else {
      newt = time +1;
    }
    setTime(newt);
  }


  const handlechange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const handleinput = () => {
    setNames( (prevState) => {
      return([input, ...prevState])
    });
  };


  return (
    <div>
        <span>현재시간: {time}</span>
        <span></span>
        <button onClick={handleclick}>Update</button>
        <br></br>
        <input type='text' value={input} onChange={handlechange}></input>
        <button onClick={handleinput}>Upload</button>
        
        {names.map( (name, index) => {
          return <p key={index}>{name}</p>
        })}
    </div>
  );
}

export default App;
