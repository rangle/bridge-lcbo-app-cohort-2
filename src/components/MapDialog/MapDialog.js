import React from "react"
import Modal from "react-modal"
import { Link } from "react-router"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
}

const MapDialog = props => {
  return (
    <div>
      <Modal
        isOpen={props.mapDialogIsVisible}
        onRequestClose={props.closeMapDialog}
        style={customStyles}
        contentLabel="No stores found."
      >
        <h2>Oops!</h2>
        <p>
          We couldn't find a store with everything<br />you were looking for.
          Please edit your<br />wishlist and try again.
        </p>
        <button onClick={() => props.closeMapDialog()}>
          <Link className="link" to="/">
            Go Back
          </Link>
        </button>
      </Modal>
    </div>
  )
}

export default MapDialog
