import { useEffect, useState } from 'react';
import { useStopwatch, useTimer } from 'react-timer-hook';

const MyStopwatch = () => {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: true });

    const [timeStart, setTimeStart] = useState('2022-09-22T05:01:21.480Z')
    const [timeEnd, setTimeEnd] = useState()
    const [timeClose, setTimeClose] = useState()
    const timeNow = new Date().getTime()
    const [initiated, setInitiated] = useState(true)
    const [closed, setClosed] = useState(false)

    

    useEffect(() => {
        const stopwatchOffset = new Date();
        const secondTime = new Date(timeNow).getTime() - new Date(timeStart).getTime()
        stopwatchOffset.setSeconds(Math.round(stopwatchOffset.getSeconds() + secondTime)/1000)
        reset(stopwatchOffset)
    }, [])
    

    // setSecond(second + secondTime)

    const handleStart = () => {
        if (!initiated) {
            const secondTime = new Date().getTime()
            const addTime = 180 * 60000
            const newTime = new Date(secondTime + addTime)

            setInitiated(true)
            setTimeStart(new Date().toISOString())
            console.log(new Date().toISOString())
            setTimeEnd(new Date(newTime).toISOString())
            start()
        }
        
    }

    const handleClose = () => {
        if (!closed) {
            setTimeClose(new Date().toISOString())
            setClosed(true)
            pause()
        }
    }

    /* const [timeStart, setTimeStart] = useState()
    const [timeEnd, setTimeEnd] = useState()
    const [timeClose, setTimeClose] = useState()
    const timeNow = new Date().getTime()
    const [initiated, setInitiated] = useState(false)
    const [closed, setClosed] = useState(false)

    const handleStart = () => {
        if (!initiated) {
            const secondTime = new Date().getTime()
            const addTime = 180 * 60000
            const newTime = new Date(secondTime + addTime)

            setInitiated(true)
            setTimeStart(new Date().toISOString())
            console.log(new Date().toISOString())
            setTimeEnd(new Date(newTime).toISOString())
            start()
        }
        
    }

    const handleClose = () => {
        if (!closed) {
            setTimeClose(new Date().toISOString())
            setClosed(true)
            pause()
        }
    } */
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>react-timer-hook</h1>
        <p>Stopwatch Demo</p>
        <div style={{fontSize: '100px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleClose}>Close</button>
        <button onClick={reset}>Reset</button>
        <p>Hora de inicio: {initiated ? new Date(timeStart).toLocaleTimeString() : '--:--:--'}</p>
        <p>Hora de final: {initiated ? new Date(timeEnd).toLocaleTimeString() : '--:--:--'}</p>
        <p>Hora de cierre: {closed ? new Date(timeClose).toLocaleTimeString() : '--:--:--'}</p>
      </div>
    );
  }

  export default MyStopwatch