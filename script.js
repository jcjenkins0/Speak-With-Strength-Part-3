
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quoteDiv = document.getElementById('quote');
      if (quoteDiv) quoteDiv.textContent = "📢 Quote of the Day: " + data.content;
    });

  const tips = [
    "Practice in front of a mirror or record yourself.",
    "Know your audience and tailor your message to them.",
    "Use pauses effectively — they add emphasis and give you time to think.",
    "Maintain eye contact to build trust and connection.",
    "Start with a strong opening to capture attention.",
    "Practice deep breathing to calm your nerves.",
    "Organize your speech with a clear structure: intro, body, conclusion.",
    "Avoid filler words like 'um' and 'like' by pausing instead.",
    "Use gestures naturally to reinforce your message.",
    "End with a clear and powerful closing statement."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const tipBox = document.getElementById('tipBox');
  if (tipBox) {
    tipBox.textContent = "💡 Public Speaking Tip: " + randomTip;
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('responseMessage').textContent = "Message sent successfully (simulated)!";
    });
  }
});
