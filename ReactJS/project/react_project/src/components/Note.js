//http://localhost:3000/note/y03q8eftjr6sbfdh43zl7d20
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide'); // скрываем
    const [errorClass, setErrorClass] = useState('hide'); // скрываем


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    //    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Fill the fields');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }
    function searchNote() {
        window.location.href = env.url;
    }

    return (
        <>

            <div class=" text-center container">
                <p>To find your notes, use 'hash' of yours note</p>
                <div className={lineClass}>

                    <div>{noteText}</div>
                    <div> <button type="submit" className="btn btn-primary" onClick={searchNote}>See another note</button></div>
                </div>

                <div className={errorClass}>
                    <p className="btn-primary navbar-brand">Something is wrong (. No such note was found (</p>
                </div>

                <div className={formClass}>
                    <form action="" onSubmit={getNote}>
                        <label htmlFor="url"></label>
                        <input type="text" name="url" id="url" className="form-control" placeholder="Enter hash notes" />
                        <button type="submit" className="btn btn-primary">Search note</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Note;