// Validate Email Address
function validate(email) {
    // Check if the email contains "@" character
    if (email.indexOf("@") === -1) {
        return false;
    }

    // Split the email address into local part and domain part
    const parts = email.split("@");
    const localPart = parts[0];
    const domainPart = parts[1];

    // Check if the local part and domain part are not empty
    if (localPart === "" || domainPart === "") {
        return false;
    }

    // Check if the local part contains only valid characters
    const validLocalPartChars = /^[a-zA-Z0-9._%+-]+$/;
    if (!validLocalPartChars.test(localPart)) {
        return false;
    }

    // Check if the domain part contains only valid characters
    const validDomainPartChars = /^[a-zA-Z0-9.-]+$/;
    if (!validDomainPartChars.test(domainPart)) {
        return false;
    }

    // Split the domain part into subdomains
    const subdomains = domainPart.split(".");
    // Check if the TLD is at least 2 characters long
    if (subdomains[subdomains.length - 1].length < 2) {
        return false;
    }

    // Check if there are at least 2 subdomains (domain and TLD)
    if (subdomains.length < 2) {
        return false;
    }

    return true;
}

// Example usage:
let email = "helloworld@xyz.com";
let result = validate(email);
console.log(result); // Output: true
