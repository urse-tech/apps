import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    alert("post");
    let target_url = "https://asia-southeast2-urse-project.cloudfunctions.net/urse-post";
    let tokenkey = "token";
    let tokenvalue = "c49482e6de1fa07a349f354c2277e11bc7115297a40a1c09c52ef77b905d07c4";
    let datainjson = {
        "email": getValue("email"),
        "password": getValue("password")
    }

    postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);

}



function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
}