

export  const CheckValidate = (email,password) => {
    const isemailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const ispasswordValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    if(!isemailValid){
      return "Emailid is not valid"
    }
    if(!ispasswordValid){
      return "Password is not valid"
    }
    return null 
   }





