import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            console.log(data);
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minus: (state, data) => {
            console.log(data);
            let articul = data.payload;
            if (state.value[articul] - 1 > 0) {
                state.value[articul]--;
            }
        },
        // delete: (state, data) => {
        //     console.log(data);
        //     let articul = data.payload;
        //     if (state.value[articul] === undefined) state.value[articul] = 0;

    }
});

export const { increment, minus } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;