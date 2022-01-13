function check() {
    check_field(document.getElementById("A1"));
    var valueA1 = document.getElementById("A1").value;
    check_field(document.getElementById("A2"));
    var valueA2 = document.getElementById("A2").value;
    check_field(document.getElementById("B1"));
    var valueB1 = document.getElementById("B1").value;
    check_field(document.getElementById("B2"));
    var valueB2 = document.getElementById("B2").value;
    check_field(document.getElementById("C1"));
    var valueC1 = document.getElementById("C1").value;
    check_field(document.getElementById("C2"));
    var valueC2 = document.getElementById("C2").value;
    check_field(document.getElementById("D1"));
    var valueD1 = document.getElementById("D1").value;
    check_field(document.getElementById("D2"));
    var valueD2 = document.getElementById("D2").value;

    var sum1 = parseInt(valueA1) + parseInt(valueB1) + parseInt(valueC1) + parseInt(valueD1);
    check_sum(sum1, document.getElementById("sum1"), document.getElementById("com1"), document.getElementById("rest1"));

    var sum2 = parseInt(valueA2) + parseInt(valueB2) + parseInt(valueC2) + parseInt(valueD2);
    check_sum(sum2, document.getElementById("sum2"), document.getElementById("com2"), document.getElementById("rest2"));
}
function check_field(handler) {
    if (handler.value > 100) {
        handler.value = 100;
    }
    if (handler.value < 0) {
        handler.value = 0;
    }
}
function check_sum(sum, handler, handler_error, handler_rest) {
    var error = false
    if (sum > 100) {
        handler_error.innerHTML = "Rozdano za dużo punktów!";
        handler_rest.innerText = "Odejmij:" + Math.abs(100 - sum);
        handler.style.backgroundColor = "red";
    }
    if (sum < 100) {
        handler_error.innerText = "Rozdaj wszystkie punkty!";
        handler_rest.innerText = "Pozostało: " + (100 - sum);
        handler.style.backgroundColor = "yellow";
    }
    if (sum == 100) {
        handler_error.innerText = "Rozdaj wszystkie punkty!";
        handler_rest.innerText = "Pozostało: " + (100 - sum);
        handler.style.backgroundColor = "green";
    }
    handler.innerText = sum;
}