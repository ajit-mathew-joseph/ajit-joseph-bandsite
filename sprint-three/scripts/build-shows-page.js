/* Setting up URL for GET request(s) */ 

let api_url = "https://project-1-api.herokuapp.com";
let comment_url = "/showdates";
let auth = "?api_key=bffc60cc-3a36-48cd-b9d4-6e43b9f7843d";

let commentQuery = axios.get(api_url + comment_url + auth);

/* Building the basic container structure for JS so that the shows can be added on */

let createSection = document.createElement("section");
const footer = document.querySelector(".footer");
document.body.insertBefore(createSection, footer);
createSection.classList.add("shows-section");

let createShowsTitle = elementCreator("h3", "shows-section__title");
addInnerText(createShowsTitle, "Shows");
parentAppender(".shows-section", createShowsTitle);
    
let createListingSection = elementCreator("div", "shows-section__listing-section");
parentAppender(".shows-section", createListingSection);
    
let createAltContainer = elementCreator("div", "shows-section__container--alternate");
parentAppender(".shows-section__listing-section", createAltContainer);
    
let createAltDateTitle = elementCreator("p", "shows-section__date--title");
addInnerText(createAltDateTitle, "DATE");
parentAppender(".shows-section__container--alternate", createAltDateTitle);
    
let createAltVenueTitle = elementCreator("p", "shows-section__venue--title");
addInnerText(createAltVenueTitle, "VENUE");
parentAppender(".shows-section__container--alternate", createAltVenueTitle);
    
let createAltLocationTitle = elementCreator("p", "shows-section__location--title");
addInnerText(createAltLocationTitle, "LOCATION");
parentAppender(".shows-section__container--alternate", createAltLocationTitle);
    
let createAltEmpty = elementCreator("div", "shows-section__empty-container");
parentAppender(".shows-section__container--alternate", createAltEmpty);

/* Create Shows Containers */

let createDivContainer1 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer1);

let createDivContainer2 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer2);

let createDivContainer3 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer3);

let createDivContainer4 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer4);

let createDivContainer5 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer5);

let createDivContainer6 = elementCreator("div", "shows-section__container");
parentAppender(".shows-section__listing-section", createDivContainer6);

/* Functions Section -- Explanations at the bottom (if needed) */

function elementCreator(elementName, className) {
    let newElement = document.createElement(elementName);
    newElement.classList.add(className);
    return newElement;
}

function addInnerText(variableName, text) {
    variableName.innerText = text;
}   

function parentAppender(parentSelector, childElement) {
    document.querySelector(parentSelector).appendChild(childElement);
}

function nodeParentAppender(parentNode, index, childElement) {
    let parentNodeList = document.querySelectorAll(parentNode);
    parentNodeList[index].appendChild(childElement);
}

/* Function to create the DOM structure for each show */

function displayShow(number, arr, index) {
    let createDateTitle = elementCreator("p", "shows-section__date--title");
    addInnerText(createDateTitle, "DATE");
    nodeParentAppender(".shows-section__container", number, createDateTitle);
    createDateTitle.classList.add("shows-section__hidden");

    let createDate = elementCreator("p", "shows-section__date");
    nodeParentAppender(".shows-section__container", number, createDate);
    
    let createVenueTitle = elementCreator("p", "shows-section__venue--title");
    addInnerText(createVenueTitle, "VENUE");
    nodeParentAppender(".shows-section__container", number, createVenueTitle);
    createVenueTitle.classList.add("shows-section__hidden");

    let createVenue = elementCreator("p", "shows-section__venue");
    nodeParentAppender(".shows-section__container", number, createVenue);

    let createLocationTitle = elementCreator("p", "shows-section__location--title");
    addInnerText(createLocationTitle, "LOCATION");
    nodeParentAppender(".shows-section__container", number, createLocationTitle);
    createLocationTitle.classList.add("shows-section__hidden");

    let createLocation = elementCreator("p", "shows-section__location");
    nodeParentAppender(".shows-section__container", number, createLocation);

    let button = elementCreator("button", "shows-section__button");
    addInnerText(button, "BUY TICKETS");
    nodeParentAppender(".shows-section__container", number, button);

    createDate.innerText = arr[index]["date"];
    createVenue.innerText = arr[index]["place"];
    createLocation.innerText = arr[index]["location"];
}

/* Axios GET request */

commentQuery.then(request => {
    console.log(request);

    let commentArray = request.data;

    console.log(commentArray);

    for (i = 0; i < commentArray.length; i++) {
        displayShow(i, commentArray, i);
    }
});    

commentQuery.catch(error => {
    console.log(error);
});