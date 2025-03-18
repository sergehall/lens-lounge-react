import {useGetUserQuery, useLoginMutation, useRefreshAuthTokenMutation} from "./api-slice";


/**
 * Hook for handling user authentication.
 */
export const useAuth = () => {
    const [login, loginState] = useLoginMutation();
    const [refreshToken] = useRefreshAuthTokenMutation();
    const { data: user, isLoading } = useGetUserQuery();

    /**
     * Automatically refresh the token when necessary.
     */
    const handleTokenRefresh = async () => {
        const storedRefreshToken = localStorage.getItem('refreshToken');
        if (storedRefreshToken) {
            try {
                await refreshToken({ refreshToken: storedRefreshToken }).unwrap();
            } catch (error) {
                console.error('Token refresh failed:', error);
            }
        }
    };

    return {
        login,
        user,
        isLoading,
        loginState,
        handleTokenRefresh,
    };
};
