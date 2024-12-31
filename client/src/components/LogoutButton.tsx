import Button from "./Button";
import {useAuth} from "../hooks/useAuth";


export default function LogoutButton() {
    const { logout } = useAuth();

    const doLogout = async () => {
        await logout();
    }

    return (
        <Button onClick={doLogout}
                className={"text-white"}
        >
            Déconnexion
        </Button>
    )
}