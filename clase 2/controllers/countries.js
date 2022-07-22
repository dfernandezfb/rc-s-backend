const customError = require ('./../utils/customError')

const getCountries = (req, res)=>{
  try {
    const {id} = req.params;
    // if(!id) return res.status(401).json({msg:`Necesito el id`})
    if(!id) throw new customError('No mandaron id',404);
    res.status(200).json({
      msg:'Recibiste todos los paises'
    })
  } catch (error) {
    res.status(error.code).json({message:error.message})
  }
}

const getStatesOfCountry = (req,res)=>{
  const {idCountry} = req.params;
  const {state} = req.query;
  if(state){
    res.status(200).json({msg:`Recibiste el estado ${state} del pais ${idCountry}`})
  }else{
    res.status(200).json({msg:`Recibiste todos los estados del pais ${idCountry}`})
  }
}

http://localhost:4500/country/state/1231351?state=1321351&state2=123151351

module.exports = {
  getCountries,
  getStatesOfCountry
};