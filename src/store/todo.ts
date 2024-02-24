import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItemType {
  id: number;
  content: string;
}
export interface TodoStateType {
  list: TodoItemType[];
  newId: number;
}

const initialState: TodoStateType = {
  list: [
    { id: 3, content: "List 3" },
    { id: 2, content: "List 2" },
    { id: 1, content: "List 1" },
  ],
  newId: 4,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const newList = [...state.list];
      const newId = state.newId;
      const newItem = { id: newId, content: action.payload };
      newList.unshift(newItem);
      state.list = newList;
      state.newId = newId + 1;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const _list = [...state.list];
      const targetId = action.payload;
      const newList = _list.filter(({ id }) => id !== targetId);
      state.list = newList;
    },
  },
});

export const { addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
