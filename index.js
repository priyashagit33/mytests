

function waitOneSecond(){
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve("Done after three second")            
        }, 3000);
    })
}

async function run() {
    console.log("Start");
    const result = await waitthreeSecond();
    console.log(result);
    console.log("End")
    }

run()