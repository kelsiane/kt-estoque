 const token = localStorage.getItem('token');
 export default function Authentictoken(){
  if(token){
    return true;
  }else {
    return false;
  }
}