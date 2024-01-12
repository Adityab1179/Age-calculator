let today = new Date();
let date = new Date(document.querySelector(".input").value);
let currDate = today.toLocaleDateString('en-US');
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let dateValue = document.querySelector(".input").value;

    if (dateValue !== "") {
        date = new Date(dateValue);

        if (isValidDate(date)) {
            let yeardiff = today.getFullYear() - date.getFullYear();
            let monthdiff = today.getMonth() - date.getMonth();
            let datediff = today.getDate() - date.getDate();

            if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < date.getDate())) {
                yeardiff--;
            }

            if (monthdiff < 0) {
                monthdiff = 12 + monthdiff;
            }

            // Calculate the absolute difference in days
            datediff = Math.abs(datediff);

            let outputSection = document.querySelector(".output-section");
            outputSection.style.opacity = 1;
            let output = document.querySelector(".output");
            output.innerHTML = `Your age is: ${yeardiff} year(s), ${monthdiff} month(s), and ${datediff} day(s)`;
        } else {
            let outputSection = document.querySelector(".output-section");
            outputSection.style.opacity = 1;
            let output = document.querySelector(".output");
            output.innerHTML = "Enter a valid date format";
        }
    } else {
        let outputSection = document.querySelector(".output-section");
        outputSection.style.opacity = 1;
        let output = document.querySelector(".output");
        output.innerHTML = "Please enter a date";
    }
});

function isValidDate(dateStr) {
    const dateObj = new Date(dateStr);
    return !isNaN(dateObj.getTime());
}
