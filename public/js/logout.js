const logout = async () => {
    try {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "content-type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
} catch (error) {
    console.error(error);
    alert("error logging out");
}
};

document.querySelector("#logout-btn") .addEventListener("click", logout);