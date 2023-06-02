import { useDialog } from './hooks/useDialog'

function A(){
  const { closeDialog } = useDialog()

  return <>
    <h1>Hello from A</h1>
    <button onClick={closeDialog}>close</button>
  </>
}

function B(){
  const { closeDialog } = useDialog()

  return <>
    <h1>Hello from B</h1>
    <button onClick={closeDialog}>close</button>
  </>
}

function C(){
  const { closeDialog } = useDialog()

  return <>
    <h1>Hello from C</h1>
    <button onClick={closeDialog}>close</button>
  </>
}

export function DialogExample() {
  const { setContent } = useDialog()

  return <>
  <button onClick={() => {
    setContent(<A/>)
  }}>render A</button>
  <button onClick={() => {
    setContent(<B/>)
  }}>render B</button>
  <button onClick={() => {
    setContent(<C/>)
  }}>render C</button>
  </>
}