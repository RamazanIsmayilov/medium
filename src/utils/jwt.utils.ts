import jwt from "jsonwebtoken"
import config from "../config"

const encodePayload = (payload: any) => {
  if (!config.secretKey) throw new Error("Secret key is not defined in the configuration")
  const token = jwt.sign(payload, config.secretKey, { expiresIn: "1h" })
  return token
}

const decodePayload = (token: any) => {
  if (!config.secretKey) throw new Error("Secret key is not defined in the configuration")
  try {
    let payload = jwt.verify(token, config.secretKey);
    return payload;
  } catch {
    return false;
  }
};

export default {
  encodePayload,
  decodePayload
}