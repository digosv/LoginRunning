function toggleRun() {
  const html = document.documentElement

  if (html.classList.contains("move")) {
    html.classList.remove("move")
  } else {
    html.classList.add("move")
  }
}
