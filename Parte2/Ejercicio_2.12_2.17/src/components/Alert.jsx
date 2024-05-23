const Alert = ({ smsalerta }) => {
  if (smsalerta === null) {
    return null
  }

  return (
    <div className="err">
      {smsalerta}
    </div>
  )
}

export default Alert