const display = document.getElementById("display")

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function percentage() {
    display.value = (display.value) / 100;

}

function calculate()
{
      display.value = eval(display.value)
}
  
