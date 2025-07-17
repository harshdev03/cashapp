"use client"
const SessionProvider = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default SessionProvider