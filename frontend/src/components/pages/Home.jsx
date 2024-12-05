import { Link } from "react-router";

function Home() {
    return (
        <div>
            <Link to='/auth/login'>
                <button>Login</button>
            </Link>
            <Link to='/auth/register'>
                <button>Register</button>
            </Link>
        </div>
    );
}

export default Home;
