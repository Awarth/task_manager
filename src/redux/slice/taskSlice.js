import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  showCard: false,
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    openCard: (state) => {
      state.showCard = true;
    },
    closeCard: (state) => {
      state.showCard = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      console.log("Payload:", action.payload);
      console.log("Index found:", index);

      if (index !== -1) {
        state.tasks[index] = action.payload;
        console.log("Updated task:", state.tasks[index]);
        saveToLocalStorage(state.tasks);
      } else {
        console.error("Task not found for editing");
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage(state.tasks);
    },
    completeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed;
        saveToLocalStorage(state.tasks);
      }
    },
  },
});

export const {
  openCard,
  closeCard,
  addTask,
  editTask,
  deleteTask,
  completeTask,
} = taskSlice.actions;
export default taskSlice.reducer;
