import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModalState {
    phoneNumber: string,
    commentOrder: string
}

const initialState: IModalState = {
    phoneNumber: '',
    commentOrder: ''
}


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setPhoneNumber(state, action: PayloadAction<string>) {
            state.phoneNumber = action.payload;
        },
        setCommentOrder(state, action: PayloadAction<string>) {
            state.commentOrder = action.payload;
        },
    }
})

export const {setPhoneNumber, setCommentOrder} = modalSlice.actions
export default modalSlice.reducer;