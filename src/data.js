import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./data.css"


function Datas() {
  const [arama, setArama] = useState(Date);
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=V5NbdIolfEEpLwqGgrGoqWDxVGI1a7if27rIzmVZ&date=${arama}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [data, arama]);

  return (
    <div className="bar">

      <div>
        <div className="baslik">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/287px-NASA_logo.svg.png" alt="resim açıklaması" />
          <h1 id="bas"> HANGİ GÖKYÜZÜNE DOĞDUN</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/287px-NASA_logo.svg.png" alt="resim açıklaması" />
        </div>
      </div>
      <div>

        <input placeholder="YYYY-AA-GG" type="date" onChange={(e) => setArama(e.target.value)} />
      </div>
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
      <p>{data.date}</p>
      <div className="png">
        <img src={data.url} alt={data.title} />
      </div>
      {console.log(data)}
    </div>


  )
}



export default Datas;