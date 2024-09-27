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
        type: "list",
        header: {
            type: "text",
            text: "Lista de productos de septiembre 2024"
        },  
        body: {
            text: "Todo lo que necesitas esta aquí"
        },
        footer: {
            text: "Ve más productos en www.masproductos.com"
        },
        action: {
            button: "Ver productos",
            sections: [
                {
                    title: "Productos del mes",
                    rows: [
                        {
                            id: "1",
                            title: "Jarabe",
                            description: "Jarabe para la tos"
                        },
                        {
                            id: "2",
                            title: "Cepillo",
                            description: "Cepillo de dientes"
                        }
                    ]
                },
                {
                    title: "Mas productos",
                    rows: [
                        {
                            id: "3",
                            title: "Jabon",
                            description: "Jabon de manos"
                        },
                        {
                            id: "4",
                            title: "Pastillas",
                            description: "Pastillas para la tos"
                        }
                    ]
                },
            ],
        }
    }
}

axios.post(url, data, { headers })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });