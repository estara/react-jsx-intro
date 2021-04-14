function Person(props) {
    if (props.age >= 18) {
    return(
        <div>
        <h3>Please go vote!</h3>
        <p>Learn some information about this person: </p>
        <p>Name: {props.name.slice(0, 6)}</p>
        <p>Age: {props.age}</p>
        <p>Hobbies:</p>
        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
        </div>
    )} else {
        return(
            <div>
                <h3>You must be 18.</h3>
                <p>Learn some information about this person: </p>
                <p>Name: {props.name.slice(0, 6)}</p>
                <p>Age: {props.age}</p>
                <p>Hobbies:</p>
                <ul>
                    {props.hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }

}