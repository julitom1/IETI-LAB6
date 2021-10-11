export const Login = (props) => {

    const  {history} = props;


    const sendDates = (event) => {
        event.preventDefault();
        history.push('/home');
        
       
    }
    return(
        <form onSubmit={sendDates}>
            <input type="text" className="user" placeholder="username"></input><br/>
            <input type="password" className="password" placeholder="Password"></input><br/>
            <input type="submit" value="Login"></input>
        </form>
  


    );
};
export default Login;