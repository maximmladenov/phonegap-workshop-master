var EmployeeView = function(employee) {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
        this.el.on('click', '.add-contact-btn', this.addToContacts);
        this.el.on('click', '.change-pic-btn', this.changePicture);
		this.el.on('click', '.scan-btn1', this.scanQRCode1);
		this.el.on('click', '.scan-btn2', this.scanQRCode2);
		this.el.on('click', '.scan-btn3', this.scanQRCode3);
		this.el.on('click', '.scan-btn4', this.scanQRCode4);
		this.el.on('click', '.scan-btn5', this.scanQRCode5);
		this.el.on('click', '.scan-btn6', this.scanQRCode6);
		this.el.on('click', '.scan-btn7', this.scanQRCode7);
		this.el.on('click', '.scan-btn8', this.scanQRCode8);
		this.el.on('click', '.scan-btn9', this.scanQRCode9);
		this.el.on('click', '.scan-btn10', this.scanQRCode10);
		this.el.on('click', '.scan-btn11', this.scanQRCode11);		
    };

    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        return this;
    };
	
	this.scanQRCode1 = function() {
		event.preventDefault();
		console.log("scanQRCode");
		cordova.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
    };
	
	this.scanQRCode2 = function() {
		console.log("deneme");
		cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
	this.scanQRCode3 = function() {
		console.log("deneme");
		cordova.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
	};	

    this.scanQRCode4 = function() {
		console.log("deneme");
		window.plugin.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
   this.scanQRCode5 = function() {
		console.log("deneme");
		window.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
   this.scanQRCode6 = function() {
		console.log("deneme");
		window.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
    this.scanQRCode7 = function() {
		console.log("deneme");
		window.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };

    this.scanQRCode8 = function() {
		console.log("deneme");
		window.cordova.plugin.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
   this.scanQRCode9 = function() {
		console.log("deneme");
		window.cordova.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
   this.scanQRCode10 = function() {
		console.log("deneme");
		window.cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
    this.scanQRCode11 = function() {
		console.log("deneme");
		window.cordova.plugins.BarcodeScanner.scan(
		  function (result) {
			  alert("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		  }, 
		  function (error) {
			  alert("Scanning failed: " + error);
		  }
	   );
   };
   
    this.addLocation = function(event) {
        event.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                $('.location', this.el).html(position.coords.latitude + ',' +position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;
    };

    this.addToContacts = function(event) {
        event.preventDefault();
        console.log('addToContacts');
        if (!navigator.contacts) {
            app.showAlert("Contacts API not supported", "Error");
            return;
        }
        var contact = navigator.contacts.create();
        contact.name = {givenName: app.currentEmployee.firstName, familyName:  app.currentEmployee.lastName};
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', app.currentEmployee.officePhone, false);
        phoneNumbers[1] = new ContactField('mobile', app.currentEmployee.cellPhone, true); // preferred number
        contact.phoneNumbers = phoneNumbers;
        contact.save();
        return false;
    };

    this.changePicture = function(event) {
        event.preventDefault();
        console.log('changePicture');
        if (!navigator.camera) {
            app.showAlert("Camera API not supported", "Error");
            return;
        }
        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };

        navigator.camera.getPicture(
            function(imageData) {
                $('#image').attr('src', "data:image/jpeg;base64," + imageData);
            },
            function() {
                alert('Error taking picture');
            },
            options);

        return false;
    };

    this.initialize();

}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());