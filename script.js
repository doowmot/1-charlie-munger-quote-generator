
const quotesList = 
[
    "Spend each day trying to be a little wiser than you were when you woke up. Discharge your duties faithfully and well. Systematically you get ahead, but not necessarily in fast spurts. Nevertheless, you build discipline by preparing for fast spurts. Slug it out one inch at a time, day by day. At the end of the day – if you live long enough – most people get what they deserve.",
    "Neither Warren nor I are smart enough to make decisions with no time to think. We make actual decisions very rapidly, but that’s because we have spent so much time preparing ourselves by quietly reading.",
    "If you skillfully follow the multidisciplinary path, you will never wish to come back. It would be like cutting off your hands.",
    "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.",
    "I try to get rid of people who always confidently answer questions about which they don’t have any real knowledge.",
    "The iron rule of nature is: You get what you reward for. If you want ants to come, you put sugar on the floor.",
    "It takes character to sit with all that cash and do nothing. I didn’t get to where I am by going after mediocre opportunities.",
    "Take a simple idea, and take it seriously."
]

function generateQuote() {
    const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
    document.getElementById("test").innerHTML = randomQuote;
}
