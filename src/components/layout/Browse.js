import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
//import '../styles/Browse.css';



export default function Browse() {

    const [photo. setPhoto] = useState("")
    const [clientId, setClientId] = useState("c1e47c9589dd4c170d631aabd17cb23af8ec8451cf5e50af82e4e59f417c")
    const [results, setResulstId] = useState([]);


    function handleChange(event){
        setPhoto(event.target.value);
    }


    function handleSubmit(event){
        console.log(value);
        const url = "https://api.unpslash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;

        axios.get(url).then((response) =>
        console.log(response))
        setResulstId(response.data.results)
        
        return (
            <div className="Browse">
                <h4 style={browseX}>Browse</h4>
                <input onChange={handleChange} type="text" name="photo" placeHolder="Browse Collection"> </input>
                <button onClick={handleSubmit} type="submit" >Browse</button>

                {results.map((photo) =>{
                    <img src={photo.urls.small}/>
                })}
            </div>
        }
    ):
}

const rootElement = document.getElementById("root");