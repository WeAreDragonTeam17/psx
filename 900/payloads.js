//------BIG THANKS TO SISTRO FOR THIS !!!!!--------

var LoadedMSG = "Gói dữ liệu đã nạp!";

var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

//Load payloads with GoldHEN

function Loadpayloadlocal(PLfile){ //Loading Payload via Payload Param.
    var PS4IP = "127.0.0.1";

	// First do an initial check to see if the BinLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:9090/status`);
    } else {
      req.open("GET", `http://${PS4IP}:9090/status`);
    }
		req.send();
		req.onerror = function(){
			console.log("Máy chủ BinLoader không hoạt động, đang thử tải payload trực tuyến...");
            Loadpayloadonline(PLfile);
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		    getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				    //Sending bins via IP POST Method
                    sendPayload(`http://${PS4IP}:9090`, req.response, function (req) {
                        if (req.status === 200) {
                            //alert("Payload sent !");
                        }else{
                            console.log('Không gửi được Payload, đang thử tải payload trực tuyến...');
                            setTimeout(() => {
                                Loadpayloadonline(PLfile);
                            }, 3000); // 3 seconds delay
                            return;
                        }
                    })
                }
			});
			} else {
				alert("Cannot Load Payload Because The BinLoader Server Is Busy");//<<If server is busy, alert message.
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads--------

// Load Payloads with exploit

function Loadpayloadonline(PLfile) {
    window.payload_path = PLfile;
    // If we have access to toogle_payload from lapse.js, use it
    if (typeof window.toogle_payload === 'function') {
        window.toogle_payload(PLfile);
    } else {
        console.log('Payload đã được thiết lập để tải sau khi khai thác: ' + PLfile);
    }
}

// PSFree Fix

function load_PSFreeFix(){
    const Confirmation = confirm("Bạn có chắc chắn muốn tải gói dữ liệu sửa lỗi PSFree không?");
    if (Confirmation) {
        // First try local loading through GoldHen
        Loadpayloadlocal("./payloads/ps4-psfree-fix.bin");
        
        // Also show loading message
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp xong gói dữ liệu sửa lỗi PSFree!";
        }
    }
}

// App2USB - Transfer Apps to USB
function load_app2usb(){
    const Confirmation = confirm("Bạn có muốn tải gói dữ liệu App2USB không? Tính năng này cho phép chuyển các ứng dụng sang bộ nhớ USB.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/app2usb.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Gói dữ liệu App2USB đã được nạp!";
        }
    }
}

// AppCache Install
function load_appcache_install(){
    const Confirmation = confirm("Bạn có muốn tải gói dữ liệu cài đặt AppCache không?");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/appcache-install.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã tải xong gói dữ liệu cài đặt AppCache!";
        }
    }
}

// Backup
function load_backup(){
    const Confirmation = confirm("Bạn có muốn tải gói dữ liệu SAO LƯU không? Thao tác này sẽ sao lưu dữ liệu hệ thống của bạn.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/backup.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Sao Lưu!";
        }
    }
}

// Disable Updates
function load_disable_updates(){
    const Confirmation = confirm("Bạn có muốn tải gói dữ liệu Chặn cập nhật? Thao tác này sẽ chặn các bản cập nhật hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/disable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Chặn Cập Nhật!";
        }
    }
}

// Enable Updates
function load_enable_updates(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Cho phép cập nhật? Thao tác này sẽ cho phép các bản cập nhật hệ thống.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/enable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Cho Phép Cập Nhật!";
        }
    }
}

// FTP Server
function load_ftp(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Máy chủ FTP? Thao tác này sẽ khởi động một máy chủ FTP trên PS4 của bạn.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ftp.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Máy Chủ FTP!";
        }
    }
}

// History Blocker
function load_history_blocker(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Chặn lịch sử? Thao tác này sẽ chặn việc theo dõi lịch sử trình duyệt.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/history-blocker.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Chặn Lịch Sử!";
        }
    }
}

// PS4 Debug
function load_ps4debug(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu PS4Debug? Thao tác này sẽ bật các tính năng gỡ lỗi.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ps4debug.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu PS4Debug!";
        }
    }
}

// PUP Decrypt
function load_pup_decrypt(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Giải mã PUP? Thao tác này cho phép giải mã các tệp cập nhật PS4.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/pup-decrypt.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Giải Mã PUP!";
        }
    }
}

// Restore
function load_restore(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Khôi phục? Thao tác này sẽ khôi phục dữ liệu hệ thống của bạn.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/restore.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Khôi Phục!";
        }
    }
}

// RIF Renamer
function load_rif_renamer(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu Đổi tên RIF? Công cụ này quản lý các tệp giấy phép.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/rif-renamer.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu Đổi Tên RIF!";
        }
    }
}

// WebRTE
function load_webrte(){
    const Confirmation = confirm("Bạn có muốn nạp gói dữ liệu WebRTE? Thao tác này sẽ bật các tính năng chỉnh sửa thời gian thực.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/WebRTE_900.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Đã nạp gói dữ liệu WebRTE!";
        }
    }
}

// Make all functions globally available
window.load_PSFreeFix = load_PSFreeFix;
window.load_app2usb = load_app2usb;
window.load_appcache_install = load_appcache_install;
window.load_backup = load_backup;
window.load_disable_updates = load_disable_updates;
window.load_enable_updates = load_enable_updates;
window.load_ftp = load_ftp;
window.load_history_blocker = load_history_blocker;
window.load_ps4debug = load_ps4debug;
window.load_pup_decrypt = load_pup_decrypt;
window.load_restore = load_restore;
window.load_rif_renamer = load_rif_renamer;
window.load_webrte = load_webrte;
