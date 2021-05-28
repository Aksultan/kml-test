import './KmlParser.css';
import { SET_KML, SET_POPUPSTATE } from '../../redux/actions';
import store from '../../redux/store';
import { connect } from 'react-redux';

function KmlParser({popupState, ...props}){
    let handleChange = (e) => {
        e.preventDefault();
        if(e.target.files[0]){
            e.target.files[0].text().then(text=>{
                let parser = new DOMParser();
                let kml = parser.parseFromString(text, 'text/xml')
                store.dispatch({type: SET_KML, payload: kml})
            })
            store.dispatch({type: SET_POPUPSTATE, payload: ''})
        }
    }

    let handleClick = () => {
        store.dispatch({type: SET_POPUPSTATE, payload: ''})
    }

    return (
        <div className={"outer " + popupState}>
            <div className={"overlay " + popupState} 
                onClick={handleClick}>
            </div>
            <div className={"popup " + popupState}>
                <input type="file" accept=".kml" onChange={handleChange}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    popupState: state.popupState
})

export default connect(mapStateToProps)(KmlParser);