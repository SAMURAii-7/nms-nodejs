import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [isLogin, setIsLogin] = useState(true);

    function handleLoginChange(e) {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    }

    function handleSignupChange(e) {
        setSignupData({ ...signupData, [e.target.id]: e.target.value });
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();
        console.log("logged in");
        setLoginData({ email: "", password: "" });
    }

    async function handleSignupSubmit(e) {
        e.preventDefault();
        console.log("signed up");
        setSignupData({ name: "", email: "", password: "" });
    }

    return (
        <div className="home-wrapper">
            <h1 className="title">Network Management System</h1>
            <div className="container">
                {isLogin ? (
                    <div className="loginDiv">
                        <form
                            className="loginForm"
                            onSubmit={(e) => handleLoginSubmit(e)}
                        >
                            <p>Login</p>
                            <input
                                placeholder="Email"
                                onChange={(e) => handleLoginChange(e)}
                                type="email"
                                id="email"
                                value={loginData.email}
                            />
                            <input
                                placeholder="Password"
                                onChange={(e) => handleLoginChange(e)}
                                type="password"
                                id="password"
                                value={loginData.password}
                            />
                            <button className="btn" type="submit">
                                Log In
                            </button>
                            <Link onClick={() => setIsLogin(false)}>
                                Click here to Register
                            </Link>
                        </form>
                    </div>
                ) : (
                    <div className="signupDiv">
                        <form
                            className="signupForm"
                            onSubmit={(e) => handleSignupSubmit(e)}
                        >
                            <p>Signup</p>
                            <input
                                placeholder="Name"
                                onChange={(e) => handleSignupChange(e)}
                                type="text"
                                id="name"
                                value={signupData.name}
                            />
                            <input
                                placeholder="Email"
                                onChange={(e) => handleSignupChange(e)}
                                type="email"
                                id="email"
                                value={signupData.email}
                            />
                            <input
                                placeholder="Password"
                                onChange={(e) => handleSignupChange(e)}
                                type="password"
                                id="password"
                                value={signupData.password}
                            />
                            <button className="btn" type="submit">
                                Sign Up
                            </button>
                            <Link onClick={() => setIsLogin(true)}>
                                Click here to Login
                            </Link>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
