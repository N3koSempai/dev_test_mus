import editFlightService from "../services/editFlightService"

export async function editFlightAdapter (id, code, capacity, departure) {

   
    capacity = parseInt(capacity)
  
    const params = {
      code,
      capacity,
      departureDate: departure
    }

    try {
      const response = await editFlightService(id,params)
      if (response.status === 200) {
 
        return true
      } else {
        return false
      }
    } catch(error) {

      return false
    }
    // adding time only for style purpose
  }
  