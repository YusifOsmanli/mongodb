import Basket from "./Page/Basket/Basket";
import Home from "./Page/Home/Home";
import MainRoot from "./Page/MainRoot";

const Routes=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            }
        ]
    }
]
export default Routes