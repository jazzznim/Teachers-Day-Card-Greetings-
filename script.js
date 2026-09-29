const $ = (id) => document.getElementById(id);

const flipCard = $("flipCard");
const flipBtn = $("flipBtn");
const nextBtn = $("nextBtn");
const prevBtn = $("prevBtn");
const photoInputs = [$("photoInput"), $("photoInputBottom")];
const audioInputs = [$("audioInput"), $("audioInputBottom")];

let photos = [];
let photoIndex = 0;

function flip() {
  flipCard.classList.toggle("flipped");
}

flipBtn.addEventListener("click", flip);
nextBtn.addEventListener("click", () => {
  if (photos.length) {
    photoIndex = (photoIndex + 1) % photos.length;
    showPhoto();
    if (!flipCard.classList.contains("flipped")) flip();
  } else {
    flip();
  }
});
prevBtn.addEventListener("click", () => {
  if (photos.length) {
    photoIndex = (photoIndex - 1 + photos.length) % photos.length;
    showPhoto();
    if (!flipCard.classList.contains("flipped")) flip();
  } else {
    flip();
  }
});

function showPhoto() {
  const img = $("photoPreview");
  const placeholder = $("photoPlaceholder");
  if (!photos.length) {
    img.style.display = "none";
    placeholder.style.display = "flex";
    return;
  }
  img.src = photos[photoIndex];
  img.style.display = "block";
  placeholder.style.display = "none";
  showToast(`Photo ${photoIndex + 1} of ${photos.length}`);
}

function handlePhotos(files) {
  const valid = [...files].filter(file => file.type.startsWith("image/"));
  if (!valid.length) return;
  valid.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      photos.push(e.target.result);
      photoIndex = photos.length - 1;
      showPhoto();
    };
    reader.readAsDataURL(file);
  });
  showToast(`${valid.length} photo${valid.length > 1 ? "s" : ""} added`);
}

photoInputs.forEach(input => {
  input.addEventListener("change", e => handlePhotos(e.target.files));
});

function handleAudio(file) {
  if (!file || !file.type.startsWith("audio/")) return;
  const url = URL.createObjectURL(file);
  $("audioElement").src = url;
  $("audioPlayer").hidden = false;
  showToast("Audio greeting added");
}

audioInputs.forEach(input => {
  input.addEventListener("change", e => handleAudio(e.target.files[0]));
});

function updateText() {
  const teacher = $("teacherInput").value.trim() || "Dear Teacher,";
  const name = $("nameInput").value.trim() || "Your Student";
  const signature = $("signatureInput").value.trim() || "Your Student";
  const message = $("messageInput").value.trim();

  $("previewName").textContent = name;
  $("previewMessage").innerHTML =
    `<strong>${escapeHTML(teacher)}</strong><br><br>${escapeHTML(message).replace(/\n/g, "<br>")}`;
  $("previewSignature").textContent = signature;
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

["teacherInput", "nameInput", "signatureInput", "messageInput"].forEach(id => {
  $(id).addEventListener("input", updateText);
});

$("fontInput").addEventListener("change", e => {
  document.documentElement.style.setProperty("--card-font", `"${e.target.value}", sans-serif`);
  document.querySelectorAll(".card-back, .card-front").forEach(el => {
    el.style.fontFamily = `"${e.target.value}", sans-serif`;
  });
  showToast("Font updated");
});

document.querySelectorAll(".swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    document.documentElement.style.setProperty("--accent", swatch.dataset.accent);
    document.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
    swatch.classList.add("selected");
    showToast("Card color updated");
  });
});

$("resetBtn").addEventListener("click", () => {
  photos = [];
  photoIndex = 0;
  $("photoPreview").src = "";
  $("photoPreview").style.display = "none";
  $("photoPlaceholder").style.display = "flex";
  $("audioElement").src = "";
  $("audioPlayer").hidden = true;
  $("teacherInput").value = "Dear Teacher,";
  $("nameInput").value = "Princess Muñoz";
  $("signatureInput").value = "Your Student";
  $("messageInput").value =
    "Thank you for your patience, guidance, kindness, and for believing in your students. You don't just teach lessons—you inspire dreams, build confidence, and make a lasting difference.\n\nHappy Teachers' Day! 🌷";
  $("fontInput").value = "DM Sans";
  document.documentElement.style.setProperty("--accent", "#315c91");
  document.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
  document.querySelector(".swatch.green").classList.add("selected");
  flipCard.classList.remove("flipped");
  updateText();
  showToast("Card reset");
});

document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    $(btn.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  });
});

$("customizer").addEventListener("click", e => e.stopPropagation());

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

updateText();
