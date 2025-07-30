import axiosInstance from '@/connection/api';

export const ContactService = {
  contact: async (payload: ContactPayload) => {
    try {
      const response = await axiosInstance.post('/contact', payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
