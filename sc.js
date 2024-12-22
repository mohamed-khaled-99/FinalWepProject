
function validation() {
    console.log(inp.value)
    var inpVal = inp.value;
    var span = document.getElementsByTagName("span")[0];
    if (inpVal === "") {
        span.textContent = "required"
        span.style.display = "inline"
    } else if (isFinite(inpVal)) {
        span.textContent = "u must enter string data"
        span.style.display = "inline"
            alert("U enterd wrong data")
    } else {
        span.style.display = "none"
        enterdata.style.display = "none"
        dispalyData.textContent = "hello" + inpVal
    }
}