import {CardService} from './components/CardService'
import {Load} from './components/Load'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from 'react';
import {getData} from './util/getData';
import {SalonService} from './interface/SalonService';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data , setData] = useState<SalonService[]>([])

  useEffect(() => {
    getData('http://localhost:8080/api/services/retrieveAvailableSalonServices')
    .then(resp => {
      setData(resp)
    })
    .catch(error => {
      console.log(error)
    })
      setLoading(false)
  },[])

  return (
    <div className="App">
      <h1>AR Salon and Day Spa Services</h1>
      {
        loading ? (<Load />) :
          (
            <div className="services">
              {
                data.map(salonService =>
                  <CardService key={salonService.id} salonService={salonService} />
                )
              }
            </div>
          )
      }


    </div>
  );
}

export default App;
