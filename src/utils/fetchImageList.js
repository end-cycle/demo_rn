
const fetchImageList = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();

    // Extract the image URLs from the response data
    const imageList = data.message.map(url => ({ coverImg: url }));

    return imageList;
  } catch (error) {
    console.error('Error fetching image list:', error);
    return [];
  }
};

export default fetchImageList;
