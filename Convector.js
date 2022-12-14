let input = document.getElementById("input")
let result = document.getElementById("result")
let inputType = document.getElementById("inputType")
let resultType = document.getElementById("resultType")
let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)



function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // then input Miliseconds!!
    if (inputTypeValue === "Miliseconds" && resultTypeValue === "Miliseconds") {

        result.value = input.value;

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Seconds") {

        result.value = (Number(input.value) * 0.001).toFixed(3);

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Minutes") {

        result.value = (Number(input.value) * 0.00001667).toFixed(3);

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Hours") {

        result.value = (Number(input.value) * 0.0000002778.toFixed(3));

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Days") {

        result.value = (Number(input.value) * 0.00000001157).toFixed(3);

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Weeks") {

        result.value = (Number(input.value) * 0.000000001653).toFixed(3);

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.0000000003803).toFixed(3);

    } else if (inputTypeValue === "Miliseconds" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.00000000003169).toFixed(3);

    }


    // then input Seconds
    if (inputTypeValue === "Seconds" && resultTypeValue === "Miliseconds") {

        result.value = (Number(input.value) * 1000).toFixed(3);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Seconds") {

        result.value = Number(input.value);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Minutes") {

        result.value = (Number(input.value) * 0.01667).toFixed(3);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Hours") {

        result.value = (Number(input.value) * 0.00001157).toFixed(3);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Weeks") {

        result.value = (Number(input.value) * 0.000001653).toFixed(3);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.0000003803).toFixed(3);

    } else if (inputTypeValue === "Seconds" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.00000003169).toFixed(3);

    }

    // then input Minutes
    if (inputTypeValue === "Minutes" && resultTypeValue === "Miliseconds") {

        result.value = (Number(input.value) * 60000).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Seconds") {

        result.value = (Number(input.value) * 60).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Minutes") {

        result.value = Number(input.value);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Hours") {

        result.value = (Number(input.value) * 0.01667).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Days") {

        result.value = (Number(input.value) * 0.0006944).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Weeks") {

        result.value = (Number(input.value) * 0.00009921).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.00002282).toFixed(3);

    } else if (inputTypeValue === "Minutes" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.000001901).toFixed(3);

    }


    // then input Hours
    if (inputTypeValue === "Hours" && resultTypeValue === "Miliseconds") {

        result.value = (Number(input.value) * 3600000).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Seconds") {

        result.value = (Number(input.value) * 3600).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Minutes") {

        result.value = (Number(input.value) * 60).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Hours") {

        result.value = Number(input.value);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Days") {

        result.value = (Number(input.value) * 0.04167).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Weeks") {

        result.value = (Number(input.value) * 0.005952).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.001369).toFixed(3);

    } else if (inputTypeValue === "Hours" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.0001141).toFixed(3);

    }


    // then input Days
    if (inputTypeValue === "Days" && resultTypeValue === "Miliseconds") {

        result.value = (Number(input.value) * 86400000).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Seconds") {

        result.value = (Number(input.value) * 86400).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Minutes") {

        result.value = (Number(input.value) * 1440).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Hours") {

        result.value = (Number(input.value) * 24).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Days") {

        result.value = Number(input.value);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Weeks") {

        result.value = (Number(input.value) * 0.1429).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.03285).toFixed(3);

    } else if (inputTypeValue === "Days" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.002738).toFixed(3);

    }


    // then input Weeks
    if (inputTypeValue === "Weeks" && resultTypeValue === "Miliseconds") {

        result.value = (Number(input.value) * 604800000).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Seconds") {

        result.value = (Number(input.value) * 604800).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Minutes") {

        result.value = (Number(input.value) * 10080).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Hours") {

        result.value = (Number(input.value) * 168).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Days") {

        result.value = (Number(input.value) * 7).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Weeks") {

        result.value = Number(input.value);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Months") {

        result.value = (Number(input.value) * 0.23).toFixed(3);

    } else if (inputTypeValue === "Weeks" && resultTypeValue === "Years") {

        result.value = (Number(input.value) * 0.01916).toFixed(3);

    }


        // then input Months
        if (inputTypeValue === "Months" && resultTypeValue === "Miliseconds") {

            result.value = (Number(input.value) * 2629744200).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Seconds") {
    
            result.value = (Number(input.value) * 2629744).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Minutes") {
    
            result.value = (Number(input.value) * 43829).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Hours") {
    
            result.value = (Number(input.value) * 730.5).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Days") {
    
            result.value = (Number(input.value) * 30.44).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Weeks") {
    
            result.value = (Number(input.value) * 4.348).toFixed(3);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Months") {
    
            result.value = Number(input.value);
    
        } else if (inputTypeValue === "Months" && resultTypeValue === "Years") {
    
            result.value = (Number(input.value) * 0.08333).toFixed(3);
    
        }


        // then input Years
        if (inputTypeValue === "Years" && resultTypeValue === "Miliseconds") {

            result.value = (Number(input.value) * 31557600000).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Seconds") {
    
            result.value = (Number(input.value) * 31557600).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Minutes") {
    
            result.value = (Number(input.value) * 525960).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Hours") {
    
            result.value = (Number(input.value) * 8766).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Days") {
    
            result.value = (Number(input.value) * 365.3).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Weeks") {
    
            result.value = (Number(input.value) * 52.18).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Months") {
    
            result.value = (Number(input.value) * 12).toFixed(3);
    
        } else if (inputTypeValue === "Years" && resultTypeValue === "Years") {
    
            result.value = Number(input.value);
    
        }

}