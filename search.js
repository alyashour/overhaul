function getHTMLFromText(input){
    switch (input){
        case "download":
        case "install":
        case "get":
            return "download.html";
        case "help":
        case "faq":
        case "FAQ":
        case "how do I":
            return "help.html";
        case "home":
        case "main":
            return "index.html";
        case "login":
        case "log in":
        case "signin":
        case "sign in":
        case "sign up":
        case "signup":
            return "login.html";
        case "cost":
        case "price":
        case "pay":
            return "pricing.html";
    }
}

module.exports = getHTMLFromText;