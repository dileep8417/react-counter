import axios from "axios";

export const trackPageVisits = async () => {
    const pageTrackURL = 'https://page-tracker.onrender.com/track';
    await axios.post(pageTrackURL);
}