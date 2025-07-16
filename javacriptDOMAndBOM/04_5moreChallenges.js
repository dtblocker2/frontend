/* -------------EVENT LISTENERS -------------- */
// click
document.getElementById('eventListenersDemo').
addEventListener('click', function() {
    console.log('this is click');
});

// mouseover
document.getElementById('eventListenersDemo').
addEventListener('mouseover', function() {
    console.log('this is mouseover');
});

// doubleclick
document.getElementById('eventListenersDemo').
addEventListener('dbclick', function() {
    console.log('this is doubleclick');
});

/* to get more info ctrl+click on addEventListner command it will redirect you to description/documentation that is offline */

/* ------------ Event delegation ---------- */
// select specific element of a group/class group
document.getElementById("teaList").addEventListener('click', function(event) {
    // get event object detail in our case it is click
    console.log(event);
    // from this event we can select target
    console.log(event.target);

    // below is useful if there are multiple item that are accidently clicked
    if (event.target && event.target.matches('.teaItem')) {
        console.log(`You selected: ${event.target.textContent}`)
    }
});

/* ---------- Form HAndling --------------- */
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    alert('form submitted');

    // when we click submit we get host/fileLocation? this ? would define post location if there was one to do this write post location in action eg action = "userFeedback" make and redirect you to host/fileLocation/uderFeedback?

    event.preventDefault();
    let feedback = document.getElementById('feedbackInput');

    console.log(feedback);
    document.getElementById('feedbackDisplay').textContent = feedback.value;
});
// assignment find method to grab label with for tag feedbackInput ie same as id of input text field

/* ------------ DOM Loading ------------------ */
// useful when you want to grab cdn files or send query to database
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('domStatus').textContent = 'DOM Loaded';
});

/* ---------- CSS Class MAnipulation ---------- */
document.getElementById('toggleHighlight').addEventListener('click', function() {
    let descriptionText = document.getElementById('descriptionText');

    // check if highlight is element of DOMTokenList
    /* if ('highlight' in descriptionText.classList) {
        descriptionText.classList.remove('highlight');
    }else {
        descriptionText.classList.add('highlight');
    }; */

    // use above code or use toggle method
    descriptionText.classList.toggle('highlight');
});

/* task
go to websites like youtube, wiki etc and select elements and get their method lists/description list
and try different command of above on them
*/

/* DOMToken List is node list and not an array we need to convert it into array before using it conventional way */
