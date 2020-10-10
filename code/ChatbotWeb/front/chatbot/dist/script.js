mobiscroll.settings = {
    theme: 'ios-dark',
    lang: 'en'
};
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var now = new Date();
var yearsBackDate = bday = new Date(now.getFullYear() - 18, now.getMonth(), now.getDay());
var max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate()),
    tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
var dateInput = {
    display: 'inline',
    headerText: 'Select Your DOB',
    max: bday
}

var docAppointment = {
    display: 'inline',
    headerText: 'Select Your Appointment',
    controls: ['calendar', 'time'],
    min: tomorrow,
    max: max,
    invalid: [
        { start: '00:00', end: '08:59' },
        { start: '17:01', end: '23:59' }
    ]
}

var viewReminder = {
    display: 'bubble',
    labels: []
}

var appointmentInput = {
    display: 'inline',
    headerText: 'Select Your Appointment',
    controls: ['calendar'],
    min: tomorrow,
    invalid: [],
    labels:[]
}


let status = ["NAME", "BOT_DOB", "APPOINTMENTS", "REMINDERS"];
var currentStatusIndex = 0;
var currentStatus = status[currentStatusIndex];
var appointments = [];

var userName = "";
var name = "";

$(document).ready(function () {
    constMessages();
    $(".send-icon").on("click", addUserMessage);

});

var addUserMessage = function () {
    console.log("asdasdas");
    var usermessage = $("#user-input").val();
    if (usermessage == undefined || usermessage == null || usermessage == "")
        return;
    addMessage(usermessage, false);
    $("#user-input").val("");
}
var addMessage = function (message, bot) {
    $('.chatbot-body').animate({
        scrollTop: $('.chatbot-body').get(0).scrollHeight
    }, 1000);
    MessageClass = "user-message";
    messageHolderPosition = "message-holder-right";
    if (bot) {
        MessageClass = "bot-message";
        messageHolderPosition = "message-holder-left";
        showLoader();
    }
    $(".chatbot-body").find(".messages-holder").append('<li class="' + MessageClass + '">' +
        '<div class="' + messageHolderPosition + '">' +
        '<div class="message">' +
        message +
        ' </div>' +
        '<div class="message-time">' +
        'Today, 12:07 PM' +
        '</div>' +
        '</div>' +
        '</li>');
    if (!bot) {
        manageInputs(message);
    }
    hideLoader();
}
var updateStatus = function () {
    currentStatusIndex++;
    currentStatus = status[currentStatusIndex]
}

var manageInputs = function (message) {
    switch (currentStatus) {
        case "NAME": userName = message;
            addMessage("See I remeber your name <strong style='text-transform:uppercase'>" + userName + "</strong>! What is your Date of Birth?", true);
            $('.user-input').attr("placeholder", "Set Your DOB");
            $('.user-input').mobiscroll().date(
                dateInput
            );
            updateStatus();
            break;
        case "BOT_DOB":
            addMessage("<strong style='text-transform:uppercase'>" + userName + "</strong>,I Have Saved you DOB.", true);
            addMessage("I can save <strong>appointments</strong> too,Try Once", true);
            addReminders(message, userName + "'s Birthday");
            $('.user-input').attr("placeholder", "Add Doctor's Appointment Time and Date");
            $('.user-input').mobiscroll().calendar(
                docAppointment
            );
            updateStatus();
            break;
        case "APPOINTMENTS":
            addMessage("<strong style='text-transform:uppercase'>" + userName + "</strong>,Your's Doctors appointment is saved in calender", true);
            addReminders(message, "Doctor");
            addBotButtons("<strong style='text-transform:uppercase'>" + userName + "</strong>,Your's Doctors appointment is saved in calender", true);
            viewAllreminders();
            updateStatus();
            break;
        case "REMINDERS":
            name = message;
            addMessage("<strong style='text-transform:uppercase'>" + userName + "</strong>,Select Date", true);
            var labels = [];
            for (var i = 0; i < appointments.length; i++) {
                var mydate = new Date(appointments[i].date);
                var labelInput = {};
                labelInput.d = mydate;
                labelInput.text = appointments[i].name;
                labelInput.color = colorArray[Math.floor(Math.random() * colorArray.length)];
                labels.push(labelInput)
            }
            $('.user-input').mobiscroll().calendar(
                appointmentInput,
                appointmentInput.labels = labels
            );
            $('.user-input').mobiscroll('show');
            currentStatus = "DATE_FOR_APPOINTMENT";
            break;
        case "DATE_FOR_APPOINTMENT":
            addMessage("<strong style='text-transform:uppercase'>" + userName + "</strong>,Your reminder is saved in calender", true);
            addReminders(message, name);
            addBotButtons("<strong style='text-transform:uppercase'>" + userName + "</strong>,Your reminder is saved in calender", true);
            viewAllreminders();
    }
}

var viewAllreminders = function () {
    var labels = [];
    for (var i = 0; i < appointments.length; i++) {
        var mydate = new Date(appointments[i].date);
        var labelInput = {};
        labelInput.d = mydate;
        labelInput.text = appointments[i].name;
        labelInput.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        labels.push(labelInput)
    }
    $('.user-input').attr("placeholder", "Click to see all reminders");
    $('.user-input').mobiscroll().calendar(
        viewReminder,
        viewReminder.labels = labels,
    );
    $('.user-input').mobiscroll('show');
}

var addMoreReminders = function () {
    addMessage("<strong style='text-transform:uppercase'>" + userName + "</strong>,Add Name to be saved in calender", true);
    $('.input').remove();
    userinput = '<div class="input">' +
        '<div class="send-message-icon">' +
        '<img class="send-icon" src="https://png.icons8.com/color/40/000000/paper-plane.png">' +
        '</div>' +
        '<input class="user-input" id="user-input" placeholder="Enter Description of the reminder">' +
        '</div>' +
        '</div>';
    $(".input-block").append(userinput);
    currentStatus = "REMINDERS";
    $(".send-icon").on("click", addUserMessage);
}
var addReminders = function (date, name) {
    var appointment = {
        "date": date,
        "name": name
    }

    appointments.push(appointment);
    appointmentInput.invalid.push(appointment.date)
    // console.log(appointmentInput);
}

var addBotButtons = function () {
    $(".chatbot-body").find(".messages-holder").append('<li class="bot-message">' +
        '<div class="message-holder-left">' +
        '<button class="view-reminders button btnPush btnBlueGreen" name="add"> View all Reminders</button>' +
        '<button class="add-reminders button btnPush btnOrange" name="add"> Add Reminders</button>' +
        '<div style="clear:both"></div>' +
        '</div>' +
        '</li>');
    $('.add-reminders').on("click", addMoreReminders);
    $('.view-reminders').on("click", viewAllreminders);
}

var constMessages = function () {
    var message = "";
    $(".first").addClass("messageAmimation");
    showLoader();
    setTimeout(function () {
        message = "Let's start with a Time Joke.<strong>What is a frog's favorite year?</strong><br><strong>Leap year!</strong>🕑"
        addMessage(message, true);
        hideLoader();
    }, 1000);
    setTimeout(function () {
        message = "<strong>What is your Name?<strong> I can remeber Name! 👌";
        addMessage(message, true);
        hideLoader();
    }, 2000);
}
var showLoader = function (bot) {
    var message = '<li class="loaderMessage">' +
        '<div class="message-holder-left">' +
        '<div class="loading-dots">' +
        '<span class="dot one">.</span>' +
        '<span class="dot two">.</span>' +
        '<span class="dot three">.</span>' +
        '</div>' +
        '</div>' +
        '</li>';
    $(".chatbot-body").find(".messages-holder").append(message);
}
var hideLoader = function () {
    $(".loaderMessage").remove();
}
var addDelay = function(){
    setTimeout(function () {
        showLoader();
    },2000);
    hideLoader();
}