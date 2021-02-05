
function validateEmail(email) {

    if(email == null || email == "" || email == " "){

        swal({
            title: "Error Occured",
            text: "Please enter an email. Field can't be empty!",
            icon: "error",
            button: "Try Again",
          });

        return;
    }


    fetch(`https://zerobounce1.p.rapidapi.com/v2/validate?ip_address=replace_the_IP_address_the_email_signed_up_from&email=${email}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a8bd8ccf88msh958b826f1270a1cp150de0jsn560ca990b193",
            "x-rapidapi-host": "zerobounce1.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(data => {
        
            document.getElementById("status-panel").style.display = "block";
            let container = document.getElementById("info-container")
            document.getElementById("mail").innerText = data.address;

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
           

           let status = document.createElement('h5');
           let account = document.createElement('h5')
           let domain = document.createElement('h5')
           let freemail = document.createElement('h5')
           let smtp = document.createElement('h5')
           let domainAge = document.createElement('h5')

            let freemailStatus;

           status.innerText = `Status: ${data.status}`;
           account.innerText = `Account: ${data.account}`;
           domain.innerText = `Domain: ${data.domain}`;

            if(data.freemail)
                freemailStatus = "Yes";
            else
                freemailStatus = "No";    

           freemail.innerText = `Is Free Mail: ${freemailStatus}`;
           smtp.innerText = `SMTP Provider: ${data.smtp_provider}`;
           domainAge.innerText = `Domain Age: ${data.domain_age_days} Days`;
           
           container.appendChild(status);
           container.appendChild(account);
           container.appendChild(domain);
           container.appendChild(freemail);
           container.appendChild(smtp);
           container.appendChild(domainAge);

        
        })
        .catch(err => {
            console.error(err);
        });
        
}