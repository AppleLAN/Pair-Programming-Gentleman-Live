import { Dialog } from './components/Dialog/Dialog'
import { useDialog } from './hooks/useDialog'
import TaskListPage from './pages/task-list/TaskListPage'
// import './styles/reset.css'

function App() {
  const { closeDialog, openDialog } = useDialog()

  return <>
    <Dialog>
      <h1>hola mundo</h1>
      <button onClick={closeDialog}>close</button>
    </Dialog>

    <button onClick={openDialog}>open</button>
  </>
}

export default App
