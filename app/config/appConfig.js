const appConfig = {
    "accessKeyId": "AKIASVYZBZXHTW34RV25",
    "secretAccessKey": "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",
    "region": "us-east-1",
    "apiVersion": "2016-11-28",
    "botAlias": "diabetesTracker",
    "botName": "DiabetesTracker",
    bot: {
        name: "Diabetes Tracker 🤖",
        initMessage: "Hi, I'm Diabetes Tracker Bot. How can I help you today?",
        completeMessage: "Well too bad! Anything else I can help you with?"
    },
    theme: {
        header:{
            bgColor: "black",
            textColor: "white",
        },
        message:{
            botMsgBgColor: "steelblue",
            botMsgTextColor: "white",
            userMsgBgColor: "green",
            userMsgTextColor: "white",
            dateTextColor: "white" //auto opacity 0.8
        }
    }
};
export default appConfig;