var head = document.head;
var style = document.createElement("style");
style.innerText = `
.css-1u3rtbi, .boxInner_1fvckc1-o_O-isOverflowHidden_1rineb, .css-1fw89b3, .css-geg8ft {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.5);
} 
.boxInner_1fvckc1-o_O-isOverflowHidden_1rineb-o_O-modalBoxInnerStyles_vuhj4b {
    background-color: transparent !important;
}
.css-7zvp3y-CardBody {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.3) !important;
}
.css-rpz78q {
    border-radius: 12px;
}
.css-mr5hjf, .css-18e0h60 {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.3) !important;
    border: none !important;
}
.css-rdsoad {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}
.css-lvquzb, .css-1xx8rd1, .css-1vp34mw {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.5);
}

.css-11orwsa {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
}
`;
head.appendChild(style);

document.onLoad = function() {

setTimeout(function() {

var navbar = document.querySelector(".css-1n7poe7-NavList");

{
    // copy the first button, change its link, and then edit its first child's second child to say edit, then append it to the navbar
    var editButton = document.createElement("li");

    editButton.className = "css-o69446-NavListItem exjiuam2";
    editButton.innerHTML = `
    <a class="css-q02vqg-NavElementLink esyqyuo3" href="javascript:void(0)"><div class="css-1w3vkz3-SelectedPip esyqyuo2"></div><div class="css-buplwb-NavLabel esyqyuo0">Edit</div></a>
    `

    editButton.firstElementChild.addEventListener("click", function() {
        alert("Edit button clicked!");
    });

    navbar.appendChild(editButton);
}

}, 10000);

}
