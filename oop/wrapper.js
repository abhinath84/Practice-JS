/* Create a Wrapper class */

function BetterSelect(selectId) {
    this.selectObj = null;

    if((selectId != null) && (selectId != '')) {
        this.selectObj = document.getElementById(selectId);
    }
}

BetterSelect.prototype.clear = function() {
    this.selectObj.options.length = 0;
}

BetterSelect.prototype.fill = function(oValues) {
    if((oValues != null) && (oValues.length > 0)) {
        this.clear();

        for(var i in oValues)
            this.selectObj.options[i] = new Option(oValues[i]);
    }
}

BetterSelect.prototype.count = function() {
    return(this.selectObj.options.length);
}

BetterSelect.prototype.find = function(strToFind, bSelect) {
    var inx = -1;
    this.selectObj.options.selectedIndex = -1;

    for(var i = 0; i < this.count(); i++) {
        if(this.selectObj.options[i].text == strToFind) {
            inx = i;
            if(bSelect)
                this.selectObj.options.selectedIndex = i;
        }
    }

    return(inx);
}
