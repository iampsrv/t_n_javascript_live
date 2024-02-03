function boilWater() {
    console.log("Starting to boil water...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stoveWorking = Math.random() > 0.2; // 80% chance the stove is working
            if (stoveWorking) {
                resolve("Water boiled successfully!"); // Water is boiled
            } else {
                reject("Stove is not working."); // Simulate a stove failure
            }
        }, 3000); // Simulating the time delay for boiling water
    });
}

boilWater().then((successMessage) => {
    console.log(successMessage); // Handle the success
    console.log("Making tea...");
}).catch((errorMessage) => {
    console.error(errorMessage); // Handle the error
});
