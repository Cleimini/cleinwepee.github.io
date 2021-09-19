document.getElementById("Load_CSUAn_Ako").addEventListener("click", Load_CSUAn_Ako);

function Load_CSUAn_Ako() {
    var XHR = new XMLHttpRequest();

    XHR.open("GET", "modals/csuan-ako.html", true);

    document.getElementById("Bootstrap_Modal_Content").innerHTML = "";

    XHR.onload = function() {
        if (this.status == 200) {
            document.getElementById("Bootstrap_Modal_Content").innerHTML = this.responseText;
        }
    }

    XHR.send();
}

document.getElementById("Load_AniRepo").addEventListener("click", Load_AniRepo);

function Load_AniRepo() {
    var XHR = new XMLHttpRequest();

    XHR.open("GET", "modals/anirepo.html", true);

    document.getElementById("Bootstrap_Modal_Content").innerHTML = "";

    XHR.onload = function() {
        if (this.status == 200) {
            document.getElementById("Bootstrap_Modal_Content").innerHTML = this.responseText;
        }
    }

    XHR.send();
}