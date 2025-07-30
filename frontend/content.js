const endpoint = "http://localhost:3000/rewrite";

const observer = new MutationObserver(() => {
  const commentBoxes = document.querySelectorAll("textarea#new_comment_field");

  commentBoxes.forEach((box) => {
    if (box.dataset.emotionHooked) return;

    box.dataset.emotionHooked = "true";

    box.addEventListener(
      "input",
      debounce(async () => {
        const comment = box.value;
        if (comment.length < 10) return;

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment }),
          });

          const data = await response.json();
          renderSuggestion(box, data.suggestion);
        } catch (error) {
          console.error("Failed to get suggestion:", error);
        }
      }, 3000)
    );
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Renders suggestion below the textarea
function renderSuggestion(box, suggestion) {
  let container = box.parentElement.querySelector(".emotion-suggestion");
  if (!container) {
    container = document.createElement("div");
    container.className = "emotion-suggestion";

    const label = document.createElement("strong");
    label.innerText = "💡 Suggested Rewrite:";

    const text = document.createElement("div");
    text.className = "emotion-suggestion-text";
    text.innerText = suggestion;

    const useButton = document.createElement("button");
    useButton.innerText = "Use Suggestion";
    useButton.addEventListener("click", () => {
      const currentSuggestion = container.querySelector(".emotion-suggestion-text").innerText;
      
      box.value = currentSuggestion;
      
      box.dispatchEvent(new Event('input', { bubbles: true }));
      box.focus();
      
      // Place cursor at the end of the text
      box.setSelectionRange(box.value.length, box.value.length);
      
      // Remove the suggestion container after using it
      container.remove();
    });

    const retryButton = document.createElement("button");
    retryButton.innerText = "Retry";
    retryButton.style.marginLeft = "8px";
    retryButton.addEventListener("click", async () => {
      // Show loading state
      retryButton.innerText = "Retrying...";
      retryButton.disabled = true;
      
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment: box.value }),
        });

        const data = await response.json();
        const textNode = container.querySelector(".emotion-suggestion-text");
        if (textNode) textNode.innerText = data.suggestion;
      } catch (error) {
        console.error("Failed to retry suggestion:", error);
        retryButton.innerText = "Retry Failed";
      } finally {
        retryButton.innerText = "Retry";
        retryButton.disabled = false;
      }
    });

    container.appendChild(label);
    container.appendChild(text);
    container.appendChild(useButton);
    container.appendChild(retryButton);
    box.parentElement.appendChild(container);
  } else {
    const textNode = container.querySelector(".emotion-suggestion-text");
    if (textNode) textNode.innerText = suggestion;
  }
}

// Debounce utility
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
