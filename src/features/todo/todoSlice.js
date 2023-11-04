import {createSlice,nanoid,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    users:[{id:1, title: "shirt", price:"$100",image:""}]
}
export const fetchProducts = createAsyncThunk('product/fetchProducts',()=>{
    return axios.get('https://dummyjson.com/products')
    .then((response)=>response.data.map((user)=>user.id))
})
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const user = {
                id: nanoid(),
                title: action.payload.title,
                price: action.payload.price,
                image: action.payload.image
            };
            state.users.push(user);
        },
        removeItem: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        updateItem: (state, action) => {
            const { id, title, price, image } = action.payload;
            const userToUpdate = state.users.find((user) => user.id === id);

            if (userToUpdate) {
                userToUpdate.title = title;
                userToUpdate.price = price;
                userToUpdate.image = image;
            }
        }
    }
});

export const {addItem, removeItem,updateItem} = userSlice.actions

export default userSlice.reducer