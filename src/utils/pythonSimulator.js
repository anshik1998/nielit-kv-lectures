export const pythonSimulator = {
    // Simulate Python string multiplication
    multiplyString: (str, times) => {
        return str.repeat(times);
    },

    // Simulate Python boolean values
    booleans: {
        'True': true,
        'False': false
    },

    // Simulate Python string methods
    stringMethods: {
        upper: (str) => str.toUpperCase(),
        lower: (str) => str.toLowerCase()
    },

    // Safely evaluate Python-like expressions
    evaluate: (code) => {
        // Handle string methods first
        if (code.includes('.upper()')) {
            const str = code.match(/['"]([^'"]+)['"]/)?.[1] || '';
            return str.toUpperCase();
        }

        // Handle string multiplication
        if (code.includes('*') && code.includes("'")) {
            const [str, times] = code.split('*').map(s => s.trim());
            const cleanStr = str.replace(/['"]/g, '');
            return pythonSimulator.multiplyString(cleanStr, parseInt(times));
        }

        // Handle string concatenation
        if (code.includes('+') && code.includes("'")) {
            return code.split('+')
                .map(s => s.trim().replace(/['"]/g, ''))
                .join('');
        }

        // Handle Python booleans
        if (code === 'True' || code === 'False') {
            return pythonSimulator.booleans[code];
        }

        // Handle basic arithmetic
        try {
            return eval(code);
        } catch {
            return code;
        }
    }
}; 