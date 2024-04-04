import './App.css'

function App() {
  const myName: string = "Ta Quoc Hung";
  const myAge: number = 19;
  const isMarried: boolean = false;
  function ShowInfo(props: { name: string, age: number }): string {
    return `Name:${props.name} - age ${props.age}`;
  }
  function ShowsInfo(): JSX.Element {
    return <div> Name : Hung - Age: 19</div>;
  }
  return (
    <>
      <h1>Hello {myName}</h1>
      <h1>Age: {myAge}</h1>
      <h1>Status: {isMarried ? "da co gia dinh" : "doc than"}</h1>
      <div>{ShowInfo({ name: "Hung", age: 18 })}</div>
      <div>Components <ShowsInfo />
      </div>
    </>
  )
}

export default App;
