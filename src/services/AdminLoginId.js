import axios from 'axios';
const Admin_API_BASE_URL="http://localhost:8080/admin"
class AdminLoginId{
    login(loginUser){
        
        return axios.post(Admin_API_BASE_URL+"/login",loginUser);
    }
}
export default new AdminLoginId()