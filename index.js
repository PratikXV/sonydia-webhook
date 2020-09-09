const express = require('express');
const dfff = require('dialogflow-fulfillment');
const app = express();

app.get('/', (req, res)=>{
    res.send("Sony Dia Bot");
});

app.post('/', express.json(), (req,res)=>{
    const agent = new dfff.WebhookClient({
        request: req,
        response:res
    });

    function invoiceNumber(agent){
        agent.add("Thanks for entering Invoice number. Please wait! we are checking status.As per our record, your address is 404/A Sunrise Park, Do you want to schedule installation of your device?");
    }

    function serviceNumber(agent){
        agent.add("Response from webhook!")
    }

    var intentMap = new Map();
    intentMap.set('022.UserEnterInvoiceNumber', invoiceNumber);
    intentMap.set('intentName', serviceNumber);

    agent.handleRequest(intentMap);
});

app.listen(9999, ()=>console.log("Bot is live at port 9999"));