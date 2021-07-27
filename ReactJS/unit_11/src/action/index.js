export const addNewUser = (passport, name, age) => ({// action из AddUser
  type: 'ADD_USER',// что я хочу делать
  passport, // что я буду посылать
  name,
  age
});