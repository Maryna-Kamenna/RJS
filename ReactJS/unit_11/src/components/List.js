function List(data) {
  console.log(data.user);

  return (
    <>
      <div>
        <ul>
          {data.user.map((item, index) => (
            <li key={index}> Passport : {item.passport}, Name : {item.name}, Age : {item.age}</li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default List