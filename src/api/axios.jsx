import axios from "axios";
const instance=axios.create({
  
    baseURL: 'https://fitnessapp-0ob9.onrender.com',
    // https://fitnessapp-0ob9.onrender.com
});
// / https://api.getfitgo.online
export default instance;    