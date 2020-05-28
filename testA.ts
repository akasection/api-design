import UserInfoAPI from "./src/api/UserInfo/UserInfoAPI";

// Implementation A
// API Adapter File

// Store/usage
const user = new UserInfoAPI();
const data = await user.get();
console.log(data.user_id);

