import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), name: "Roman Karki" },
  { id: nanoid(), name: "Suman Karki" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state) => state.users;

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
