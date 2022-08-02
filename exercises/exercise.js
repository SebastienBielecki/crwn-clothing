"use-strict";

function processData(input) {
    const inputArray = input.split(";");
    //console.log(inputArray);
    let resultArray = [];
    let result = "";
    if (inputArray[0] === "S") {
        for (let char of inputArray[2]) {
            if (char.match(/[A-Z]/)) {
                result += (" " + char.toLocaleLowerCase());
            } else {
                result += char;
            }
        }
        result = result.trim();
        if (inputArray[1] === "M") {
            result = result.substring(0, result.length -2);
        }
        console.log(result);
    }
    if (inputArray[0] === "C") {
        //console.log("triggered");
        resultArray = inputArray[2].split(" ");
        if (inputArray[1] === "C") {
            for (let i = 0; i<resultArray.length; i++) {
                resultArray[i] = resultArray[i][0].toUpperCase() + resultArray[i].substring(1);
            }
            result = resultArray.join("");
            console.log(result);
        }
        if (inputArray[1] === "V") {
            for (let i = 1; i<resultArray.length; i++) {
                resultArray[i] = resultArray[i][0].toUpperCase() + resultArray[i].substring(1);
            }
            result = resultArray.join("");
            console.log(result);
        }
        if (inputArray[1] === "M") {
            for (let i = 1; i<resultArray.length; i++) {
                resultArray[i] = resultArray[i][0].toUpperCase() + resultArray[i].substring(1);
            }
            result = resultArray.join("") + "()";
            console.log(result);
        }
    }

}

processData("S;M;plasticCup()");
processData("C;V;mobile phone");
processData("C;C;coffee machine");
processData("S;C;LargeSoftwareBook");
processData("C;M;white sheet of paper");
processData("S;V;pictureFrame");
processData("S;V;iPad");
processData("C;M;mouse pad");
processData("C;C;code swarm");
processData("S;C;OrangeHighlighter");