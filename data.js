const testSheet2Api = () => {
    const url = "https://script.google.com/macros/s/AKfycbwaw1U6tBqjjVZeZX6BaqpQm-naQJ3ZSHWgmSgR0AcQjBLAJg7yQlAQ/exec";

    fetch(url)
        .then(data => data.json())
        .then(data => {
            document.getElementById("app").textContent = data[0].status;
        })
}

document.getElementById("btn").addEventListener("click", testSheet2Api);