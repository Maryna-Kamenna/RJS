import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}// это корзина- она пустая
    },
    reducers: {
        increment: (state, data) => { // стейт и даные по которому кликнули
            console.log(data);
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minus: (state, data) => {
            let articul = data.payload;
            state.value[articul]--
            if (state.value[articul] === 0) {
                delete state.value[articul]
            }
            console.log(state.value[articul]);
        },
        del: (state, data) => {
            let articul = data.payload;
            delete state.value[articul];
        }
    }
});

export const { increment, minus, del } = cartSlice.actions;
export const selectCart = state => state.cart.value; // название хранилища даных
export default cartSlice.reducer;