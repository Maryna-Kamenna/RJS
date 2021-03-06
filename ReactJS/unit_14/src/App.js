import './App.css';
import React, { useState, } from 'react';




function App() {

  const [t1, setTask1] = useState();
  const [t2, setTask2] = useState();
  const [t3, setTask3] = useState();
  const [t4, setTask4] = useState();
  const [t5, setTask5] = useState();


  function task1() {
    fetch("http://localhost:8888/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
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
    //console.log(event);
    let n1 = event.target[0].value
    let n2 = event.target[1].value

    fetch("http://localhost:8888/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 2,
        num1: n1,
        num2: n2
      })
    })
      .then(response => response.text())
      .then(response => {
        setTask2(response)
      })
  }


  function task3(event) {
    event.preventDefault();
    console.log(event);
    let fn1 = event.target[0].value
    let fd2 = event.target[1].value

    fetch("http://localhost:8888/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        action: 3,
        filename: fn1,
        filedata: fd2
      })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        if (response > 0) {
          setTask3(<a href={`http://localhost:8888/files/${fn1}`}> Скачать </a>)
        } else {
          return ' '
        }

      })
  }

  function task4(event) {
    event.preventDefault();
    fetch("http://localhost:8888/api.php", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 4 })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response);
        setTask4(response)
      })
  }

  function task5(event) {
    event.preventDefault();
    fetch("http://localhost:8888/api.php", {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 5 }),
    })
      .then((response) => response.json())
      .then((response) => setTask5
        (response.map((item) => (
          <li> {item.ccy} - {item.buy} </li>))
        )
      );
  }

  return (
    <div>
      <h1>ItGid.info</h1>
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
        <p>{t4}</p>
      </div>
      <hr />


      <div>
        <h2>Получение курса валют</h2>
        <form action="" onSubmit={task5}>
          <button type="sumbit">Push</button>
        </form>
        <ul> {t5}</ul>
      </div>

    </div>
  );
}

export default App;
