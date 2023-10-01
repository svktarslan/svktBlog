import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface BlogDataType {
  data: {
    id: number;
    title: string;
    text: string;
    createdBy: string;
    imageUrl: string;
    trends: boolean;
  }[];
}

const initialState: BlogDataType = {
  data: [
    {
      id: 1,
      title: 'Başlık 1',
      text: 'Metin 1',
      createdBy: 'Oluşturan 1',
      imageUrl: 'https://example.com/image1.jpg',
      trends: false,
    },
    {
      id: 2,
      title: 'Başlık 2',
      text: 'Metin 2',
      createdBy: 'Oluşturan 2',
      imageUrl: 'https://example.com/image2.jpg',
      trends: true,
    },
    {
      id: 3,
      title: 'Başlık 3',
      text: 'Metin 3',
      createdBy: 'Oluşturan 3',
      imageUrl: 'https://example.com/image3.jpg',
      trends: false,
    },
    {
      id: 4,
      title: 'Başlık 4',
      text: 'Metin 4',
      createdBy: 'Oluşturan 4',
      imageUrl: 'https://example.com/image4.jpg',
      trends: true,
    },
    {
      id: 5,
      title: 'Başlık 5',
      text: 'Metin 5',
      createdBy: 'Oluşturan 5',
      imageUrl: 'https://example.com/image5.jpg',
      trends: false,
    },
    {
      id: 6,
      title: 'Başlık 6',
      text: 'Metin 6',
      createdBy: 'Oluşturan 6',
      imageUrl: 'https://example.com/image6.jpg',
      trends: true,
    },
    {
      id: 7,
      title: 'Başlık 7',
      text: 'Metin 7',
      createdBy: 'Oluşturan 7',
      imageUrl: 'https://example.com/image7.jpg',
      trends: false,
    },
    {
      id: 8,
      title: 'Başlık 8',
      text: 'Metin 8',
      createdBy: 'Oluşturan 8',
      imageUrl: 'https://example.com/image8.jpg',
      trends: true,
    },
    {
      id: 9,
      title: 'Başlık 9',
      text: 'Metin 9',
      createdBy: 'Oluşturan 9',
      imageUrl: 'https://example.com/image9.jpg',
      trends: false,
    },
    {
      id: 10,
      title: 'Başlık 10',
      text: 'Metin 10',
      createdBy: 'Oluşturan 10',
      imageUrl: 'https://example.com/image10.jpg',
      trends: true,
    },
  ],
};

export const blogData = createSlice({
  name: 'blogData',
  initialState,
  reducers: {
    deleteData: (state, action) => {
      state.data = state.data.filter(x => x.id !== action.payload);
    },
    setReduxData: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    updateReduxData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {deleteData, setReduxData, updateReduxData} = blogData.actions;

export default blogData.reducer;
