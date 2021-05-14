const db = require("../db");
const { response } = require("../lib/response");

async function add(data) {
  try {
    var sql = `select * from user where email=?`;
    var [res] = await db.query(sql, data.email);
    if (res.length) {
      if (res[0].is_blocked) {
        return response("failed", "your account is blocked", "", 404);
      } else {
        if (res.length > 1) {
        }
        const [existRes] = await db.query(`insert into user set?`, data);
        return response("success", "user created successfully", existRes, 200);
      }
    }
    return res;
  } catch (error) {
    throw error;
  }
}

module.exports = { add };
