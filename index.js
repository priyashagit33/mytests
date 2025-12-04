

function waitOneSecond(){
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve("Done after one second")            
        }, 3000);
    })
}

async function run() {
    console.log("Start");
    const result = await waitOneSecond();
    console.log(result);
    console.log("End")
    }

run()