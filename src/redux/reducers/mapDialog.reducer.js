import { MAP_DIALOG_ACTIONS } from "../actions/mapDialog.actions"

export const mapDialogIsVisible = (state = false, action) => {
  switch (action.type) {
    case MAP_DIALOG_ACTIONS.SHOW_MAP_DIALOG:
      return true
    case MAP_DIALOG_ACTIONS.CLOSE_MAP_DIALOG:
      return false
    default:
      return state
  }
}
