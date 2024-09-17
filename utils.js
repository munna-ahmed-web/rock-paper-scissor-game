const crypto = require("crypto");

class Utils {
  generateSecretKey() {
    return crypto.randomBytes(32).toString("hex");
  }
  generateHMAC(move, secretKey) {
    return crypto.createHmac("sha256", secretKey).update(move).digest("hex");
  }
}

module.exports = Utils;
