import cookies from "js-cookie";

function getTokenCookie() {
	return cookies.get("token");
}

function setTokenCookie(token: string) {
	cookies.set("token", token, {
		expires: 1 / 24,
	});
}

function removeTokenCookie() {
	cookies.remove("token");
}

export { getTokenCookie, setTokenCookie, removeTokenCookie };
