import React, { useState } from 'react';
import Comment2ListHook from './Comment2ListHook';



function Comment2Hook() {
    const [data, setData] = useState([]);

    function selectHendler(event) {
        console.log(event.target.value);

        fetch('https://jsonplaceholder.typicode.com/posts/' + event.target.value + '/comments')

            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            });

    
    };

    return (
        <>
            <div>
                <p>Choose post ID:</p>
                <select onChange={selectHendler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <Comment2ListHook data={data} />
                </div>
            </div>
        </>
    )
}


export default Comment2Hook