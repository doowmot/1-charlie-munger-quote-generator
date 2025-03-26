const quotesList = 
[
    "Spend each day trying to be a little wiser than you were when you woke up. Discharge your duties faithfully and well. Systematically you get ahead, but not necessarily in fast spurts. Nevertheless, you build discipline by preparing for fast spurts. Slug it out one inch at a time, day by day. At the end of the day – if you live long enough – most people get what they deserve.",
    "Neither Warren nor I are smart enough to make decisions with no time to think. We make actual decisions very rapidly, but that’s because we have spent so much time preparing ourselves by quietly reading.",
    "If you skillfully follow the multidisciplinary path, you will never wish to come back. It would be like cutting off your hands.",
    "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.",
    "I try to get rid of people who always confidently answer questions about which they don’t have any real knowledge.",
    "The iron rule of nature is: You get what you reward for. If you want ants to come, you put sugar on the floor.",
    "It takes character to sit with all that cash and do nothing. I didn’t get to where I am by going after mediocre opportunities.",
    "Take a simple idea, and take it seriously.",
    "Whenever you think something or some person is ruining your life, it’s you. A victimization mentality is so debilitating.",
    "In my whole life, I have known no wise people … who didn’t read all the time. … You’d be amazed at how much Warren reads, at how much I read. My children laugh at me. They think I’m a book with a couple of legs sticking out.",
    "We look for a horse with one chance in two of winning and which pays you three to one.",
    "Knowing what you don’t know is more useful than being brilliant.",
    "We have to have a special insight, or we’ll put it in the ‘too tough’ basket. All of you have to look for a special area of competency and focus on that.",
    "You don’t have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long, time.",
    "Remember that reputation and integrity are your most valuable assets, and can be lost in a heartbeat.",
    "Anytime anybody offers you anything with a big commission and a 200-page prospectus, don’t buy it. Occasionally, you’ll be wrong if you adopt ‘Munger’s Rule.’ However, over a lifetime, you’ll be a long way ahead, and you will miss a lot of unhappy experiences.",
    "The best armor of old age is a well-spent life preceding it.",
    "It’s not the bad ideas that do you in, but the good ones.",
    "Acknowledging what you don’t know is the dawning of wisdom.",
    "If you don’t allow for self-serving bias in the conduct of others, you are, again, a fool.",
    "Everybody engaged in complex work needs colleagues. Just the discipline of having to put your thoughts in order with somebody else is a very useful thing.",
    "I regard it as very unfair. But capitalism without failure is like religion without hell.",
    "If you have competence, you know the edge. It wouldnt be a competence if you didnt know where the boundaries lie. Asking whether you’ve passed the boundary is a question that almost answers itself.",
    'We both insist on a lot of time being available almost every day to just sit and think. That is very uncommon in American business. We read and think.',
    "Mimicking the herd invites regression to the mean."
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

