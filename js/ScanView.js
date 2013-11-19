var ScanView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
        
    };

    this.render = function() {
        this.el.html(ScanView.template());
        return this;
    };

	var scanner = cordova.require("cordova/plugin/BarcodeScanner");
    this.scanQRCode = function() {
		scanner.scan(
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
   }
	
    this.initialize();

}

ScanView.template = Handlebars.compile($("#scan-tpl").html());