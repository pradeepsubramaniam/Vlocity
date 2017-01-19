/* we can read json file from server using below method */

//Reading from json file
//function readJsonFile(file, callback) {

//    var rawFile = new XMLHttpRequest();
//    rawFile.overrideMimeType("application/json"); 
//    rawFile.open("GET", file, true);
//    rawFile.onreadystatechange = function () {
//        if (rawFile.readyState === 4 && rawFile.status == "200") {
//            callback(rawFile.responseText);
//        }
//    }
//    rawFile.send(null);

//}

//readJsonFile("people.json", function (text) {
//    try {
//        _userProfile = JSON.parse(text);
//    }
//    catch (err) {
//        console.log(err.message);
//    }
//});


// For this to work we have to configure mimeMap in server, as i am hosting in locally i have passed the JSON object directly to global variable.

var _userProfile = {
    "People": [
      {
          "name": "Andrew Amernante",
          "rating": 3,
          "img": "http://www.fillmurray.com/200/200",
          "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
          "Likes": [
            "Dogs",
            "Long walks on the beach",
            "Chopin",
            "Tacos"
          ],
          "Dislikes": [
            "Birds",
            "Red things",
            "Danish food",
            "Dead Batteries"
          ]
      },
      {
          "name": "Frank Wang",
          "rating": 5,
          "img": "http://www.fillmurray.com/200/200",
          "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of anelizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
          "Likes": [
            "Frank",
            "Manchester United",
            "Football",
            "Programming"
          ],
          "Dislikes": [
            "Dogs",
            "Long walks on the beach",
            "Chopin",
            "Tacos"
          ]
      },
      {
          "name": "Sissi Chen",
          "rating": 5,
          "img": "http://www.fillmurray.com/200/200",
          "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of all life's problems.",
          "Likes": [
            "Cats",
            "the beach",
            "Chopin",
            "Blue things"
          ],
          "Dislikes": [
            "Birds"
          ]
      },
      {
          "name": "Diego Garcia",
          "rating": 2,
          "img": "http://www.fillmurray.com/200/200",
          "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go­cart, powered by my ownsense of self­satisfaction. You don't win friends with salad.",
          "Likes": [
            "Talking Spanish",
            "Spanish food",
            "Spanish things",
            "Football"
          ],
          "Dislikes": [
            "Not talking spanish",
            "Chopin"
          ]
      },
      {
          "name": "Fuad Rashid",
          "rating": 4,
          "img": "http://www.fillmurray.com/200/200",
          "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
          "Likes": [
            "Dogs",
            "Long walks on the beach",
            "Chopin",
            "Tacos"
          ],
          "Dislikes": [
            "Birds",
            "Red things",
            "Danish food",
            "Dead Batteries"
          ]
      }
    ]
};