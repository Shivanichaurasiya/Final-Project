export const courses = [
  {
    id: "html",
    title: "HTML Complete Guide (Basic → Advanced)",

    // 🔹 Certificate unlock condition
    certificate: true,

    // ================= NOTES =================
    notes: [

      // ================= BASIC =================
      {
        heading: "What is HTML?",
        description:
          "HTML stands for Hyper Text Markup Language. It is used to create the structure of web pages.",
        code: `<h1>Hello HTML</h1>`
      },

      {
        heading: "Basic HTML Structure (Boilerplate)",
        description:
          "Every HTML document starts with a standard structure.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`
      },

      {
        heading: "Meta Tags (SEO + Responsive)",
        description:
          "Meta tags help with SEO, mobile responsiveness and page information.",
        code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="HTML Complete Course">
<meta name="keywords" content="HTML, Web Development">`
      },

      {
        heading: "Headings & Paragraphs",
        description:
          "HTML provides h1 to h6 headings and paragraph tag.",
        code: `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a paragraph</p>`
      },

      {
        heading: "Text Formatting",
        description:
          "HTML supports text formatting tags.",
        code: `<b>Bold</b>
<i>Italic</i>
<u>Underline</u>
<strong>Strong</strong>
<em>Emphasis</em>`
      },

      // ================= LINKS & MEDIA =================
      {
        heading: "Links (Anchor Tag)",
        description:
          "Anchor tag is used to create hyperlinks.",
        code: `<a href="https://google.com" target="_blank">
  Visit Google
</a>`
      },

      {
        heading: "Images",
        description:
          "Images are displayed using img tag.",
        code: `<img src="https://via.placeholder.com/200" alt="Sample Image" />`
      },

      {
        heading: "Audio & Video",
        description:
          "HTML supports multimedia elements.",
        code: `<video width="200" controls>
  <source src="video.mp4" type="video/mp4">
</video>`
      },

      // ================= LISTS & TABLE =================
      {
        heading: "Lists (ul, ol)",
        description:
          "Lists are used to group items.",
        code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<ol>
  <li>One</li>
  <li>Two</li>
</ol>`
      },

      {
        heading: "Tables",
        description:
          "Tables are used to display tabular data.",
        code: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ram</td>
    <td>22</td>
  </tr>
</table>`
      },

      // ================= FORMS =================
      {
        heading: "Forms & Input Types",
        description:
          "Forms collect user input.",
        code: `<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button>Submit</button>
</form>`
      },

      {
        heading: "Radio, Checkbox & Select",
        description:
          "Advanced form controls.",
        code: `<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female

<input type="checkbox"> Agree

<select>
  <option>HTML</option>
  <option>CSS</option>
</select>`
      },

      // ================= SEMANTIC TAGS =================
      {
        heading: "Semantic HTML",
        description:
          "Semantic tags improve readability and SEO.",
        code: `<header>Header</header>
<nav>Navbar</nav>
<section>Section</section>
<article>Article</article>
<footer>Footer</footer>`
      },

      // ================= IFRAME =================
      {
        heading: "Iframe",
        description:
          "Iframe embeds another webpage.",
        code: `<iframe src="https://example.com" width="300" height="200"></iframe>`
      },

      // ================= HTML + JS =================
      {
        heading: "Button & onclick",
        description:
          "HTML can interact with JavaScript.",
        code: `<button onclick="sayHello()">Click Me</button>

<script>
function sayHello() {
  alert("Hello from HTML!");
}
</script>`
      },

      {
        heading: "DOM Manipulation",
        description:
          "JavaScript can change HTML content.",
        code: `<p id="text">Hello</p>

<button onclick="changeText()">Change</button>

<script>
function changeText() {
  document.getElementById("text").innerText = "Text Changed!";
}
</script>`
      },

      {
        heading: "Form Validation using JS",
        description:
          "Basic form validation.",
        code: `<input id="name" placeholder="Enter name">
<button onclick="check()">Submit</button>

<script>
function check(){
  let name = document.getElementById("name").value;
  if(name === ""){
    alert("Name required");
  } else {
    alert("Success");
  }
}
</script>`
      },

      // ================= ADVANCED =================
      {
        heading: "Data Attributes",
        description:
          "Custom data attributes store extra data.",
        code: `<button data-id="101">Button</button>`
      },

      {
        heading: "Accessibility (ARIA)",
        description:
          "ARIA improves accessibility.",
        code: `<button aria-label="Close">X</button>`
      },
    ],

    // ================= QUIZ =================
    quiz: [
      {
        question: "HTML ka full form kya hai?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyperlinks and Text Markup",
          "None of these"
        ],
        answer: 0
      },
      {
        question: "HTML boilerplate ka first line kya hota hai?",
        options: [
          "<html>",
          "<!DOCTYPE html>",
          "<head>",
          "<body>"
        ],
        answer: 1
      },
      {
        question: "Semantic tag ka example kaunsa hai?",
        options: [
          "<div>",
          "<span>",
          "<section>",
          "<b>"
        ],
        answer: 2
      }
    ]
  }
];
