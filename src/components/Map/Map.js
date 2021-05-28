import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';
import { connect } from 'react-redux'
import store from '../../redux/store';
import { SET_POPUPSTATE } from '../../redux/actions';

function Map({kml, ...props}){
  let handleClick = () => {
    store.dispatch({type: SET_POPUPSTATE, payload: 'active'})
  }

  return (
    <>
        <MapContainer center={[47.88522958293111, 65.67886776973104]} zoom={5}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          kml&&<ReactLeafletKml kml={kml} />
        }
          <button onClick={handleClick}>Загрузить Kml</button>
        </MapContainer>
        
      </>
    )
}

const mapStateToProps = (state) => ({
  kml: state.kml
})



export default connect(mapStateToProps)(Map);