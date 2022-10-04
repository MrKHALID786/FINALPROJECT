import axios from 'axios';
const PATIENT_API_BASE_URL="http://localhost:8080/patient"
class ListPatientService{
    getPatient(pid){
        return axios.get(PATIENT_API_BASE_URL+"/getAllPatient/"+pid);
    }
    getAllPatient(){
        return axios.get(PATIENT_API_BASE_URL+"/getAll/");
    }
    addPatient(patient){
        return axios.post(PATIENT_API_BASE_URL+"/addPatient",patient);
    }
    updatePatientById(patient,id){
        return axios.put(PATIENT_API_BASE_URL+"/updatePatientById/"+id,patient);
    }
    getPatientById(id){
        return axios.get(PATIENT_API_BASE_URL+"/getPatientById/"+id);
    }
    deletePatient(id){
        
        return axios.delete(PATIENT_API_BASE_URL+"/deletePatientById/"+id);
    }
    addPatientDetails(patientdetails){
        return axios.post(PATIENT_API_BASE_URL+"/addPatientDetails",patientdetails);
    }
    getAllPatientDetailsById(id){
        return axios.get(PATIENT_API_BASE_URL+"/patientDetails/"+id);
    }
    getAllPatientReportsById(id){
        return axios.get(PATIENT_API_BASE_URL+"/getalldetails/"+id);
    }
}
export default new ListPatientService()