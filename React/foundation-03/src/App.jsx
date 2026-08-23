import './App.css'
import AvatarCard from './components/AvatarCard.jsx'

const avatars = [
  {
    id: 1,
    name: "Cache",
    role: "Storage",
    power: "Fast Access",
    initials: "CC"
  },
  {
    id: 2,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM"
  },
  {
    id: 3,
    name: "Redux",
    role: "Manager",
    power: "State Management",
    initials: "RX"
  },
  {
    id: 4,
    name: "React",
    role: "UI Builder",
    power: "Components",
    initials: "RC"
  }
]

function Shell({title, children}){
  return (
    <section>
      <p>Resuable shell</p>
      <h2>{title}</h2>
      {children}
      <p>this is for test</p>
    </section>
  )
}




function App() {
  
  return (
    <>
      <h1>Children in react</h1>
      <Shell title="Batman" >
        <div>
          <h1>this is inside Shell</h1>
          <p>this is also inside shell</p>
        </div>
      </Shell>
      <h1>hello from jai</h1>
      <section>
        {avatars.map((avatar)=>(
          <AvatarCard
          key={avatar.id}
          level={avatar.id === 1 ? "Captain" : undefined}
          avatar={avatar} />
        ))}
      </section>
    </>
  )
}

export default App
