import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin:'1%'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export const SearchBar = ({searchText, props}) => {
    const classes = useStyles();
    const { query, setQuery } = props;
    const [ input, setInput ] = useState(query);

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                onChange ={(event) => setInput(event.target.value)}
                placeholder={searchText}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                onClick={()=>setQuery(input)}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
