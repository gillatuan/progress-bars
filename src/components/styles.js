import { withStyles } from "@material-ui/core/styles"
import { LinearProgress } from "@material-ui/core"

export const BorderLinearProgress = withStyles({
  root: {
    border: "1px solid #e4e4e4",
    height: 22,
    marginLeft: "0 !important",
    marginRight: "0 !important"
  },
  bar: {}
})(LinearProgress)

export const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  ContainedButtons: {
    display: "inline-flex",
    marginTop: 40
  },
  progressValue: {
    fontSize: 14,
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  barStyle: {
    position: "relative"
  },
  btn: {
    marginLeft: 10
  },
  formControl: {
    marginTop: 40
  }
})
