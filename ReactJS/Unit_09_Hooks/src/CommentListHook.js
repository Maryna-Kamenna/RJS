import React from 'react';


function CommentListHook(props) {
 function onlyEven(){

 }
    return (
        <>
            <div>
                <div>
                    <button onClick={onlyEven}>Only even comments</button>
                </div>
                {props.map((el, index) => (
                    <section key={el.id}>
                        <p><b>{index + 1}. {el.email}</b></p>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </>
    )
}


export default CommentListHook
