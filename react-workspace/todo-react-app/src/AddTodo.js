import React from "react";
import { TextField, Paper, Button, Grid} from "@material-ui/core";

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {item: { title:""}};
    }

    onInputChange =(e) => {
        const thisItem =this.state.item;
        thisItem.title = e.target.value;
        this.setState({itme: thisItem});
        console.log(thisItem);
    }

    render() {
        return (
            <Paper style = {{ margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField 
                            placeholder = "Add Todo gere" 
                            fullWidth
                            onChange={this.onInputChange}
                            value={this.state.item.title}
                             />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullwidth 
                            color="secondary" 
                            variant="outlined">
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo;