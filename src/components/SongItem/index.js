import './index.css'

const SongItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDelete = () => {
    deleteTrack(id)
  }

  return (
    <li className="track-card-container">
      <img src={imageUrl} className="img" alt="track" />
      <div className="track-details-container">
        <p className="track-name"> {name} </p>
        <p className="track-genre"> {genre} </p>
      </div>
      <p>{duration}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default SongItem
