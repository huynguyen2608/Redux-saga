export const petIncrement = (number) => {
    return {
        type: "PET_INCREMENT",
        payload: number,
    };
};

export const petDecrement = () => {
    return {
        type: "PET_DECREMENT",
    };
};

export const getUsers = () => {
    return {
        type: "GET_USERS_REQUEST",
    };
}