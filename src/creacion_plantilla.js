import axios from "axios"

const url = 'https://graph.facebook.com/v20.0/448802568306730/messages';

const headers = {
  'Authorization': 'Bearer EAAWSTH1FtOgBO0Ul8aV0uUGS6B4vBQuLeyVZBFklbRB4IY1nJB5anZCXPQsu4uMge7S3dAXmpdxm4Pe9uXncmYVpVcNjjHdEtvzEM20n18C3uA8CB6d0hNbVeYdbwF00IoGQfpFT5RNd6dPOKHGTZBmTm2npAqVHxsMDQT55YTWyzFGXgoOm1xjLuWZAxTs3aRYvpZCBTxubYyNwSqrvmv2g0ugje548OZB082',
  'Content-Type': 'application/json'
};

const data = {
  messaging_product: "whatsapp",
  to: "50254673367",
  name: "Productos1",
  category: "MARKETING",
  lenguage: "es_ES",
  components: [
    {
      type: "HEADER",
      format: "text",
      text: "Productos del mes"
    },
    {
      type: "BODY",
      text: "Cuerpo de la plantilla"
    },
    {
      type: "FOOTER",
      text: "Pie de la plantilla"
    },
    {
      type: "BUTTONS",
      buttons: [
        {
          type: "PHONE_NUMBER",
          text: "Llamar",
          phone_number: "50254673367"
        }
      ]
    }
  ]
};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });