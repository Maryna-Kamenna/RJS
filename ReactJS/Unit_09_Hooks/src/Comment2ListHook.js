import React,{useState} from 'react';


function Comment2ListHook(props) {

    const [data, setData] = useState([]);


  //   useEffect(() => {
  //     setData(props.data);
  // }, [props])

    function onlyEven() {
      let a = data;
      let evenPost = a.filter((el, index) => {
          if ((index + 1) % 2 === 0) {
              return el
          }
      })
      setData(evenPost);
    }

  
    return (
        <>
      <div>
          <div>
          <button onClick={onlyEven}>Only even comments</button>
           </div>
            {data.map((el, index) => (
          <section key={el.id}>
            <p><b>{index + 1}. {el.email}</b></p>
            <p>{el.body}</p>
          </section>
        ))}
      </div>
        </>
    )
}


export default Comment2ListHook
