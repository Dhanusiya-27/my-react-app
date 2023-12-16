import React from 'react'

export default function TryCatch({Veg}) {
    try{
        if(Veg === "Mango")
        {
            throw new Error("not a Veg")
        }
    }
    catch(error)
    {
        console.log("not a Veg");
        document.write(error)
    }
    finally{
        document.write("always executed")
    }
    return (
      <div>
        {Veg}
      </div>
    )
  }
