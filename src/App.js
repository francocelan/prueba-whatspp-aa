import logo from './logo.svg';
import './App.css';

function App() {
  // todas las pruebas deben ser con _target="blank" y otra con _target="self" ademas de probar con diferentes url api de whastapp , la corta y la larga. ademas debemos probar 2 por handleClick con windows.href y otra con window.open

  const handleClick1 = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0"
  }

  const handleClick2 = () => {

    window.open("https://api.whatsapp.com/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0"); // abrir en otra ventana

  }

  const handleClick3 = () => {

    window.open("https://api.whatsapp.com/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0", '_blank'); // abrir en otra ventana
  }


  return (
    <div className="App">
      <header className="App-header">
        <a href="https://api.whatsapp.com/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0" target="_blank">Probar whatsapp 1</a>
        <br />
        <br />
        <a href="https://api.whatsapp.com/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0">Probar whatsapp 2</a>
        <br />
        <br />

        <a href="https://wa.me/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0" target="_blank">Probar whatsapp 3</a>
        <br />
        <br />
        <a href="https://wa.me/send/?phone=5493548566627&text=Hola%2C+te+consulto+por+el+anuncio+oz53.alquilerargentina.com+%0A%0AMe+interesa+reservar%3A+%0ATipologia%3A+Caba%C3%B1a+4+Personas%0A%2AIngresando+el+d%C3%ADa%3A+02%2F02%2F2023%2A+%0A%2ACantidad+de+noches%3A+13%2A+%0ASaliendo+el+d%C3%ADa%3A+15%2F02%2F2023%0A%2AHu%C3%A9spedes%3A+4+adultos%2A+%0ANombre%3A+Franco%0ALocalidad%3A+Buenos+Aires%0A%0Atest%0A%0A%C2%BFTen%C3%A9s+actualizados+tus+precios+y+disponibilidad+en+Alquiler+Argentina%3F%0A%0ASi+este+alojamiento+no+est%C3%A1+disponible+o+el+precio+no+est%C3%A1+actualizado%2C+informalo+ac%C3%A1%3A+oz53.alquilerargentina.com%2F%3Freportar%3D1+%C2%A1Gracias%21&type=phone_number&app_absent=0">Probar whatsapp 4</a>
        <br />
        <br />

        <a href="#" onClick={handleClick1}>Probar whatsapp 5</a>
        <br />
        <br />

        <a href="#" onClick={handleClick2}>Probar whatsapp 6</a>
        <br />
        <br />

        <a href="#" onClick={handleClick3}>Probar whatsapp 7</a>
        <br />
        <br />

        
      </header>
    </div>
  );
}

export default App;
