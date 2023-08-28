
export const checkAdmin = async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email});

    if (!user || user.role !== "Admin") return res.send("Permission denied!").end();

    next();
}