/* Setting up URL for GET request(s) */ 

let api_url = "https://project-1-api.herokuapp.com"
let comment_url = "/comments"
let auth = "?api_key=bffc60cc-3a36-48cd-b9d4-6e43b9f7843d"

/* Functions Section  */

function elementCreator(elementName, className) {
    let newElement = document.createElement(elementName);
    newElement.classList.add(className);
    return newElement;
    }   

    function parentAppender(parentSelector, childElement) {
        return document.querySelector(parentSelector).appendChild(childElement);
    }

    function nodeParentAppender(parentNode, index, childElement) {
        let parentNodeList = document.querySelectorAll(parentNode);
        return parentNodeList[index].appendChild(childElement);
    }

    function timeStampconverter(arr) {
        return arr.forEach(item => {
            let dateStamp = new Date(item.timestamp);
            let date = dateStamp.toLocaleDateString();
            item.date = date;
        });
    }
    
    function ObjPush(arr, name, date, comment, likes, timestamp) {
        return arr.push({
            name: name,
            date: date,
            comment: comment,
            likes: likes,
            timestamp: timestamp
        }); /* Changed from unshift to shift to support new functionality */
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

        commentName.innerText = arr[arr.length - 1 - index]["name"]; /* so that the first comment displayed uses values from the last item */
        commentDate.innerText = arr[arr.length - 1 - index]["date"]; /* ^ since we want newest items displayed first */
        commentVal.innerText = arr[arr.length - 1 - index]["comment"]; 
    }

let commentQuery = axios.get(api_url + comment_url + auth);

commentQuery.then(request => {
    console.log(request);

    let commentArray = request.data;

    console.log(commentArray);

    /* Convert Comment Array to Locale Date */ 

    timeStampconverter(commentArray);

    /* Displaying Default Comment Values **IMPORTANT -- Additional Notes Below ** */

    for (let i = 0; i < commentArray.length; i++) {
        displayComment(i, commentArray, i)
    }

    /* Storing the Class of Form to a variable */

    const form = document.querySelector(".comment-section__form");

    /* Comment Functionality */

    function formSubmit(event) {
        event.preventDefault();
        let name = event.target.nameInput.value;
        let comment = event.target.commentInput.value;
        let date = new Date().toLocaleDateString();
        let likes = 0;
        let id = 0;
        let timestamp = new Date().getTime();
    
        ObjPush(commentArray, name, date, comment, likes, id, timestamp);

        axios
            .post(api_url + comment_url + auth, {
                name: name,
                comment: comment,
            })

            .then(result => {
                console.log(result);
            })

            .catch(error => {
                console.log(error);
            });

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


/* Additional Comments 

For displaying default comment values, under the assumption that newly posted comments
are to be displayed along with the older, default comments. If not the case I would remove the loop and use the previous
method which is: 

displayComment(0, commentArray, 0);
displayComment(1, commentArray, 1);
displayComment(2, commentArray, 2);

& objPush would be changed to objPush -- arr.unshift
& displayComment -- commentName.innertext would be = arr[index]["name"] and so on

And the new comments would be loaded in as usual */