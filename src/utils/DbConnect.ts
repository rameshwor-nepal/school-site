import mongoose from "mongoose"

export const connectDb = async () => {
    interface Connection {
        isConnected: boolean;
    }
    const connection: Connection = { isConnected: false };

    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connect(process.env.MONGO as string);

        if (db.connections[0].readyState === mongoose.ConnectionStates.connected) {
            connection.isConnected = true;
        }
    }
    catch (err: any) {
        throw new Error(err)
    }
}