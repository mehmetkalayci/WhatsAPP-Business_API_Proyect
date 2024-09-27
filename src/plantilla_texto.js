import axios from "axios"

const url = 'https://graph.facebook.com/v20.0/448802568306730/messages';

const headers = {
  'Authorization': 'Bearer EAAWSTH1FtOgBO0Ul8aV0uUGS6B4vBQuLeyVZBFklbRB4IY1nJB5anZCXPQsu4uMge7S3dAXmpdxm4Pe9uXncmYVpVcNjjHdEtvzEM20n18C3uA8CB6d0hNbVeYdbwF00IoGQfpFT5RNd6dPOKHGTZBmTm2npAqVHxsMDQT55YTWyzFGXgoOm1xjLuWZAxTs3aRYvpZCBTxubYyNwSqrvmv2g0ugje548OZB082',
  'Content-Type': 'application/json'
};

const data = {
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: "50254673367",
  type: "template",
  template: {
    name: "text",
    language: {
        code: "en_US"
    },
    components: [
        {
            type: "body",
            parameters: [
                {
                    type: "text",
                    text: "Enviando mensaje"
                },
                {
                    type: "currency",
                    currency: {
                        fallback_value: "6000",
                        code: "USD",
                        amount_1000: 600
                    }
                },
                {
                    type: "date_time",
                    date_time: {
                        fallback_value: Date()
                    }
                }
            ]
        }
    ]
  }
};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });