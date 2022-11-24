const getArgs = () => process.argv.slice(2);
const hasFlag = (flagShorthand, flagVerbose = null) => !!getArgs().find(a => a === `-${flagShorthand}` || (flagVerbose && a === `--${flagVerbose}`));
const getBoolFlag = (flagShorthand, flagVerbose = null) => !!getArgs().find(a => (a.startsWith("-") && !a.startsWith("--") && a.includes(flagShorthand)) || (flagVerbose && a === `--${flagVerbose}`));
const getFlagValue = (flagShorthand, flagVerbose = null) => !hasFlag(flagShorthand, flagVerbose) ? undefined : getArgs()[(getArgs().indexOf(`-${flagShorthand}`) + 1) || (getArgs().indexOf(`--${flagVerbose}`) + 1)];

exports.args = {
    getArgs, hasFlag, getBoolFlag, getFlagValue
}
