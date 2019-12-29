import React, { Component } from "react"
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

import FrontendLayout from "../layout/FrontendLayout"
import BarAPIClient from "../services/BarAPIClient"
import Utils from "../utils/Utils"

import { BorderLinearProgress, useStyles } from './styles'

class CustomizedProgressBars extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: {
        bars: [],
        buttons: [],
        limit: 0
      },
      selectedOption: 0
    }
  }

  componentDidMount = async () => {
    this.setState({
      loading: true,
    })

    // fetch bars api
    let data = await BarAPIClient.getBarsApi()
    if (data) {
      this.setState({
        data,
        loading: false,
      })
    }
  }

  onClick = e => {
    const { data, selectedOption } = this.state

    // set additional value of button 
    data.bars[selectedOption] += parseInt(e.target.innerText)

    // set not allowing negative value
    if (data.bars[selectedOption] < 0) {
      data.bars[selectedOption] = 0
    }

    // reset bars data with new selected bar value
    this.setState({
      data
    })
  }

  handleChange = e => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    const { classes } = this.props
    const { data, selectedOption } = this.state
    console.log('data', data)

    return (
      <FrontendLayout active="/about">
        <Typography component="div" gutterBottom variant="h4">Progress Bars Demo</Typography>

        {/* render progress bars */}
        {renderBars(data.bars, classes, data.limit)}
        
        {/* render progress options */}
        {renderProgressOptions(data.bars, classes, selectedOption, this.handleChange)}

        {/* render group button */}
        <div className={classes.ContainedButtons}>
          {renderButtons(data.buttons, classes, this.onClick)}
        </div>
      </FrontendLayout>
    )
  }
}

const renderBars = (bars, classes, limitation) => {
  return bars.map((v, k) => {
    let colorProgressBar = 'primary'
    let setLimitationValue = v
    if (v > limitation) {
      colorProgressBar = 'secondary'
      setLimitationValue = limitation
    }
    debugger

    return (
      <div className={classes.barStyle} key={k}>
        <BorderLinearProgress className={classes.margin} variant="determinate" color={colorProgressBar} value={Utils.normalise(setLimitationValue, limitation)} />
        <Typography className={classes.progressValue} component="div" gutterBottom variant="body1">{v}</Typography>
      </div>
    )
  })
}

const renderButtons = (buttons, classes, onClick) => {
  return buttons.map((v, k) => {
    return <Button key={k} className={classes.btn} variant="contained" onClick={onClick}>{v}</Button>
  })
}

const renderProgressOptions = (bars, classes, selectedOption, handleChange) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">#progress{selectedOption + 1}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOption}
        onChange={handleChange}
      >
        {bars.map((v, k) => {
          return <MenuItem key={k} value={k}>#progress{k + 1}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default withStyles(useStyles)(CustomizedProgressBars)
