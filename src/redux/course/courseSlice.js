// src/redux/course/courseSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import axios from "axios";


// create course
export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { course } = getState().courses;

      const res = await api.post("/courses/create", {
        title: course.title,
        category: course.category,
        level: course.level,
        language: course.language,
        overview: course.overview,
        thumbnail: course.thumbnail,
        sections: course.sections || [],
        price: course.price || 0,
        discount: course.discount || 0,
      });
        console.log("Course created:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error creating course:", error);
      return rejectWithValue(error.response?.data);
    }
  }
);



export const fetchMyCourses = createAsyncThunk(
  "course/fetchMyCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/courses/my");
      console.log("Fetched courses:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


export const updateCourseback = createAsyncThunk(
  "course/updateCourse",
  async ({ courseId, courseData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/courses/${courseId}`, courseData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// add section

export const addSectionback = createAsyncThunk(
  "course/addSection",
  async ({ courseId, sectionData }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/courses/${courseId}/sections`, sectionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// add lecture
export const addLectureback = createAsyncThunk(
  "course/addLecture",
  async ({ courseId, lectureData }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/courses/${courseId}/lectures`, lectureData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


export const publishCourse = createAsyncThunk(
  "course/publishCourse",
  async (courseId, {  rejectWithValue }) => {
    try {
      // const { courseId } = getState();
      const res = await api.put(`/courses/${courseId}/publish`);
      console.log("Course created:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error creating course:", error);
      return rejectWithValue(error.response.data);
    }
  },
);


export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/courses/${courseId}`);
      return response.data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  step: 1,
  loading: false,
  published: false,
  error: null,
  myCourses: [],
  course: {
    title: "",
    category: "",
    level: "Beginner",
    language: "",
    thumbnail: "",
    overview: "",
  },

  sections: [
    // {
    //   title: "Introduction",
    //   lectures: [{ title: "Welcome", video: null }]
    // }
  ],

  pricing: {
    price: "",
    discount: "",
  },
};

// slice +Reducer
const courseSlice = createSlice({
  name: "course",
  initialState,

  reducers: {
    // 🔸 step control
    nextStep(state) {
      state.step += 1;
    },

    prevStep(state) {
      state.step -= 1;
    },

    // 🔸 course basic info
    updateCourse(state, action) {
      state.course = {
        ...state.course,
        ...action.payload,
      };
    },

    // 🔸 section handling
    addSection(state, action) {
      state.sections.push({
        title: action.payload,
        lectures: [],
      });
    },

    addLecture(state, action) {
      const { sectionIndex, lecture } = action.payload;
      state.sections[sectionIndex].lectures.push(lecture);
    },

    // 🔸 pricing
    updatePricing(state, action) {
      state.pricing = {
        ...state.pricing,
        ...action.payload,
      };
    },

    // 🔸 reset after publish
    resetCourse() {
      return initialState;
    },
  },

  // 👇 THIS IS NEW (add only)
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;  
        state.course = action.payload.course;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(publishCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(publishCourse.fulfilled, (state) => {
        state.loading = false;
        state.published = true;
      })
      .addCase(publishCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMyCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.myCourses =  action.payload.courses || [];// 🔥 IMPORTANT
      })
      .addCase(fetchMyCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.myCourses = state.myCourses.filter(
          (course) => course._id !== action.payload._id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCourseback.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCourseback.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.course;
      })
      .addCase(updateCourseback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addSectionback.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSectionback.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.course;
      })
      .addCase(addSectionback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addLectureback.pending, (state) => {
        state.loading = true; 
      })
      .addCase(addLectureback.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.course;
      })
      .addCase(addLectureback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  nextStep,
  prevStep,
  updateCourse,
  addSection,
  addLecture,
  updatePricing,
  resetCourse,

} = courseSlice.actions;

export default courseSlice.reducer;