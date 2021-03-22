/* Adding the section */

let createSection = document.createElement("section");
const footer = document.querySelector(".footer");
document.body.insertBefore(createSection, footer);
createSection.classList.add("shows-section");

/* 

Set of Functions:

1. elementCreator takes in the element name (such as h1, div, section) and the name of the class and returns an element
2. after seeting a variable to element creator, addInnerText takes in the variable name and adds inner text to it
3. parentAppender takes in a parent class selector and the variable name and appends the variable (child) to the parent
4. nodeParentAppender does the same as above, but accesses the node list to add the childen element to a given node value

*/

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

function nodeParentAppender(parentNode, number, childElement) {
    let parentNodeList = document.querySelectorAll(parentNode);
    parentNodeList[number].appendChild(childElement);
}

/* Javascript for creating DOM Elements */

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

/* Show #1 */

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

/* Create Shows */ 

let createDateTitle1 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle1, "DATE");
nodeParentAppender(".shows-section__container", 0, createDateTitle1);
createDateTitle1.classList.add("shows-section__hidden");

let createDate1 = elementCreator("p", "shows-section__date");
addInnerText(createDate1, "Mon Dec 17 2018");
nodeParentAppender(".shows-section__container", 0, createDate1);

let createVenueTitle1 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle1, "VENUE");
nodeParentAppender(".shows-section__container", 0, createVenueTitle1);
createVenueTitle1.classList.add("shows-section__hidden");

let createVenue1 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue1, "Ronald Lane");
nodeParentAppender(".shows-section__container", 0, createVenue1);

let createLocationTitle1 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle1, "LOCATION");
nodeParentAppender(".shows-section__container", 0, createLocationTitle1);
createLocationTitle1.classList.add("shows-section__hidden");

let createLocation1 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation1, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 0, createLocation1);

let Button1 = elementCreator("button", "shows-section__button");
addInnerText(Button1, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 0, Button1);

/* Show #2 */ 

let createDateTitle2 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle2, "DATE");
nodeParentAppender(".shows-section__container", 1, createDateTitle2);
createDateTitle2.classList.add("shows-section__hidden");

let createDate2 = elementCreator("p", "shows-section__date");
addInnerText(createDate2, "Tue Jul 18 2019");
nodeParentAppender(".shows-section__container", 1, createDate2);

let createVenueTitle2 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle2, "VENUE");
nodeParentAppender(".shows-section__container", 1, createVenueTitle2);
createVenueTitle2.classList.add("shows-section__hidden");

let createVenue2 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue2, "Pier 3 East");
nodeParentAppender(".shows-section__container", 1, createVenue2);

let createLocationTitle2 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle2, "LOCATION");
nodeParentAppender(".shows-section__container", 1, createLocationTitle2);
createLocationTitle2.classList.add("shows-section__hidden");

let createLocation2 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation2, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 1, createLocation2);

let Button2 = elementCreator("button", "shows-section__button");
addInnerText(Button2, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 1, Button2);

/* Show #3 */ 

let createDateTitle3 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle3, "DATE");
nodeParentAppender(".shows-section__container", 2, createDateTitle3);
createDateTitle3.classList.add("shows-section__hidden");

let createDate3 = elementCreator("p", "shows-section__date");
addInnerText(createDate3, "Fri Jul 22 2019");
nodeParentAppender(".shows-section__container", 2, createDate3);

let createVenueTitle3 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle3, "VENUE");
nodeParentAppender(".shows-section__container", 2, createVenueTitle3);
createVenueTitle3.classList.add("shows-section__hidden");

let createVenue3 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue3, "View Loungue");
nodeParentAppender(".shows-section__container", 2, createVenue3);

let createLocationTitle3 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle3, "LOCATION");
nodeParentAppender(".shows-section__container", 2, createLocationTitle3);
createLocationTitle3.classList.add("shows-section__hidden");

let createLocation3 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation3, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 2, createLocation3);

let Button3 = elementCreator("button", "shows-section__button");
addInnerText(Button3, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 2, Button3);

/* Show #4 */ 

let createDateTitle4 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle4, "DATE");
nodeParentAppender(".shows-section__container", 3, createDateTitle4);
createDateTitle4.classList.add("shows-section__hidden");

let createDate4 = elementCreator("p", "shows-section__date");
addInnerText(createDate4, "Sat Aug 12 2019");
nodeParentAppender(".shows-section__container", 3, createDate4);

let createVenueTitle4 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle4, "VENUE");
nodeParentAppender(".shows-section__container", 3, createVenueTitle4);
createVenueTitle4.classList.add("shows-section__hidden");

let createVenue4 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue4, "Hyatt Agency");
nodeParentAppender(".shows-section__container", 3, createVenue4);

let createLocationTitle4 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle4, "LOCATION");
nodeParentAppender(".shows-section__container", 3, createLocationTitle4);
createLocationTitle4.classList.add("shows-section__hidden");

let createLocation4 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation4, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 3, createLocation4);

let Button4 = elementCreator("button", "shows-section__button");
addInnerText(Button4, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 3, Button4);

/* Show #5 */ 

let createDateTitle5 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle5, "DATE");
nodeParentAppender(".shows-section__container", 4, createDateTitle5);
createDateTitle5.classList.add("shows-section__hidden");

let createDate5 = elementCreator("p", "shows-section__date");
addInnerText(createDate5, "Fri Sep 05 2019");
nodeParentAppender(".shows-section__container", 4, createDate5);

let createVenueTitle5 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle5, "VENUE");
nodeParentAppender(".shows-section__container", 4, createVenueTitle5);
createVenueTitle5.classList.add("shows-section__hidden");

let createVenue5 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue5, "Moscow Center");
nodeParentAppender(".shows-section__container", 4, createVenue5);

let createLocationTitle5 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle5, "LOCATION");
nodeParentAppender(".shows-section__container", 4, createLocationTitle5);
createLocationTitle5.classList.add("shows-section__hidden");

let createLocation5 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation5, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 4, createLocation5);

let Button5 = elementCreator("button", "shows-section__button");
addInnerText(Button5, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 4, Button5);

/* Show #6 */ 

let createDateTitle6 = elementCreator("p", "shows-section__date--title");
addInnerText(createDateTitle6, "DATE");
nodeParentAppender(".shows-section__container", 5, createDateTitle6);
createDateTitle6.classList.add("shows-section__hidden");

let createDate6 = elementCreator("p", "shows-section__date");
addInnerText(createDate6, "Wed Aug 11 2019");
nodeParentAppender(".shows-section__container", 5, createDate6);

let createVenueTitle6 = elementCreator("p", "shows-section__venue--title");
addInnerText(createVenueTitle6, "VENUE");
nodeParentAppender(".shows-section__container", 5, createVenueTitle6);
createVenueTitle6.classList.add("shows-section__hidden");

let createVenue6 = elementCreator("p", "shows-section__venue");
addInnerText(createVenue6, "Pres Club");
nodeParentAppender(".shows-section__container", 5, createVenue6);

let createLocationTitle6 = elementCreator("p", "shows-section__location--title");
addInnerText(createLocationTitle6, "LOCATION");
nodeParentAppender(".shows-section__container", 5, createLocationTitle6);
createLocationTitle6.classList.add("shows-section__hidden");

let createLocation6 = elementCreator("p", "shows-section__venue");
addInnerText(createLocation6, "San Francisco, CA");
nodeParentAppender(".shows-section__container", 5, createLocation6);

let Button6 = elementCreator("button", "shows-section__button");
addInnerText(Button6, "BUY TICKETS");
nodeParentAppender(".shows-section__container", 5, Button6);