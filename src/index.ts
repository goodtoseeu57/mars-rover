import { Command } from "commander";
import { marsWorld } from "./marsWorld";

const program = new Command();

program
    .version('1.0.0')
    .description('Mars World CLI');

program
    .command('run')
    .description('Run the Mars World simulation')
    .option('-i, --input <input>', 'Input data for simulation')
    .action(({ input }) => {
        if (!input) {
            console.error('Input data is required.');
            return;
        }
        const processedInput = input.replace(/\\n/g, '\n');
        marsWorld(processedInput);
    });

program.parse(process.argv);
