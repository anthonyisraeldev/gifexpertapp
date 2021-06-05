export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=hf4kXiDaU889CWH9NY3EiSu9lqaWXEcV`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
