import inquirer from "inquirer";
import inquirerSearchList from "inquirer-search-list";

inquirer.registerPrompt("search-list", inquirerSearchList);
inquirer
    .prompt([
        {
            type: "search-list",
            message: "Select topping",
            name: "topping",
            choices: ["Pepperoni", "Ham", "Ground Meat", "Bacon", "Mozzarella", "Bottle"],
            validate: function(answer) {
                if (answer === 'Bottle') {
                    return `Whoops, ${answer} is not a real topping.`;
                }
                return true;
            }
        }
    ])
    .then(function(answers) {
        console.log(JSON.stringify(answers, null, "  "));
    })
    .catch(e => console.log(e));
