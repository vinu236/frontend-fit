import axios from "axios";
const instance=axios.create({
  
    baseURL: "http://localhost:3000/"
    
    // https://fitnessapp-0ob9.onrender.com
});
// /    
export default instance;    