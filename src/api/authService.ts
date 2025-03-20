import { useSignInMutation, useSignOutMutation, useGetUserQuery } from "./apiSlice";

export const useAuth = () => {
    const [signIn, signInState] = useSignInMutation();
    const [signOut] = useSignOutMutation();
    const { data: user, isLoading: userLoading } = useGetUserQuery();

    const handleSignIn = async (email: string, password: string) => {
        try {
            await signIn({ email, password }).unwrap();
        } catch (error) {
            console.error("Authentication failed", error);
        }
    };

    const handleSignOut = () => {
        signOut();
        window.location.reload(); // Refresh to clear user state
    };

    return {
        user,
        userLoading,
        handleSignIn,
        handleSignOut,
        signInState,
    };
};
