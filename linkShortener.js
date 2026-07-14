const shortenButton = document.querySelector('#shorten-btn')
const urlTextbox = document.querySelector('#url-input')


shortenButton.addEventListener('click', () => {
    getShortenedUrl()
})


async function getShortenedUrl() {
    const text = urlTextbox.value
    if (text === ' ') {
        return
    }

    const response = await fetch('https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            long: text
        })
    });

    const body = await response.json()


    urlTextbox.value = '1pt.co/' + body.short
}