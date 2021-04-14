function App() {
    return(
    <div>
    <Person name="Inigo" age={40} hobbies={["fencing", "revenge", "linguistics"]}/>
    <Person name="Locksmith" age={35} hobbies={["rapping", "politics", "videos"]}/>
    <Person name="fubar" age={16} hobbies={["chaos", "mayhem", "madness"]}/>
    </div>);
}

ReactDOM.render(<App/>, document.getElementById("root"));