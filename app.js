var _CONTENT = ["Hello ", "Hello1 ", "Hello2 ", "Hello3 ", "Hello4 "];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
        clearInterval(_INTERVAL_VAL);

        // If last sentence then display the first one, else move to the next
        if (_PART == _CONTENT.length - 1) _PART = 0;
        else _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//TYPING EFFECT ENDS

//kz
const isPressed = window.localStorage.getItem("dyslexic") === 'true';
if (isPressed) {
    document.body.classList.add("dyslexia-mode");
}
// set the button to pressed if appropriate
const toggle1 = document.getElementById("dyslexia-toggle");
if (isPressed) {
    toggle1.setAttribute('aria-pressed', 'true');
}
// toggle dyslexia support
toggle1.addEventListener('click', (e) => {
    let pressed = e.target.getAttribute('aria-pressed') === 'true';
    e.target.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle("dyslexia-mode");
    window.localStorage.setItem("dyslexic", String(!pressed));
});

const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
});