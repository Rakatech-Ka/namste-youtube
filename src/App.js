import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import{RouterProvider, createBrowserRouter} from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import Memo from "./components/Memo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Body/>,
      children:[
        {
          path:"/",
          element: <Maincontainer/>
        },
        {
          path:"watch",
          element: <WatchPage/>
        },
        {
          path:"memo",
          element: <><Memo/> <Demo2/></>
        },
      ]
    }
])

function App() {
  return (
    <Provider store={store}>
    <div >
     <Header/>
     <RouterProvider router={appRouter}/>
   
      
    </div>
    </Provider>
  );
}

export default App;
