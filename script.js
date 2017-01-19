// Code goes here


// Global Declartaion
//var _upObject = null;



//After files loaded
window.onload = function () {
    //_upObject = new userProfile();
    
    _upObject.init("userNameList", "currentUserProfile");
}



/* Custom Plugin Declaration */
var _upObject = (function () {

    /* Example of OOPS concept */
    function userProfileObject() {
        this.userProfile = _userProfile.People;  /* use readJsonFile function in people.js in case of fetching JSON from server */
        this.default = {
            menuEleID: "",
            contentEleID : ""
        }
    }


    // Load the contact list from JSON
    userProfileObject.prototype.LoadMenu = function () {
        var innerlist = "";
        var activeClass = "";
        for (var index = 0; index < this.userProfile.length; index++) {
            innerlist += "<li onClick='onClickMenu(" + index + ",this)' " + (index == 0 ? "class='active'" : "") + " >" + this.userProfile[index].name + "</li>";
        }

        if (this.userProfile.length <= 0)
            innerlist = "<div class='p-10'> No Contact Found</div>"

        document.getElementById(this.default.menuEleID).innerHTML = innerlist;
        this.LoadContentByIndex(0);
    }

    // Load the particular contact detail from JSON by its index
    userProfileObject.prototype.LoadContentByIndex = function (userindex) {
        if (this.userProfile[userindex] != undefined) {
            var content = '<table class="userProfileTable">' +
                                '<tr>' +
                                   ' <td> <img src="' + this.userProfile[userindex].img + '" /> </td>' +
                                    '<td><button onClick="sendMessage('+ userindex  +')" class="btn btn-large"> <h2>Send Message</h2>   </button> ' + this.GenerateHeart(parseInt(this.userProfile[userindex].rating)) + '</td>' +
                                '</tr>' +
                            '</table>' +
                            '<div class="userDescription">' +
                                this.userProfile[userindex].Description +
                            '</div>' +
                         '<div>' + this.GenerateLikeTable(userindex) + '</div>';
        }
        else
            content = "No Contact Found"


        document.getElementById(this.default.contentEleID).innerHTML = content;

    }


    // Used to generate Heart Module
    userProfileObject.prototype.GenerateHeart = function (count) {
        var holder = '<div class="heartHolder">';
        for (var index = 1; index <= 5; index++) {
            holder += "<div class='heart " + (index <= count ? 'active' : '') + "'></div>";
        }
        holder += '</div>';

        return holder;
    }

    // Used to generate table of like & dislike
    userProfileObject.prototype.GenerateLikeTable = function (userindex) {
        var table = '<table class="userLikesTable">' +
                      '<thead><tr><td>Likes</td><td>Dislikes</td></tr></thead><tbody>';

        var likes = this.userProfile[userindex].Likes;
        var disLikes = this.userProfile[userindex].Dislikes;
        for (var index = 0; index < Math.max(likes.length, disLikes.length) ; index++) {
            table += "<tr>" +
                           "<td>" + (likes[index] != undefined ? likes[index] : '') + "</td>" +
                           "<td>" + (disLikes[index] != undefined ? disLikes[index] : '') + "</td>" +
                     "</tr>";
        }

        table += "</tbody></table>";
        return table;
    }


    // Search by Name
    userProfileObject.prototype.filterByName = function (name, key) {
        this.userProfile = _userProfile.People.filter(function (obj) {
            return (obj[key].toLowerCase().indexOf(name.toLowerCase()) == 0);
        });
        this.LoadMenu(this.default.menuEleID);
    }


    //Initialization 
    userProfileObject.prototype.init = function (menuEleID, contEleID)
    {
        this.default.menuEleID = menuEleID;
        this.default.contentEleID = contEleID;
        this.LoadMenu();
    }

    return new userProfileObject();
}());

/* End Plugin Declaration */




/* Event Methods */
function onClickMenu(index, element) {
    document.getElementById(_upObject.default.menuEleID).getElementsByClassName("active")[0].className = "";
    element.className = "active";
    _upObject.LoadContentByIndex(index);
}

/* Event fires on keyup search box */
function filterByName(element)
{
    _upObject.filterByName(element.value, "name");
}

function sendMessage(index)
{
    alert("Send message to " + _upObject.userProfile[index].name);
}

