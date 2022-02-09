import { Dispatch, useEffect, useState } from "react";

interface AppState {
  date: Date
}

const Clock = () => {

  const [actualDate, setDate] = useState<AppState>({date: new Date()})
  
  useEffect(() => {
    setInterval(
      () => tick(setDate),
      1000
    )
  }, [actualDate])

  const tick = (setter: Dispatch<AppState>) => {
    setter({date: new Date()})
  }

  return(
    <>
      <h1>Hello, world!</h1>
      <h2>It is {actualDate.date.toLocaleTimeString()}</h2>
    </>
  )
}

export default Clock;