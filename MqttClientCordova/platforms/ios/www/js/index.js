var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	
    	console.log(device.uuid);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
app.initialize();

$(document).ready(function() {
	console.log('>> try to attach a function to the submit button that takes the text and sends to server');
	
	$("#send").click(function () {
		var message = $("#message").val();
		
		var client = new Messaging.Client("localhost", 1883, "vishal");
		console.log(client);
		
	});
});