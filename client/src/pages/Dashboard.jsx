import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-div">
            <h1>Dashboard</h1>
            <button className="btn" onClick={() => navigate("/")}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
