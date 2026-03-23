import Card from "./components/Card.jsx";
import './App.css'

function App() {


  return (
      <>
          <h1 className="bg-green-400  mx-auto rounded-md shadow-md text-black p-4 flex align-middle justify-center content-center font-bold ">Tailwind test</h1>
          <Card userName = "Sactus" btnText={"Visite here"} />
          <Card userName="Bajrang" btnText = {"More about us"}/>
          <Card userName="Radhe Radhe" />

      </>

  )
}

export default App