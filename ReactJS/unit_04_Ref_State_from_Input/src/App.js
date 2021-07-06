import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  //task 4
  let count4 = 0;

  //task 5
  let text5 = React.createRef();
  let out5 = React.createRef();

  //task 6
  let out6 = React.createRef();
  let text6 = React.createRef();
  let [outtext, setOuttext] = useState('7');

  //task 7
  let text7 = React.createRef();
  let [outtext7, setOuttext7] = useState('');

  //task 8
  let text8 = React.createRef();
  let out8 = React.createRef();

  //task 9
  let text9 = React.createRef();
  let [outtext9, setOuttext9] = useState('');

  //task 10
  let text10 = React.createRef();


  function task1() {
    console.log('task-2');
  }


  function task2(event) {
    event.target.classList.add('active')
  }


  function task3(event) {
    console.log(event.target.value);
  }


  function task4() {
    count4++;
    console.log(count4);
  }


  function task5(event) {
    if (event.target.checked) {
      out5.current.innerHTML = text5.current.value;
    } else {
      out5.current.innerHTML = 0;
    }
  }


  function task6() {
    //out6.current.innerHTML = text6.current.value
    setOuttext(text6.current.value)
  }


  function task7() {

    function t6(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    function t7() {
      text7.current.style.backgroundColor = `rgb(${t6(0, 255)},${t6(0, 255)},${t6(0, 255)})`
    }
    setOuttext7(text7.current.backgroundColor = t7());
  }


  function task8(event) {
    console.log(event.key);
    if (isFinite(event.key)) {
      //console.log(text8.current.value);
      out8.current.innerHTML += 1
    } else {
      out8.current.innerHTML += 0
    }
  }


  function task9() {
    setOuttext9(text9.current.value);

  }

  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(text10.current.value)
    console.log(ar10);
  }


  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={text5} />
        <div className="out-5" ref={out5}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={text6} onChange={task6} >
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={out6}>{outtext}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={text7}>{outtext7}</div>
        <button className="task-7" onClick={task7} >Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={text8}></input>
        <div className="out-8" ref={out8} ></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={text9}></input>
        <div className="out-9">{outtext9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={text10} ></input>
        <button className="task-10" onClick={task10}  >Push </button>
      </section>
    </>
  );
}

export default App;
