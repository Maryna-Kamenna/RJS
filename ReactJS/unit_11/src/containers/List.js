function List(data) {
  console.log(data);

  return (
    <>
      <div>
        <ul>
          {data.users}
          {data.users.map((item) => (
            <li key={item.index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default List