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
  type: "image", 
  image: {
    link: "https://w7.pngwing.com/pngs/540/203/png-transparent-iron-man-illustration-thor-marvel-comics-iron-man-superhero-marvel-universe-ironman-comics-heroes-black-widow-thumbnail.png",
    caption: "IRON MAN"
  } 
};

const data2 = {
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: "50254673367",
  type: "text",
  text: {
    preview_url: true,
    body: "Mira la pagina oficial del Real Madrid acá: https://www.realmadrid.com/es-ES"
  }
}

const data3 = {
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: "50254673367",
  type: "template",
  template: {
    name: "hello_world",
    language: {
      code: "en_US"
    } 
  }
}

axios.post(url, data2, { headers })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });