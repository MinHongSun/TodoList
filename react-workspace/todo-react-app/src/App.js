import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo.js";
import { Paper, List, Container } from "@material-ui/core";
import { call } from "./service/ApiService"
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  add = (item) => {

    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );

    // const thisItems = this.state.items;
    // item.id = "ID-" + thisItems.length; // key를 위한 id추가
    // item.done = false; // done 초기화
    // thisItems.push(item); // 배열에 아이템 추가
    // this.setState({ items: thisItems }); // 업데이트는 반드시 this.setState로 해야됨.
    // console.log("items : ", this.state.items);
  };

  delete = (item) => {

    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );

    // const thisItems = this.state.items;
    // console.log("Before Update Items : ", this.state.items);
    // const newItems = thisItems.filter((e) => e.id !== item.id); // 해당 id 걸러내기
    // this.setState({ items: newItems }, () => {
    //   // 디버깅 콜백
    //   console.log("Update Items : ", this.state.items);
    // });
  };
  
  componentDidMount() {
    
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );


    // const requestOptions = {
    //   method: "GET",
    //   headers: {"Content-Type" : "application/json"}
    // };

    // fetch("http://localhost:8080/todo", requestOptions)
    //   .then((reponse) => reponse.json())
    //   .then(
    //     (reponse) => {
    //       this.setState({
    //         items:reponse.data,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         error,
    //       });
    //     }
    //   );
  }

  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
      this.setState({ item: response.data})
    );
  };

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update} />
          ))}
        </List>
      </Paper>
    );

    // 3. props로 넘겨주기
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;