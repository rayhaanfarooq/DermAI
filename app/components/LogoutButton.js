import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function LogoutButton() {
	const [user] = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			router.push("/auth/login");
		} catch (error) {
			console.error("Failed to log out:", error);
		}
	};

	return (
		<>
			{user && (
				<Button
					variant="outlined"
					onClick={handleLogout}
					
					
				>
					Logout
				</Button>
			)}
		</>
	);
}
