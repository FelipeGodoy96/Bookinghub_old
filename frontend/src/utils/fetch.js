const fetchData = {
  get: async (url) => {
    const data = await fetch(url,{
      method:"GET",
    });
    const res = await data.json();
    return res;
  },

  post: async (url, body) => {
    const data = await fetch(url,{
      method:"POST",
      body:body
    });
    const res = await data.json();
    return res;
  },

  put: async (url, body) => {
    const data = await fetch(url,{
      method:"PUT",
      body:body
    });
    const res = await data.json();
    return res;
  },
  
  delete: async (url) => {
    const data = await fetch(url,{
      method:"DELETE",
    });
    const res = await data.json();
    return res;
  }
};
export default fetchData;
