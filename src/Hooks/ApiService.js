import axios from 'axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = 'http://3.110.212.158:8000';
const token = localStorage.getItem('authToken')

// Hook to list all available music details
export const useGetMusicDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/`)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Hook to create a new music or content
export const CreateMusic = async(formData) => {
console.log("FORMDATA")
console.log(formData)
  try {
    const res = await axios.post(`${BASE_URL}/api/music_details/`, formData, {
      headers: {
        Authorization: `Token ${token}`, // Include the token in the headers
      },
    });
    return res.data;
  } catch (error) {
    toast.error(error.response.data.error);

    console.error(error.response.data.error);
    return error;
  }
 
};

// Hook to get music uploads by the current logged in user
export const useGetUserUploads = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/user_uploads/`)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Hook to get recent 10 uploads
export const useGetRecentUploads = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/recent_uploads/`)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Hook to get the count of user music content
export const useGetUserMusicContentCount = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/count_user_music_content/`)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Hook to get music content count by year
export const useGetMusicContentCountByYear = (year) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(`${BASE_URL}/api/music_details/music_content_count_by_year/`, { params: { year },    headers: {
        Authorization: `Token ${token}`
      } },)
        .then(response => setData(response.data))
        .catch(error => setError(error));
    }, [year]);
console.log("YEAR")
console.log(data)
  return { data, error };
};

// Hook to filter uploads by type
export const useFilterUploadsByType = (upload_type) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/`, { params: { upload_type } })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [upload_type]);

  return { data, error };
};

// Hook to filter uploads by languages
export const useFilterUploadsByLanguages = (languages, upload_type = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = { languages };
    if (upload_type) params.upload_type = upload_type;

    axios.get(`${BASE_URL}/api/music_details/`, { params })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [languages, upload_type]);

  return { data, error };
};

// Hook to filter uploads by music name
export const useFilterUploadsByName = (music_name) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/`, { params: { music_name } })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [music_name]);

  return { data, error };
};

// Hook to filter uploads by genres
export const useFilterUploadsByGenres = (genres) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/`, { params: { genres } })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [genres]);

  return { data, error };
};

// Hook to filter uploads by multiple filters
export const useFilterUploads = (filters) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/music_details/`, { params: filters })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [filters]);

  return { data, error };
};

// Hook to get all music links
export const useGetMusicLinks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/musiclinks/`)
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Hook to get music links by music detail ID
export const useGetMusicLinksByDetail = (pk) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/musiclinks/by_music_detail/`, { params: { pk } })
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, [pk]);

  return { data, error };
};

// Hook for user registration
export const RegisterUser = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/register/`, body);
    return res.data;
  } catch (error) {
    toast.error(error.response.data.error);

    console.error(error.response.data.error);
    return error;
  }
};

// Hook for forgot password
export const useForgotPassword = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const forgotPassword = (body) => {
    axios.post(`${BASE_URL}/api/forgot-password/`, body)
      .then(response => setResponse(response.data))
      .catch(error => setError(error));
  };

  return { forgotPassword, response, error };
};

// Hook to get current user details
export const GetCurrentUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/current-user/`, {
      headers: {
        Authorization: `Token ${token}`, // Include the token in the headers
      },
    });

    return res.data;
  } catch (error) {
    console.error('Error loging user:', error);
    return error
    // throw error; // Re-throw the error so the calling function can handle it
  }
};
export const UpdateCurrentUser = async (formData) => {
  console.log('formDaeeeta :>> ', formData);
  // debugger
  try {
    const res = await axios.patch(`${BASE_URL}/api/current-user/`, formData, {
      headers: {
        Authorization: `Token ${token}`, // Include the token in the headers
      },
    });
    toast.success('User data updated successfully.')
    return res.data;
  } catch (error) {
    toast.error('Something went wrong.')

    console.error('Error updating user:', error);
    return error; // Re-throw the error so the calling function can handle it
  }
};
export const UpdateCurrentUserPassword = async (formData) => {
  console.log('formDaeeeta :>> ', formData);
  // debugger
  try {
    const res = await axios.post(`${BASE_URL}/api/reset-password/`, formData, {
      headers: {
        Authorization: `Token ${token}`, // Include the token in the headers
      },
    });

    toast.success('Password updated successfully. Please login with new password')
    return res.data;
  } catch (error) {
    toast.error('Error updating password');

    console.error('Error updating user:', error);
    return error; // Re-throw the error so the calling function can handle it
  }
};
// Hook to log out the user
export const useLogout = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const logout = () => {
    axios.post(`${BASE_URL}/api/logout/`)
      .then(response => setResponse(response.data))
      .catch(error => setError(error));
  };

  return { logout, response, error };
};

// Hook to reset password
export const useResetPassword = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const resetPassword = (body) => {
    axios.post(`${BASE_URL}/api/reset-password/`, body)
      .then(response => setResponse(response.data))
      .catch(error => setError(error));
  };

  return { resetPassword, response, error };
};

// Hook to log in the user
export const Login = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/login/`, body)
    localStorage.setItem('authToken', res.data.token)
    return res.data;
  } catch (error) {
    toast.error(error.response.data.error);
    console.error('Error loging user:', error);
    return error// Re-throw the error so the calling function can handle it
  }

};
