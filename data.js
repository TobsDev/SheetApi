const testSheet2Api = () => {
    const url = "https://script.google.com/macros/s/AKfycbwaw1U6tBqjjVZeZX6BaqpQm-naQJ3ZSHWgmSgR0AcQjBLAJg7yQlAQ/exec";

    fetch(url)
        .then(data => data.json())
        .then(data => {
            document.getElementById("app").textContent = data[0].status;
        })
}

const addGS = () => {
    const url = "https://script.google.com/macros/s/AKfycbwaw1U6tBqjjVZeZX6BaqpQm-naQJ3ZSHWgmSgR0AcQjBLAJg7yQlAQ/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"some name"}) // body data type must match "Content-Type" header
      });

}

document.getElementById("btn").addEventListener("click", testSheet2Api);

document.getElementById("btn2").addEventListener("click", addGS);