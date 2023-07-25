import React, { useState, useEffect } from "react";
 /* eslint-disable */
const Greeting = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  let greeting;

  if (hours >= 0 && hours < 12) {
    greeting = "Buenos días, Charlemos por WhatsApp";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Buenas tardes, Charlemos por WhatsApp";
  } else {
    greeting = "Buenas noches, Charlemos por WhatsApp";
  }

  return (
    <div class="wt">
      <div class="popup">
        <p>{greeting}</p>
      </div>
      <div class="wt-icon">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=+56936681029 & text=Hola, mi nombre es...">
            <img alt="" src="https://i.ibb.co/VgSspjY/whatsapp-button.png" />
        </a>
      </div>
    </div>
  );
};

export default Greeting;
