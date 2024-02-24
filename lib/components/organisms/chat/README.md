# Chat

A conversational UI frees the designer to concentrate on user requests without assuming what they would like to do first. The use should be able to make a request to do anything within the provided system.

Cross country provides the components to compose and build a chat tool. I have created one based surely influenced by my years working with the [Ask Iris](https://askiris.intelliresponse.com/askiris/?interfaceID=2&requestType=NormalRequest&source=3&question=What+is+a+&id=1343) system while at [Intelliresponse (acquired by 247 inc)](https://techcrunch.com/2014/11/10/14-years-in-the-making-247-buys-intelliresponse-for-its-customer-service-suite/).

What makes up the chat bot experience?

Technically, I'm relying on websockets via PusherJS to provide real time data, Elasticsearch for fast response retrevial, and Perplexity as the AI. 

The chat is composed of an avatar: the Wisp component, an input box and an optional button to send the text but the user can use the enter key instead. 
 
### Inspiration

- [v0](https://v0.dev/)
- [voiceflow](https://www.voiceflow.com/)