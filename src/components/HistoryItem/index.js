import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteClick = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li>
      <div>
        <p className="time">{timeAccessed}</p>
        <img className="media-icon" alt="domain logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" onClick={onDeleteClick}>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
