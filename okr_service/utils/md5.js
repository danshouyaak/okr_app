const crypto = require("crypto");
module.exports = (str) => {
    return crypto
        .createHash("md5")
        .update("xiaoyucot" + str)
        .digest("hex");
};
