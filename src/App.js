//import logo from './logo.svg';
import "./App.css";
import { Posts } from "./components/Posts";
// import {Book} from './Book';
// import Fcomponent from './Fcomponent';
// import Ccomponent from './Ccomponent';
// import Preloader from './Preloader';
import React, { Component } from "react";

class App extends Component {
  state = {
    postz: [
      { id: "dc1", name: "JS" },
      { id: "dc2", name: "React" },
      { id: "dc3", name: "Angular" },
    ],
  };

  handleSomething = () => {
    console.log ('updated..')
  }

  render() {
    return (
      <div className="App">
        <Posts posts1={this.state.postz} cb={this.handleSomething} />
      </div>
    );
  }
}
export default App;

// const App = (props) => {
//   return props.isLoading ? ( <Preloader />) : (
//     <div>
//       <Fcomponent name="Alex" />
//       <Ccomponent numbers={[3, 4, 5, 6]} />
//       <Book name='JS' year='2010' price='1000$' />
//       <Book name='React' year='2019' price='10$' />
//     </div>
//   )
// };
//        export default App;
