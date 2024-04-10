// Implement Debouncing

function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        const context = this;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Function to be debounced
function search() {
    console.log("Performing search...");
    
}

const debouncedSearch = debounce(search, 300);
debouncedSearch(); 
debouncedSearch(); 
debouncedSearch(); 
