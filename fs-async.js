const { readFile, writeFile, write } = require('fs')

console.log("Start!")
readFile('./assets/notes/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./assets/notes/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        readFile('./assets/notes/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            writeFile(
                './assets/notes/result_sync.txt', `New Result: ${first}\n${second}`,
                (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log("Done with this task!")
                }
            )
        })
    })
})

console.log("Starting the next task!")