import {SalonService} from "../interface/SalonService"

export const getData = (url: string):Promise<SalonService[]> => {
  return fetch(url)
  .then(resp => {
    if (!resp.ok) {
      throw Error("Los datos no se pudieron cargar")
    }
    return resp.json()
  })
}
