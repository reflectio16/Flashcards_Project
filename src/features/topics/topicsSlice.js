import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;

            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
              };
        },

        addQuizIdToTopic: (state, action) => {
            const { id, topicId } = action.payload;
            
            // Add the quiz ID to the specified topic's quizIds array
            if (state.topics[topicId]) {
              state.topics[topicId].quizIds.push(id);
            }
          }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

