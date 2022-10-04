import axios from 'axios';
const PATIENT_API_BASE_URL="http://localhost:8080/patient"
class ReceptionLogin{
    login(loginUser){
        
        return axios.post(PATIENT_API_BASE_URL+"/login",loginUser);
    }
}
export default new ReceptionLogin()