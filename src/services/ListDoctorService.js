import axios from 'axios';
const DOCTOR_API_BASE_URL="http://localhost:8080/doctor"
const ADMIN_API_BASE_URL="http://localhost:8080/admin"
const PATIENT_API_BASE_URL="http://localhost:8080/patient"
class ListDoctorService{
    getDoctor(did){
        return axios.get(DOCTOR_API_BASE_URL+"/getAllDoctor/"+did);
    }
    addDoctor(doctor){
       // console.log(DOCTOR_API_BASE_URL+"/addDoctor---->"+doctor);
        return axios.post(DOCTOR_API_BASE_URL+"/addDoctor",doctor);
    }
    updateDoctorById(patient,id){
        return axios.put(DOCTOR_API_BASE_URL+"/updateDoctorById/"+id,patient);
    }
    getDoctorById(id){
        return axios.get(DOCTOR_API_BASE_URL+"/getDoctorById/"+id);
    }

    getAllDoctor(){
        return axios.get(ADMIN_API_BASE_URL+"/getAllDoctor");
    }
    deleteDoctor(id){
        
        return axios.delete(DOCTOR_API_BASE_URL+"/deletePatientById/"+id);
    }
    addPatientDetails(patientdetails){
        return axios.post(PATIENT_API_BASE_URL+"/addPatientDetails",patientdetails);
    }
}
export default new ListDoctorService()