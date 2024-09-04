function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "navis") {
      x.className += " responsive";
    } else {
      x.className = "navis";
    }
}