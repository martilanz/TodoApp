//#region Vecchio codice
// const user = {
//   name: "Martina",
//   id: 1,
//   image: "https://avatars.githubusercontent.com/u/3725610?v=4"
// }
// function AppTitle() {
//   return <h1>Todo app</h1>;
// }

// function AppMessage(props) {
//   //Costanti locali a cui assegnare i singoli valori delle props da usare nel codice JSX
//   const id = props.user.id;
//   const name = props.user.name;
//   //L'uso di costanti locali ci permette aggiungere della logica di fallback per usare dei valori di default quando quelli che ci aspettiamo sono assenti (es. const image)
//   const defaultImage = 'https://via.placeholder.com/32x32.png'
//   const image = props.user.image ? props.user.image : defaultImage;

//   return (
//     <p>
//       Benvenuto {name} ({id})!
//       <img src={image} width="32" height="32" />
//     </p>
//   )
// }


// export default function App() {
//   return (
//     <div>
//       <AppTitle />
//       <AppMessage user={user} />
//     </div>
//   );
// }
//

//#endregion

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import { LeftCol } from "./components/Layout";
import { RightCol } from "./components/Layout";
import User from "./components/User";
import TodoList from "./components/TodoList";
import "./style.css";
import ListNames from "./components/ListNames";

const user = {
  id: 1,
  name: "Martina",
  image: "https://github.com/lifeisfoo.png",
};

export default function App() {
  return (
    <Layout>
      <LeftCol>
        <User name={user.name} image={user.image} />
        <hr />
        <ListNames />
      </LeftCol>
      <RightCol>
        <TodoList />
      </RightCol>
    </Layout>
  );
}