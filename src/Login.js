import './css/iniciarSesion.css';
export const Login = (props) => {

    const  {history} = props;


    const sendDates = (event) => {
        event.preventDefault();
        history.push('/home');
    }
    return(
        <div id="login">
            <label>Iniciar Sesión</label>
            <form onSubmit={sendDates}>
                <input type="text" className="user" class="square-text" placeholder="username"></input><br />
                <input type="password" className="password" class="square-text" placeholder="Password"></input><br />
                <input type="submit" class="submit" value="Login"></input>
            </form>
        </div>
  


    );
};
export default Login;