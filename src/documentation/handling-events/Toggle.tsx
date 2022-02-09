import { useState } from "react";

const Toogle = () => {
  const [toogle, setToogle] = useState(false)

  const handleClick = () =>{
    setToogle(prevState => !prevState)
  }

  return (
    <button onClick={handleClick}>
      {toogle ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toogle;