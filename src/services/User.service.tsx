import { User } from "../models/User.model";
import { selectAllUsers } from "./Store";

export function ValidateUser(userReq: User): { status: number, userId?: number } {
    const allUsers = selectAllUsers();
    const user = allUsers.find(u => u.username === userReq.username);

    return { status: !user ? 404 : (user.password === userReq.password ? 200 : 500), userId: user?.userId };
}