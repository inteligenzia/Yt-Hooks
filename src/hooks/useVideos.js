import { useState, useEffect } from 'react';
import youtube from '../components/apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const result = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideoList(result.data.items);
  };

  return [videoList, search];
};

export default useVideos;
