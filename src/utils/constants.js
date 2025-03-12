const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=IN&key=${REACT_APP_GOOGLE_API_KEY}`;
//export const YOUTUBE_SEARCH_API ='https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API ='https://youtube-search-suggestion.onrender.com/?q=';
