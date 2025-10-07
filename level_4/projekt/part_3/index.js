import figlet from "figlet";

console.log(
    figlet.textSync("Hello world!", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80, // Zmení počet charakterov v riadku
        whitespaceBreak: true,
    }),

    figlet.textSync("Hello world!", {
        font: "3-D",
        horizontalLayout: "full",
        verticalLayout: "controlled smushing",
        width: 40,
        whitespaceBreak: false,
    }),

    figlet.textSync("Hello world!", {
        font: "Alligator",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);