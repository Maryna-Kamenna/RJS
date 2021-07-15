import React, { useState } from 'react';


function CommentHook() {
    const [data, setData] = useState([]);

     function selectHendler (event) {
    console.log(event.target.value);

    fetch('https://jsonplaceholder.typicode.com/posts/'+ event.target.value + '/comments')

            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            });
        };

    return (
<>
          <p> Выберите номер ID</p>
      <select onChange={selectHendler} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

          <div>
          <h1>Комент</h1>
          {data.map((el, index) => (
              <section key={el.id}>
                  <h2>{index + 1}. {el.title}</h2>
                  <p>{el.body}</p>
              </section>
          ))}
      </div>
      </>
    )
 }


export default CommentHook
