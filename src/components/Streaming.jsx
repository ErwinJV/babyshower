import React, { useEffect } from "react";
import axios from "axios";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

const client = ZoomMtgEmbedded.createClient();
const Streaming = () => {
  const apiKey = "GzT0-AKsT_2sMOatd-G25g";
  const apiSecret = "Ip2iOHl5aMXkJ9k32anHgUTtbDdVqjog67xI";
  const meetingNumber = 88037409441;
  const password = "BV4Y3w";
  const username = "Derwin";
  const email = "erwinjv98@gmail.com";

  useEffect(() => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    const signature = async () => {
      await axios
        .post("https://zoom-babyshower.herokuapp.com",{
          
      "meetingNumber": meetingNumber,
       "role": 1
        } )
        .then((response) => {
          if (response.status === 200) {
            const signature = response.data.signature;
           
            client.init({
              debug: true,
              zoomAppRoot: meetingSDKElement,
              language: "es-ES",
              customize: {
                meetingInfo: [
                  "topic",
                  "host",
                  "mn",
                  "pwd",
                  "telPwd",
                  "invite",
                  "participant",
                  "dc",
                  "enctype",
                ],
                toolbar: {
                  buttons: [
                    {
                      text: "Custom Button",
                      className: "CustomButton",
                      onClick: () => {
                        console.log("custom button");
                      },
                    },
                  ],
                },
            
              },
            });

            client.join({
              apiKey: apiKey,
              signature: signature,
              meetingNumber: meetingNumber,
              password: password,
              userName: "Derwin"
            })
          }
        });
    };

    signature();
  }, []);

  return (
    <div
      className="d-flex h-100 justify-content-center align-items-center"
      id="meetingSDKElement"
    ></div>
  );
};

export default Streaming;
