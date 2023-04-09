import { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Weather from "./components/Weather";


const API_KEY = "af692fdb464b82567f0d73650d39135e"

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

   state = {
    country: '',
    city: '',
    tempreature: '',
    humidity: '',
    description: '',
    error: ''
  }




 getWeather = async (e) => {
  e.preventDefault()

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
  const data = await api.json();

 if(city && country) {
  this.setState({
    country: data.sys.country,
    city: data.name,
    tempreature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ''
  })
 } else {
  this.setState({
    country: '',
    city: '',
    tempreature: '',
    humidity: '',
    description: '',
    error: 'Please Inter Data'
  })
 }
}


  render(){

    
    return (
      <div className="wrapper">
        <div className="form-container">
        <Header />
      <Form getWeather={this.getWeather} />
      <Weather 
        country= {this.state.country}
        city= {this.state.city}
        tempreature= {this.state.tempreature}
        humidity= {this.state.humidity}
        description= {this.state.description}
        error= {this.state.error}
        />
        </div>
    </div>
  );
}
}

export default App;
