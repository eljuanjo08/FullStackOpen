const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="changed">
      {message}
    </div>
  )
}

export default Notification