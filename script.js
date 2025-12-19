const stopwords = ["and","or","the","is","are","with","to","for","of","in","on","a","an"];

function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(w => w.length > 2 && !stopwords.includes(w));
}

function analyze() {
  const jdText = document.getElementById("jd").value;
  const resumeText = document.getElementById("resume").value;

  const jdWords = [...new Set(cleanText(jdText))];
  const resumeWords = cleanText(resumeText);

  const matched = jdWords.filter(w => resumeWords.includes(w));
  const missing = jdWords.filter(w => !resumeWords.includes(w));

  const score = ((matched.length / jdWords.length) * 100).toFixed(2);

  document.getElementById("result").innerHTML = `
    <h3>ATS Match Score: ${score}%</h3>
    <p><b>Matched Keywords:</b> ${matched.join(", ")}</p>
    <p><b>Missing Keywords:</b> ${missing.join(", ")}</p>
  `;
}
