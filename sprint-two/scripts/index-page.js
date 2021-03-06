/* Array of Objects for Storing Values */

let commentArray = [

{
    posterName: "Michael Lyons",
    date: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
},

{
    posterName: "Gary Wong",
    date: "12/12/2018",
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
},

{
    posterName: "Theodore Duncan",
    date: "11/15/2018",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
}

]

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

function displayComment(number, arr, index) {
    let commentContainer = elementCreator("div", "comment-section__container");
    parentAppender(".comment-section__sub-section", commentContainer);

    let iconContainer = elementCreator("div", "comment-section__icon-container");
    nodeParentAppender(".comment-section__container", number, iconContainer);

    let textContainer = elementCreator("div", "comment-section__text-container");
    nodeParentAppender(".comment-section__container", number, textContainer);
    
    let dateContainer = elementCreator("div", "comment-section__date-container");
    nodeParentAppender(".comment-section__text-container", number, dateContainer);

    let iconBox = elementCreator("div", "comment-section__icon");
    nodeParentAppender(".comment-section__icon-container", number, iconBox);

    let commentName = elementCreator("p", "comment-section__name");
    nodeParentAppender(".comment-section__date-container", number, commentName);

    let commentDate = elementCreator("p", "comment-section__date");
    nodeParentAppender(".comment-section__date-container", number, commentDate);

    let commentVal = elementCreator("p", "comment-section__comment");
    nodeParentAppender(".comment-section__text-container", number, commentVal);

    commentName.innerText = arr[index]["posterName"];
    commentDate.innerText = arr[index]["date"];
    commentVal.innerText = arr[index]["comment"];
}
    
function ObjPush(arr, name, date, comment) {
    arr.unshift({
        posterName: name,
        date: date,
        comment: comment
    });
}

function removeComments() {
    let commentNodeList = document.querySelectorAll(".comment-section__container");
    let commentParent = document.querySelector(".comment-section__sub-section");
    for (i = commentNodeList.length - 1; i >= 0; i--) {
        commentParent.removeChild(commentNodeList[i]);   
    }
}

/* Displaying Default Comment Values */

displayComment(0, commentArray, 0);
displayComment(1, commentArray, 1);
displayComment(2, commentArray, 2);


/* Storing the Class of Form to a variable */

const form = document.querySelector(".comment-section__form");

/* Comment Functionality */

function formSubmit(event) {
    event.preventDefault();
    let name = event.target.nameInput.value;
    let comment = event.target.commentInput.value;
    let date = new Date().toLocaleDateString();
    
    ObjPush(commentArray, name, date, comment);

    removeComments();

    for (i = 0; i < commentArray.length; i++) {
        displayComment(i, commentArray, i);
    }

    document.querySelector(".comment-section__form").reset();
}

form.addEventListener('submit', formSubmit);
