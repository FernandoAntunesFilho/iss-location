import React from "react";
import { Map, Marker } from "pigeon-maps";
import fetchISSLocation from "../services/getISSLocation"

class ISSLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issData: "",
      latitude: "",
      longitude: "",
    };
  }

  async componentDidMount() {
    const location = await fetchISSLocation()
    this.setState({
      issData: location,
      latitude: location.latitude,
      longitude: location.longitude
    })
  }

  loading = () => {
    return (
      <h1>Loading...</h1>
    )
  }

  showMap = (latitude, longitude) => {
    return (
      <div>
        <Map
          center={[0, 0]}
          defaultWidth={700}
          height={450}
          minZoom={1}
          maxZoom={8}
          zoom={1}
        >
          <Marker width={30} anchor={[latitude, longitude]} />
        </Map>
      </div>
    );
  }

  render() {
    const {latitude, longitude} = this.state
    return (
      {!longitude && "Loading..."} // DESCOBRIR COMO RENDERIZAR
                                   // O MAPA SOMENTE COM A LATITUDE
                                   // E LONGITUDE PREENCHIDA
    )
  }
}

export default ISSLocation;
