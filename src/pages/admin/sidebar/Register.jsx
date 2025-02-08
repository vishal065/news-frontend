import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [forgotPassword, setForgotPassword] = useState(false);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/login", { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Login failed. Check your credentials.");
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/forgot-password", { email });
            setMessage(response.data.message);
            setForgotPassword(true);
        } catch (error) {
            setMessage("Error sending reset request.");
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/verify-otp", { email, otp });
            setMessage(response.data.message);
            setOtpVerified(true);
        } catch (error) {
            setMessage("OTP verification failed.");
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/reset-password", { email, newPassword });
            setMessage(response.data.message);
            setForgotPassword(false);
            setOtpVerified(false);
        } catch (error) {
            setMessage("Password reset failed.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={otpVerified ? handleResetPassword : forgotPassword ? handleVerifyOtp : handleLogin}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-semibold mb-4">
                    {otpVerified ? "Create New Password" : forgotPassword ? "Verify OTP" : "Login"}
                </h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    required
                    disabled={forgotPassword || otpVerified}
                />
                {forgotPassword && !otpVerified && (
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                )}
                {otpVerified && (
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                )}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    {otpVerified ? "Reset Password" : forgotPassword ? "Verify OTP" : "Login"}
                </button>
                {!forgotPassword && (
                    <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="w-full text-blue-500 mt-2"
                    >
                        Forgot Password?
                    </button>
                )}
                {message && <p className="mt-2 text-red-500">{message}</p>}
            </form>
        </div>
    );
};

export default Login;
