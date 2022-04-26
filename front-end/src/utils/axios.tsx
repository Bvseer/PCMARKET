import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "config.url"
const token = 'token';

export default axios.create({
   baseURL: apiUrl,
   headers: {
      Authorization: token ? `Bearer ${token}` : ''
   }
})

const requestHandler = (req: Object) => {
   console.log(req);
   return req
}

const responseHandler = (res: Object) => {
   console.log(res);
   return res
}

const errorHandler = (err: Object) => {
   console.log(err)
   return err
}

axios.interceptors.request.use(
   req => {
      requestHandler(req)
   }, 
   (err) => {
      console.log(err);
   }
);

axios.interceptors.response.use(
   res => {
      responseHandler(res)
   },
   err => {
      errorHandler(err)
   }
)
