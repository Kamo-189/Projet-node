console.log("Salut")

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Quel est votre nom ? ", function(name) {
    rl.question("Où vivez vous ? ", function(country) {
        console.log(`${name}, est un citoyen de ${country}`);
        rl.close();
    });
});
rl.on("close", function() {
    console.log("\nAu revoir !");
    process.exit(0);
});
