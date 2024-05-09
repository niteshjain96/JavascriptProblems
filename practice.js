function validate(email){
    if(email.indexOf('@')===-1){
        return false;
    }

    const parts=email.split('@');
    const localPart=parts[0];
    const domainPart=parts[1];

    if(localPart=== "" || domainPart===""){
        return false;
    }

    const validLocalPartChars=/^[
          
        /;
}