import './KmlParser.css';
import { SET_KML } from '../../redux/actions';
import store from '../../redux/store';
import { useState } from 'react';

function KmlParser(){
    let [popupState, setPopupState] = useState('active')
    let handleChange = (e) => {
        e.preventDefault();
        if(e.target.files[0]){
            e.target.files[0].text().then(text=>{
                let parser = new DOMParser();
                let kml = parser.parseFromString(text, 'text/xml')
                store.dispatch({type: SET_KML, payload: kml})
            })
            setPopupState('')
        }
    }

    return (
        <div className={"outer " + popupState}>
            <div className={"overlay " + popupState} onClick={()=>setPopupState('')}>
            </div>
            <div className={"popup " + popupState}>
                <input type="file" accept=".kml" onChange={handleChange}/>
            </div>
        </div>
    )
}

export default KmlParser;