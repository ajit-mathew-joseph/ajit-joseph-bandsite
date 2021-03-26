/* Adding Axios Get Request */ 

let api_url = "https://project-1-api.herokuapp.com"
let comment_url = "/comments"
let auth = "?api_key=bffc60cc-3a36-48cd-b9d4-6e43b9f7843d"

let commentQuery = axios.get(api_url + comment_url + auth);

commentQuery.then(request => {
    console.log(request);

    let commentArray = request.data;

    console.log(commentArray);

    /* Functions Section -- Explanations at the bottom (if needed) */

    function elementCreator(elementName, className) {
    let newElement = document.createElement(elementName);
    newElement.classList.add(className);
    return newElement;
    }

    // function addInnerText(variableName, text) {
    // variableName.innerText = text;
    // }   

    function parentAppender(parentSelector, childElement) {
        document.querySelector(parentSelector).appendChild(childElement);
    }

    function nodeParentAppender(parentNode, index, childElement) {
        let parentNodeList = document.querySelectorAll(parentNode);
        parentNodeList[index].appendChild(childElement);
    }

    function timeStampconverter(arr) {
        arr.forEach(item => {
            let dateStamp = new Date(item.timestamp);
            let date = dateStamp.toLocaleDateString();
            item.date = date;
        });
    }
    
    function ObjPush(arr, name, date, comment, likes, timestamp) {
        arr.unshift({
            name: name,
            date: date,
            comment: comment,
            likes: likes,
            timestamp: timestamp
        });
    }

    function removeComments() {
        let commentNodeList = document.querySelectorAll(".comment-section__container");
        let commentParent = document.querySelector(".comment-section__sub-section");
        for (i = commentNodeList.length - 1; i >= 0; i--) {
            commentParent.removeChild(commentNodeList[i]);   
        }
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

        commentName.innerText = arr[index]["name"];
        commentDate.innerText = arr[index]["date"];
        commentVal.innerText = arr[index]["comment"];
    }
    

    /* Convert Comment Array to Locale Date */ 

    timeStampconverter(commentArray);

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
        let likes = 0;
        let timestamp = new Date().getTime();
    
        ObjPush(commentArray, name, date, comment, likes, timestamp);

        removeComments();

        for (i = 0; i < commentArray.length; i++) {
            displayComment(i, commentArray, i);
        }

        document.querySelector(".comment-section__form").reset();
        console.log(commentArray);
    }

    form.addEventListener('submit', formSubmit);

    });

commentQuery.catch(error => {
    console.log(error);
});


/* Modify Functionality Checklist

1. Add ID to new comments
2. Remove Date before Posting
3. Create POST request to project site */

/* Questions to ask 

1. Way to access data outside of get request? 
2. Are timestamps supposed to be the same for all default comments?

*/