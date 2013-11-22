var ScanView = function() {

    this.initialize = function() {
        this.el = $('<div/>');
		this.el.load(this.scanQRCode);
    };

    this.render = function() {
        this.el.html(ScanView.template());
        return this;
    };

    this.scanQRCode = function() {
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
	
   this.initialize();

}

ScanView.template = Handlebars.compile($("#scan-tpl").html());