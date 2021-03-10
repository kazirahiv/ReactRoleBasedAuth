import Axios from "axios";
import { checkMethod } from "../utils/Utils";

const axios = Axios.create({headers: {"Access-Control-Allow-Origin": "*"}});


axios.interceptors.request.use(
    function (req) {
      if(req.url && req.method)
      {
        var pathname = new URL(req.url).pathname;
        var availableMethods = checkMethod(pathname, req.method);
        if(!availableMethods.length){
            throw new Axios.Cancel('Permission denied !');
        }
      }
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function (res) {
      console.log("Response",res);
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );


  export default axios;
