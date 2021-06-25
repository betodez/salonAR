import {SalonService} from "../interface/SalonService"

interface Props {
  salonService: SalonService
}

export const CardService  = ({salonService}:Props) => {
  return(
    <div className="card text-center">
      <div className="card-header">
        {salonService.name}
      </div>
      <div className="card-body">
        <h1>${salonService.price}</h1>
        <p>{salonService.description}</p>
        <p>{salonService.timeInMinutes} min.</p>
        <a href="#" className="btn btn-primary">Book Now</a>
      </div>
    </div>
  )
}
