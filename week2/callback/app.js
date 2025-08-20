console.log("hello world!");

// callback function --> used as an argument of a method or another function

const staff = ["sam", "manny", "joe"];

// TODO: add each item in the array to the console ( 3 times --> length)
// - for loop
// - forEach() --> array method
// - for ... of

// when a function does not have a name it is an anonymous funtion
// we can use anonymous funtions when we so not want to call them again (reuse them)
// callback function when added inline tend to be anonymous

staff.forEach(function (item) {
  console.log(item);
});

//=============================================

// TODO: i want to give the user the foloowing messages: welcome message, their username, missed messages
// - object --> store users data
// - function --> one function per task

const jack = {
  staffName: "jack",
  userName: "Hollow.Jack",
  missedMessages: 25,
};

function welcomeUser(user) {
  console.log(`welcome ${user}`);
}

function sayUsername(username) {
  console.log(`Your username is ${username}`);
}

function sayMissingMessages(numberOfMessages) {
  console.log(`You have ${numberOfMessages} missed messages`);
}

// welcomeUser("sam");
// sayUsername("sam.clark")
// sayMissedMessages("7");

//=================================================
// refactor our code for us to have more control over the three tasks

function enterWebSite(
  welcome,
  username,
  missedMessages,
  welcomeMessage,
  userNameData,
  numberMessage
) {
  welcome(welcomeMessage);
  username(userNameData);
  missedMessages(numberMessage);
}

enterWebSite(
  welcomeUser,
  sayUsername,
  sayMissingMessages,
  "sam",
  "sam.clark",
  7
);

enterWebSite(
  welcomeUser,
  sayUsername,
  sayMissingMessages,
  jack.staffName,
  jack.userName,
  jack.missedMessages
);
