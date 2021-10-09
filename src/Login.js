export const Login = () => {
    return(
        <form action="/home">
            <input type="text" className="user" placeholder="User"></input><br/>
            <input type="password" className="password" placeholder="Password"></input><br/>
            <input href="/hola" type="submit" value="Submit"></input>
        </form>
    );
};