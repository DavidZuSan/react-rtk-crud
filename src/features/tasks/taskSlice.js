import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'Aprender Redux',
        description: 'Aprender Redux con el curso curso en Youtube',
        completed: false
    },
    {
        id: 2,
        title: 'Aprender Next.js',
        description: 'Aprender Next.js con el curso curso en Youtube',
        completed: false
    },
    {
        id: 3,
        title: 'Aprender GraphQL',
        description: 'Aprender GraphQL con el curso curso en Youtube',
        completed: false
    },
    {
        id: 4,
        title: 'Aprender Node.js',
        description: 'Aprender Node.js con el curso curso en Youtube',
        completed: false
    },
    {
        id: 5,
        title: 'Aprender MoongoDB',
        description: 'Aprender MoongoDB con el curso curso en Youtube',
        completed: false
    },
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    },
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer