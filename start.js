// import dotenv from 'dotenv';
import WhatsApp from 'whatsapp';

// dotenv.config()

// Your test sender phone number
const wa = new WhatsApp( 15556170729 );

// Enter the recipient phone number
const recipient_number = 50254673367;

async function send_message(){
    try{
        const sent_text_message = wa.messages.text( { "body" : "Hello world" }, recipient_number );

        await sent_text_message.then( (res) => {
            console.log( res.rawResponse() );
        });
    }
    catch( e ){
        console.log( JSON.stringify( e ) );
    }
}

send_message();