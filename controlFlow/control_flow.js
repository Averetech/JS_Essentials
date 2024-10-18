let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = `The ${userRole} is granted full access`;
} else {
    console.log(`This isn't true for ${userRole}`);
}

console.log(accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
    userMessage = `Welcome, ${userRole}! You are successfully logged in.`;
    } else if (userRole === "supervisor") {
        userMessage = `Welcome, supervisor! You are successfully logged in.`;
    }
} else {
    userMessage = "Your login has been unsuccessful.";
}

console.log(userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "subscriber":
        userCategory = `Thank you for subscribing to our channel 😊.`;
    break;
    case "admin":
        userCategory = `Welcome, admin! You have full access on our channel`;
    break;
    case "supervisor":
        userCategory = `Welcome, supervisor! Your access is limited on our channel.`;
    break;
    default:
        userCategory = `Please perform some action to become a user. Thank you!`;
}

console.log(userCategory);


let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);