import axios from "axios"

const url = 'https://graph.facebook.com/v20.0/448802568306730/messages';

const headers = {
  'Authorization': 'Bearer EAAWSTH1FtOgBO6IBn9ncMM82q2eJGCTCLnZCCHCn0ndvLCwJUsHS5r2cuUYTyeEXLEwlsDMnqvKbN17AHLOJEOiF6JE3y87DHQfmNcZBbyHOB3Ez2wgURUeVhFABZAy5DxSWnWtBlQuTNkwAtHuQo2J9JzrEKEZBhZArG3Nkwd0ZACVUX3HKkL0Nd0qSKdJOLelQZDZD',
  'Content-Type': 'application/json'
};

const data = {
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: "50254673367",
  type: "interactive",
  interactive: {
    type: "button",
    header: {
      type: "image", 
      image: {
          link: "https://w7.pngwing.com/pngs/540/203/png-transparent-iron-man-illustration-thor-marvel-comics-iron-man-superhero-marvel-universe-ironman-comics-heroes-black-widow-thumbnail.png",
      } 
    },
    body: {
      text: "Este es un mensaje enviado con la API de WhatsApp"
    },
    footer: {
      text: "Catalogo de productos"
    },
    action: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "cancel-button",
            title: "Cancel"
          }
        },
        {
          type: "reply",
          reply: {
            id: "change-button",
            title: "Change"
          }
        }
      ]
    }
  }

};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });