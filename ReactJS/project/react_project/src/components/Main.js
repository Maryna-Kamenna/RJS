function Main() {
    return (
        <div class="text-center container">
            <p>Here you can create notes, as well as view them using hash</p>
            <p>Create</p>

            <div><a href="/create" className="btn btn-primary">Create Note</a></div>
            <div><p>Or view </p></div>
            <div><a href="/note" className="btn btn-primary">View Note</a></div>
        </div>
    );
}

export default Main;