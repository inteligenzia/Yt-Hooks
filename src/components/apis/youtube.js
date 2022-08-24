import axios from "axios";

const KEY = "AIzaSyB1Ke26kiVbnJytf1NoqeOhFLcmRgErzaw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY

    }

});