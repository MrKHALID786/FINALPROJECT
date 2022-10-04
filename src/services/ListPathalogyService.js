import axios from 'axios';
const DOCTOR_API_BASE_URL="http://localhost:8080/doctor"
const PATIENT_API_BASE_URL="http://localhost:8080/patient"
const PATHALOGY_API_BASE_URL="http://localhost:8080/pathalogy"
class ListPathalogyService{
    addPathalogy(pathalogy){
        // console.log(DOCTOR_API_BASE_URL+"/addDoctor---->"+doctor);
         return axios.post(PATHALOGY_API_BASE_URL+"/addPathalogy",pathalogy);
     }
     login(loginUser){
        console.log(loginUser);
        return axios.post(PATHALOGY_API_BASE_URL+"/pathlogin",loginUser);
    }
    addData(data1){
        return axios.post(PATHALOGY_API_BASE_URL+"/adddata",data1);
    }
}
export default new ListPathalogyService()