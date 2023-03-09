import api from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pagesData",
  initialState: {
    faqData: [],
    faqDataError: null,
    faqLoading: false,
    aboutData: [],
    aboutDataError: null,
    aboutLoading: false,
    privacyData: [],
    privacyDataError: null,
    privacyLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaqPage.fulfilled, (state, action) => {
      state.faqData = action.payload.data;
      state.faqLoading = false;
    });

    builder.addCase(getFaqPage.rejected, (state, action) => {
      state.faqDataError = true;
      state.faqLoading = false;
    });

    builder.addCase(getFaqPage.pending, (state, action) => {
      state.faqLoading = true;
    });
    builder.addCase(getAboutPage.fulfilled, (state, action) => {
      state.aboutData = action.payload.data;
      state.aboutLoading = false;
    });

    builder.addCase(getAboutPage.rejected, (state, action) => {
      state.aboutDataError = true;
      state.aboutLoading = false;
    });

    builder.addCase(getAboutPage.pending, (state, action) => {
      state.aboutLoading = true;
    });
    builder.addCase(getPrivacyPage.fulfilled, (state, action) => {
      state.privacyData = action.payload.data;
      state.privacyLoading = false;
    });

    builder.addCase(getPrivacyPage.rejected, (state, action) => {
      state.privacyDataError = true;
      state.privacyLoading = false;
    });

    builder.addCase(getPrivacyPage.pending, (state, action) => {
      state.privacyLoading = true;
    });
  },
});

export const getFaqPage = createAsyncThunk("pages/faq", async () => {
  const res = await api.get("content/faq");
  return res.data;
});
export const getPrivacyPage = createAsyncThunk("pages/privacy", async () => {
  const res = await api.get("content/privacy");
  return res.data;
});
export const getAboutPage = createAsyncThunk("pages/about", async () => {
  const res = await api.get("content/about");
  return res.data;
});

export const {} = pageSlice.actions;

export default pageSlice.reducer;
