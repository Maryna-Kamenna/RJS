import React from "react";
import { useState } from "react";
import env from  '../env.json';


function Create(){

  const [url, setUrl]=useState(' ');

  let sendData = (obj) =>{
     fetch(env.urlBackend, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            if(response.result){
                setUrl(env.url+'/'+ response.url)
      }
    })
  }

      let loadDataFromForm = (event) =>{
         event.preventDefault();
         note = note.trim();
           if(note === '') {
           alert('Заолните поле');
}
sendData ({"note" : note })
  }


  return (

    <div>
        <form onSubmit={loadDataFromForm}> 
            <label htmlFor=""> Введите заметку</label>
            <textarea name="note" id="note" defaultValue='Test'> </textarea>
            <button type='submit'> Создать </button>
        </form>
    </div>
  )
}
export default Create;