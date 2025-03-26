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

let remainingQuotes = [...quotesList];

function generateQuote() {
    if (remainingQuotes.length === 0) {
        remainingQuotes = [...quotesList];
    }
    
    const randomPosition = Math.floor(Math.random() * remainingQuotes.length);
    
    const selectedQuote = remainingQuotes[randomPosition];
    
    remainingQuotes.splice(randomPosition, 1);
    
    document.getElementById("quote-display").innerHTML = `"${selectedQuote}"`;
}

function copyQuote() {
  let quoteText = document.getElementById("quote-display").textContent;
  
  navigator.clipboard.writeText(quoteText);
  
  const buttonText = document.querySelector("button:nth-of-type(2) .button-text");
  const originalText = buttonText.textContent;
  buttonText.textContent = "Copied!";
  
  setTimeout(() => {
    buttonText.textContent = originalText;
  }, 1500);
}

function shareQuote() {
    const quoteText = document.getElementById("quote-display").textContent;
    const shareData = {
      title: 'Charlie Munger Quote',
      text: quoteText + ' - Charlie Munger',
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData)
        .catch(err => console.error('Error sharing:', err));
    } else {

      alert("Your browser doesn't support sharing. Try copying the quote instead.");
    }
  }

