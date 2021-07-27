const users = (state = [], action) => { // ввод даных в хранилище
    switch (action.type) {
        case 'ADD_USER':
            console.log('we add new user');
            console.log(state);
            return [
                ...state,
                {
                    passport: action.passport,
                    name: action.name,
                    age: action.age,
                },
            ]
        default:
            return state
    }
}

export default users;