export async function login(forma) {
    var response = await fetch("http://a91745zj.beget.tech/signin/signin.php", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries((new FormData(forma)).entries()))
    });

    return response.json();
}

export async function registration(forma) {
    var response = await fetch("http://a91745zj.beget.tech/signup/signup.php", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries((new FormData(forma)).entries()))
    });

    return response.json();
}