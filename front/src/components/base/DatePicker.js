import 'date-fns';
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2% 0",
    },
    picker: {
        margin: "0 1%",
    },
}));

export function DateSelector({props}) {
    const classes = useStyles();
    const {state, setState} = props;
    const [startDate, setStartDate] = React.useState(state.start);
    const [endDate, setEndDate] = React.useState(state.end);

    const onSelectedDate = () => {
        setState({
            start:startDate,
            end:endDate,
            filtered: true,
        })
    }

    const setStart = (data) => {
        setStartDate(data > endDate ? endDate : data);
    }

    const setEnd = (data) => {
        setEndDate(data < startDate ? startDate : data);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="datetime-local"
                    label="选择开始时间"
                    value={startDate}
                    className={classes.picker}
                    onChange={(date) => {setStart(date)}}
                    KeyboardButtonProps={{'aria-label': 'change date'}}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="datetime-local"
                    label="选择结束时间"
                    value={endDate}
                    InputProps={{ inputProps: { min: startDate } }}
                    className={classes.picker}
                    onChange={(date) => {setEnd(date)}}
                    KeyboardButtonProps={{'aria-label': 'change date'}}
                />
                <Button variant="contained" color="primary" className={classes.picker} onClick={onSelectedDate}>
                    开始检索
                </Button>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}