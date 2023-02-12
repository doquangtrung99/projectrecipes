import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import { PageNotFound, RootPage, OverViewPage, RecipeDetailPage } from './components/index'
import { Default } from "./layout/index";
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootPage />}>
      <Route path='/' element={<Navigate to='/overview' replace={true} />} />
      <Route path='/overview' element={<Default component={<OverViewPage />} />} />
      <Route path='/recipes' element={<Default component={<RecipeDetailPage />} />} />

      <Route path='*' element={<PageNotFound />} />

    </Route>
  ))

  return (<RouterProvider router={router} />)
}
export default App;
