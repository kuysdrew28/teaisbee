// Open the chat window and send greeting when loaded
window.addEventListener("load", () => {
  window.botpressWebChat.sendEvent({ type: "show" });

  // Small delay so widget loads before greeting
  setTimeout(() => {
    window.botpressWebChat.sendPayload({
      type: "text",
      text: "Hi! I’m TSV Assistant 👋 How can I help you today?"
    });
  }, 800);
});
