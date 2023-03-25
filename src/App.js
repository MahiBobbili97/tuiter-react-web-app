import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import {createStore} from "redux";
import store from "./redux/store";
console.log(store);
function App() {
  return (
<Provider store={store}>
  <BrowserRouter>
    <div class="container" >
    <Routes>
       <Route index element={<Labs/>}/>
       <Route path="/*" element={<Labs/>}/>
       <Route path="/hello" element={<HelloWorld/>}/>
       <Route path="/tuiter/*" element={<Tuiter/>}/>
    </Routes>
    </div>
   </BrowserRouter>
</Provider>
  );
}

export default App;
