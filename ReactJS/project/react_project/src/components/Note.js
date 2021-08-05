import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import env from '../env.json'


function Note(){

  let { noteURL } = useParams();
  const [noteText, setNoteText]= useState('');
  const [lineClass, setLineClass]= useState('hide');
  const [formClass, setFormClass]= useState('hide'); //скрываем
  const [errorClass, setErrorClass]= useState('hide');  //скрываем


  useEffect(() => {
    if ( noteURL !== undefined) {
        fetch (env.urlBackend, {
          method : 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({"url": noteURL })
    })
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            if(response.result) {
                setNoteText(response.note);
                setLineClass('');
                setFormClass('hide');
                setErrorClass('hide');
             }
             else if(!response.result){
              setLineClass('hide');
              setFormClass('hide');
              setErrorClass('');
             }
        })
     }else{

     } 
  }, []);
  function getNote(event){
event.preventDefault();
let url = event.target.elements.url.value;
console.log(url);
url = url.trim();
     if (url === '') {
         alert ('Заполните поле');
         return false;
     }
     noteURL= url;
     window.location.href=env.url+'/'+url
   }
  

  return(
    <div>
      <div className={lineClass}></div>
<div>
  <h4>Note:</h4>
  <div>{noteText}</div>
  <div className={errorClass}>
<p>Произошла ошибка- попробуйте пожалуйста еще разочек!)</p>
  </div>
  <div className={formClass}>
    <form action="" onSubmit={getNote}>
      <lebel htmlFor="url">Введите hash заметки </lebel>
      <input type="text"name="url" id="url"  className="form-control"/>
      <button type='submit' className="btn-primary"> Искать Note </button>
    </form>
    
     </div>
</div>
    </div>
  )
}
export default Note;