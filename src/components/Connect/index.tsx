import { useEffect, useState } from 'react'
import { Container } from "./styled";
import AWS from "aws-sdk";
import { ConnectClient, StartChatContactCommand } from "@aws-sdk/client-connect";
import { ConnectParticipantClient, CreateParticipantConnectionCommand, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant"

const config = {
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIAS2R6U7WZQKDW5NYI",
    secretAccessKey: "Tef2mHIK3FVOV+Jlex/fa3wGAe9uHZqaWJdZnqUT",
    sessionToken: "IQoJb3JpZ2luX2VjEJb//////////wEaCXVzLWVhc3QtMSJHMEUCIGT1o/do6ey29pnhY4hbcRa2MzkIS038zGTQBTMz+3ViAiEArGhU9rJCpa8WJ8RfSNk3jwGl+PgvYnUbFr+GE4qxl6cqigMIThAAGgwxOTQ0Nzg2NjkyMzUiDESODnpiRKO3E1MW/SrnAs818evdGqz+UZyOPDEi6CU2ZnMfDYAD7CeE2M7BhMg2GSz1QaWvH832Xi02Q/7nuNj6NbrMQ/BaQqM6PjPjm/GRFz5qs3+dDN+Wc9lsuXZOtBm6hQx2cpNtszOpEDRvxKmjPp5YgCW7bzKfOdKjp5q+1fyDOfcy+Z8uG5RFCWAJmbIwJHwvQUJ5g6Mi4MQvUDqbk0hbCPaFoYOMyQ3dLS3Eygv9fKtH20d5AJJ2eXYoUEhL+zNqfiJmLvWZpNT5UjdCl+tr0f6MsMlA3zUNOfRUb166lFKFzcVJ+YqTQRHc7K+wHtGaBLPLdB8VFduge1OCQf1hqYkQGJ8GZFa4C+lHc0p47tT9gIJfBmcmtSrhngFTx5hwk8HJADaw8IlThX9L+/AQsN0kCtWnrxl0AJi+oJSMRWcjXu6Q3LOUPccFUTYIyjP1FIairFCqTVfkI4sSesQe5lgL8emC0UA884vzJHM0Yd6lMM2zu60GOqYBsBXIfeahTsUTarhJ+mmgxVfE6fbSpn7Cpc2GPi7UIkj+PlLPZ37mc+TZ4K+YOrP1cbE92XwOGnbGwNwRAT9L47ofp40nGtUwjnZr9TWcBmuM1cmRSOQzFRkaoHmZm5eJQ/bhlJ4hY7LccpbBX1dvawvD9n29dbLKe7ewDsySItMjNrI4SY8jC10m12pNeLipT+Ah4EslKy6Mk5y0onL2LLZZOWzxpg=="
  }
}
const client = new ConnectClient( config );
const client2 = new ConnectParticipantClient( config );

const Component = () => {

  const [contactData, setContactData] = useState<any>({})
  const [connection, setConnection] = useState<any>({})

    const startChatContactCommand = async() => {
      const input = {
        InstanceId: "cc516e3f-81f0-4bab-9952-07fa8b794444",
        ContactFlowId: "e31a4382-3266-46f8-9952-d1842e87e958",
        ParticipantDetails: { DisplayName: "Customer" },
      };
      const command = new StartChatContactCommand(input);
      const response = await client.send(command);
        setContactData({
          ContactId: response.ContactId,
          ParticipantId: response.ParticipantId,
          ParticipantToken: response.ParticipantToken,
        })
        await createParticipantConnectionCommand( response );
    };

    const createParticipantConnectionCommand = async( resp: any ) => {


      // const command = new CreateParticipantConnectionCommand({ ParticipantToken: resp.ParticipantToken, Type: ["CONNECTION_CREDENTIALS"] });
      const command = new CreateParticipantConnectionCommand({ ParticipantToken: resp.ParticipantToken, Type: ["WEBSOCKET", "CONNECTION_CREDENTIALS"] });
      const response = await client2.send(command);
      console.log(response)
      setConnection(response) 
      connectWebSocket( response?.Websocket?.Url || '' )
      //{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}
    }

    const connectWebSocket = ( socketUrl: string ) => {
      const ws = new WebSocket(socketUrl);

      ws.addEventListener('open', ( event ) => {
        const subscriptionMessage = JSON.stringify({
          topic: 'aws/subscribe',
          content: {
            topics: ['aws/chat']
          }
        });
        console.log(event)
        ws.send(subscriptionMessage);
      });
    }

    const getTranscriptCommand = async() => {
      const input = {
        ContactId: contactData.ContactId,
        ConnectionToken: connection.ConnectionCredentials.ConnectionToken, // required
      }
      const command = new GetTranscriptCommand(input);
      const response = await client2.send(command);
      console.log(response)
    }

    useEffect(() => {
      startChatContactCommand();
    }, [])
    
  return (
    <>
    <h1>Hola</h1>
    <button onClick={ () => getTranscriptCommand() }>Enviar</button>
    </>
  );
};

export { Component as Connect };
export default Component;
