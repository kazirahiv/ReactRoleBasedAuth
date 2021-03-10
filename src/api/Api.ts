import axios from "../config/AxiosConfig";




export async function SimpleGetRequest() {
    const result = await axios.put('http://localhost:6003/student/getall');
    return result;
  }