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

export async function signout(token) {
    var response = await fetch("http://a91745zj.beget.tech/signout/signout.php", {
        headers: {
            "Authorization" : "Bearer " + token
        }
    });

    return response.json();
}

export async function userInfo(token) {
    var response = await fetch("http://a91745zj.beget.tech/user/user-info.php", {
        method: "GET",
        headers: {
            "Authorization" : "Bearer " + token
        }
    });

    return response.json();
}

export async function createTodo(token, forma) {
    var response = await fetch("http://a91745zj.beget.tech/user/create-todo.php", {
        method: "POST",
        headers: {
            "Authorization" : "Bearer " + token
        },
        body: JSON.stringify(Object.fromEntries((new FormData(forma)).entries()))
    });

    return response.json();
}

export async function deleteTodo(token, todo_id) {
    var response = await fetch("http://a91745zj.beget.tech/user/delete-todo.php", {
        method: "POST",
        headers: {
            "Authorization" : "Bearer " + token
        },
        body: JSON.stringify({todo_id : todo_id})
    });

    return response.json();
}