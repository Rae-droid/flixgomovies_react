import userModel from "../models/User.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }
    res.json({
      success: true,
      userData: {
        name: user.name,
        balance: user.balance,
        totalInvested: user.totalInvested,
        totalProfit: user.totalProfit,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
