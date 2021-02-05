
function validateEmail(email) {
    fetch(`https://zerobounce1.p.rapidapi.com/v2/validate?ip_address=replace_the_IP_address_the_email_signed_up_from&email=${email}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a8bd8ccf88msh958b826f1270a1cp150de0jsn560ca990b193",
            "x-rapidapi-host": "zerobounce1.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let status = document.createElement('h5');
            status.innerText = `Status: ${data.status}`;
            document.getElementById("info-container").appendChild(status);

            document.getElementById("status-panel").style.display = "block";
        })
        .catch(err => {
            console.error(err);
        });
        
}

validateEmail('me.ashik.personal@gmail.com');