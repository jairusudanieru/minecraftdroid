const { readdirSync } = require("fs");

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = readdirSync(`./components`);
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./components/${folder}`).filter(
                (file) => file.endsWith(".js")
            );

            const { buttons, selectMenus, modals } = client;

            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)
                        buttons.set(button.data.name, button);
                    }
                    break;

                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`);
                        modals.set(modal.data.name, modal);
                    }
                    break;

                case "minecraft":
                    for (const file of componentFiles) {
                        const pan = require(`../../components/${folder}/${file}`)
                        buttons.set(pan.data.name, pan);
                    }
                    break;

                default:
                    break;
            }
        }
    };
};