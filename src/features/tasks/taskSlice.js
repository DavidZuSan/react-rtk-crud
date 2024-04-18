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
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {

        },
    }
})

export default taskSlice.reducer