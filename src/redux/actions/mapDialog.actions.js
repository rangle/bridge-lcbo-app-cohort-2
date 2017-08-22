export const MAP_DIALOG_ACTIONS = {
  SHOW_MAP_DIALOG: "SHOW_MAP_DIALOG",
  CLOSE_MAP_DIALOG: "CLOSE_MAP_DIALOG"
}

export const showMapDialog = () => ({
  type: MAP_DIALOG_ACTIONS.SHOW_MAP_DIALOG,
  payload: ""
})

export const closeMapDialog = () => ({
  type: MAP_DIALOG_ACTIONS.CLOSE_MAP_DIALOG,
  payload: ""
})
