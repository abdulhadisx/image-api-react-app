import { useState } from "react";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState('')
  const [result, setResults] = useState([])
  const getPhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=Rf6G6DU_-grhWfhTRypN2RIgxVzn72b1TXGVYelyMks`)
      .then((response) => {
        setResults(response.data.results)
      })
  }

  return (<>
    <div className="container text-center my-5">
      <input type="text" className="
form-control" value={photo} onChange={(e) => {
          setPhoto(e.target.value)

        }} />
      <button type="submit" className="btn btn-warning my-3" onClick={getPhoto} > Search</button>
    </div>
    <div className="container">
      <div className="row text-center text-lg-start ">
        {result.map((value) => {
          return (
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-4 mb-4 h-100 "  >
                <img className="img-fluid img-thumbnail" src={value.urls.small} />
              </a></div>
          )
        })}
      </div>
    </div>
  </>
  );
}

export default App;
