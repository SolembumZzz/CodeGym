let flashLight = {
    status: false,
    checkStatus: function () {
        if (this.status == true) {
            console.log('The flashlight is on.');
        } else if (this.status == false) {
            console.log('The flashlight is off.');
        }
    },
};

let multipurposedSwitch = {
    turnSwitch: function (gadget) {
        if (gadget.status == false) {
            gadget.status = true;
            gadget.checkStatus();
        } else if (gadget.status == true) {
            gadget.status = false;
            gadget.checkStatus();
        }
    },
};