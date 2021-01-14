import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [removeAlert])

  return <div className={`alert alert-${type}`}>{msg}</div>
}

export default Alert
