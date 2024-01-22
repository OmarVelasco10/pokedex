import { Container } from "./styled";
import AWS from "aws-sdk";
import {
  ConnectClient,
  StartChatContactCommand,
} from "@aws-sdk/client-connect";
import { useEffect } from "react";

// const config = AWS.config.update({
//   credentials: new AWS.Credentials(
//     "ASIAS2R6U7WZQO62JQ5Q",
//     "AzxDcGJAry8q8plPUiW2O4NyV8qt6oE5Lrsa7qI+"
//   ),
//   region: "us-east-1", // Reemplaza con la región correcta de tu instancia de Amazon Connect
// });

const client = new ConnectClient({
  region: "us-east-1",
  credentials: {
    accessKeyId:   "",
    secretAccessKey:   "",
    sessionToken: ""
  }
});

const input = {
  InstanceId: "mxmartsalessupport", // required
  ContactFlowId:
    "arn:aws:connect:us-east-1:194478669235:instance/cc516e3f-81f0-4bab-9952-07fa8b794444/contact-flow/e31a4382-3266-46f8-9952-d1842e87e958", // required
  ParticipantDetails: {
    //ParticipantDetails
    DisplayName: "Customer",
  },
  InitialMessage: {
    // ChatMessage
    ContentType: "text/plain",
    Content: "Hola mugroso",
  },
};

const command = new StartChatContactCommand(input);




const Component = () => {

    const initChat = async() => {
        const response = await client.send(command);
        console.log(response);
    }

    useEffect(() => {
      initChat();
    }, [])
    
  return (
    <Container>
      <h1>Hola</h1>
    </Container>
  );
};

export { Component as Connect };
export default Component;
