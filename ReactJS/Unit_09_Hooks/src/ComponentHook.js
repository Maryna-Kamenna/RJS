import React, { useEffect, useState } from 'react';


function CommentHook(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            });
    }, []);



    return (

        <div>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>

            {/* <h1>Posts</h1>
            {data.map((el, index) => (
                <section key={el.id}>
                    <h2>{index + 1}. {el.title}</h2>
                    <p>{el.body}</p>
                </section>
            ))} */}
        </div>

    )
}


export default CommentHook
