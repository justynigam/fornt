"use client"
import React, { useState, useEffect } from "react"

const LocalTime = () => {
  const [timeStr, setTimeStr] = useState<string>("")

  useEffect(() => {
    const update = () => {
      setTimeStr(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      )
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return <span>{timeStr || "--:-- IST"}</span>
}

export default LocalTime
