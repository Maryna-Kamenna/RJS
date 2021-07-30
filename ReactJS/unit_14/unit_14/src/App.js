import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [text, setText] = useState('');
  const [t1, setTask1] = useState();
  const [t2, setTask2] = useState();
  const [t3, setTask3] = useState();

  function task() {

    fetch("http://localhost:8888", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({})
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setText(response)
      })
  }

  function task1() {

    fetch("http://localhost:8888/api.php", {
      method: 'POST',
      headers: {
        'content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setTask1(response)
      })
  }


  function task2(event) {
    event.preventDefault();
    let n1 = event.target[0].value;
    let n2 = event.target[1].value;
    console.log(n1, n2)

    fetch('http://localhost:8888/api.php', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-from-urlencoded'
      },
      body: JSON.stringify({
        action: 2,
        num1: n1,
        num2: n2,
      })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setTask2(response)
      })
  }

  function task3(event) {

  }

  function task4(event) {

  }

  function task5(event) {

  }

  return (
    <>
      <div>
        <h1>ItGid.info</h1>
        <button onClick={task}>GO</button>
        <p>{text}</p>
      </div>
      <hr />

      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />

      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div><input type="number" name="num1" defaultValue="30" /></div>
          <div><input type="number" name="num2" defaultValue="44" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />

      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div><input type="text" name="filename" /></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t3}</p>
      </div>
      <hr />

      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{ }</p>
      </div>
      <hr />

      <div>
        <h2>Получение курса валют</h2>
        <form action="" onSubmit={task5}>
          <button type="sumbit">Push</button>
        </form>
        <ul></ul>
      </div>
    </>
  );
}

export default App;
