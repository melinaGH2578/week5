

function order(sentence){
    if (!sentence) {
        return "";
    }



    const words = sentence.split(" ");
    const orderWords = [];
    for (let i = 1; i <= words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(i)) {
                orderWords.push(words[j]);
                break;
            }
        }
    }
    return orderWords.join("");
}
