export const verifyToken = async (req, res, next) => {
    const token = req.header["x-access-token"];

    console.log(token)
}