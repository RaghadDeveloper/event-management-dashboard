const ACCESS_TOKEN_KEY = "access_token";

export const authStorage = {
    save(token: string) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },

    load() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },

    remove() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
};