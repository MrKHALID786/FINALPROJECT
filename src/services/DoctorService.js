import axios from 'axios';
const Doctor_API_BASE_URL="http://localhost:8080/doctor"
class DoctorLogin{
    login(loginUser){
    
        return axios.post(Doctor_API_BASE_URL+"/dlogin",loginUser);
    }
}
export default new DoctorLogin()