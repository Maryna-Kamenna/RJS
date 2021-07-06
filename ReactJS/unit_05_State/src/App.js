import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  // task 1
  let myRef1 = React.createRef();
  let [st1, setSt1] = useState('');

  function task1() {
    setSt1(myRef1.current.value);
  }

  // task 2
  let myRef2 = React.createRef();
  let [st2, setSt2] = useState('');

  function task2() {
    let inc = st2
    inc++
    setSt2(inc)
  }

  // task 3
  let myRef3 = React.createRef();
  let [st3, setSt3] = useState('');

  function task3(event) {
    setSt3(event.target.value)
  }

  // task 4
  let [st4, setSt4] = useState('');

  function task4() {
    let count4 = st4
    count4++
    setSt4(count4)
  }

  // task 5 
  let myRef5 = React.createRef();
  let [st5, setSt5] = useState('');

  function task5(event) {
    if (event.target.checked) {
      setSt5(myRef5.current.value)
    } else {
      setSt5(0)
    }
  }

  // task 6 
  let myRef6 = React.createRef();
  let [st6, setSt6] = useState('');

  function task6() {
    setSt6(myRef6.current.value)
  }

  // task 7
  let myRef7 = React.createRef();
  let [st7, setSt7] = useState('');
  function task7() {

    function t6(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    function t7() {
      myRef7.current.style.backgroundColor = `rgb(${t6(0, 255)},${t6(0, 255)},${t6(0, 255)})`
    }
    setSt7(myRef7.current.backgroundColor = t7());
  }

  // task 8
  let myRef8 = React.createRef();
  let [st8, setSt8] = useState('');

  function task8(event) {
    if (isFinite(event.key)) {
      console.log(myRef8.current.value);
      st8 += 1
    } else {
      st8 += 0
    }
    setSt8(st8)
  }

  // task 9
  let myRef9 = React.createRef();
  let [st9, setSt9] = useState('');

  function task9() {
    setSt9(myRef9.current.value)
  }

  // task 10
  let myRef10 = React.createRef();
  let [st10, setSt10] = useState('');
  function task10() {
    console.log(myRef10.current.value);
    let inp = myRef10.current.value;
    st10 = inp;
    setSt10(st10)
  }


  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input ref={myRef1} type="text" />
        <button onClick={task1} className="task-1" >Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div ref={myRef2} onMouseEnter={task2} className="task-2"></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onInput={task3} ref={myRef3} type="text" className="task-3" />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} ref={myRef5} type="checkbox" value="55" />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={myRef6} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={myRef7}></div>
        <button className="task-7" onClick={task7} >Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" ref={myRef8} onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" ref={myRef9} onInput={task9} ></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={myRef10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div> {st10}Тут выводим - форма вывода любая!</div>
      </section>
    </>
  );
}

export default App;

