import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseData: {}
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseDetails: (state, { payload }) => {
      state.courseData = payload;
    }
  }
});

export const { setCourseDetails } = courseSlice.actions;
export default courseSlice.reducer;
