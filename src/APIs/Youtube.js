import axios from 'axios';


const KEY ='AIzaSyCRUChQLk69bJh8eqswLIRgUMzm4tElcE4';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type:'video',
        maxResults:15,
        key:KEY
    }
});

 