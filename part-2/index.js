function App() {
    return (
        <div>
        <h1>The quote in tweets</h1>
        <Tweet name="Inigo Montoya" username="swordsman" date="whenever" message="My name is Inigo Montoya"/>
        <Tweet name="Inigo Montoya" username="swordsman" date="whenever" message="You killed my father"/>
        <Tweet name="Inigo Montoya" username="swordsman" date="whenever" message="Prepare to die"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));