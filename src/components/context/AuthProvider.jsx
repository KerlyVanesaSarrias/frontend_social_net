import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Global } from "../../helpers/Global";
import { AuthContext } from "./AuthContex";


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    const [counters, setCounters] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (!token || !user) {
            setLoading(false);
            return false;
        }
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        try {
            const request = await fetch(Global.url + "user/profile/" + userId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
            });

            if (!request.ok) {
                throw new Error(`Error ${request.status}: ${request.statusText}`);
            }

            const data = await request.json();

            const requestCounters = await fetch(Global.url + "user/counters/" + userId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
            });

            if (!requestCounters.ok) {
                throw new Error(`Error ${requestCounters.status}: ${requestCounters.statusText}`);
            }

            const dataCounters = await requestCounters.json();

            setAuth(data.user);

            setCounters(dataCounters);

        } catch (error) {
            console.error("Error en autenticación:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                counters,
                setCounters,
                loading
            }}
        >
            {children} 
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired 
};