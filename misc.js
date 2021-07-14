String.prototype.leftTrim = function () {
    return this.replace(/^\s+/, "");
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function error(errMsg) {
    document.getElementById('error-container').style.display = "inline-block";
    document.getElementById('error').innerHTML = errMsg;
}