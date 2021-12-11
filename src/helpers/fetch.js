export function login(forma) {
    var response = await fetch("http://a91745zj.beget.tech/signin/signin.php", {
        body: JSON.stringify(Object.fromEntries((new FormData(forma)).entries()))
    });

    return response.json();
}

export function registration(forma) {
    var response = await fetch("http://a91745zj.beget.tech/signup/signup.php", {
        body: JSON.stringify(Object.fromEntries((new FormData(forma)).entries()))
    });

    return response.json();
}