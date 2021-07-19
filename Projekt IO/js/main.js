function BMI() {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Twoje BMI wynosi: " + bmio;
};

function BMR() {
    var gender = document.getElementById('g').value;
    var wiek = document.getElementById('age').value;
    var wzr = document.getElementById('wzrost').value;
    var w = document.getElementById('waga').value;
    var bmr;
    var bmro;

    if (gender == "male") {
      var bmr = (66 + (13.7 * w) + (5 * wzr) - (6.76 * wiek));
      var bmro = (bmr.toFixed(2));
    }
    else {
      var bmr = (655 + (9.6 * w) + (1.8 * wzr) - (4.7 * wiek));
      var bmro = (bmr.toFixed(2));
    }

    document.getElementById("result2").innerHTML = "Twoje BMR wynosi: " + bmro;
};
