const blog = [
    {
        id: 5,
        create_date: "22-07-2021",
        title: "Projects page created",
        image: "../images/projects/sailing/marie.jpg",
        image_attr: "",

        paragraphs: [
            "So, I've made some more time to work on this page.",
            "This time I created a page with personal projects, just to show a bit of content.",
            "Check it out by clicking the projects-button in the main menu.",
            "P.S. There's lots of content to be added, so don't mind the occasional dead link",
        ],
        categories: ["Personal", "Webdevelopment"],
    },
    {
        id: 5,
        create_date: "31-5-2021",
        title: "React Bootstrap",
        image: "../images/categorization.jpg",
        image_attr: "Photo by Antonio Batinić via Pexels",

        paragraphs: [
            "Apparently, it isn't enough to just drop bootstrap in index.html. Luckily, I managed to install React bootstrap and got it working. Now the hamburger menu works too!",
            "I couldn't be happier about the progress, also, more text to give the blog post a bit of filler.",
        ],
        categories: ["Bootstrap", "React-bootstrap"],
    },
    {
        id: 4,
        create_date: "29-05-2021",
        title: "Testing category filter",
        image: "../images/react.png",
        paragraphs: [`<a href="www.nu.nl">This is a link</a>`, "something else"],
        categories: ["Personal"],
    },
    {
        id: 3,
        create_date: "29-05-2021",
        title: "Blogposts needs categories",
        image: "../images/categorization.jpg",
        image_attr: "Photo by Sharon McCutcheon via Pexels",
        paragraphs: ["It would be nice to show some categories for the blogposts. Let's try to do this.", ""],
        categories: ["React.js", "Webdevelopment"],
    },
    {
        id: 1,
        create_date: "27-05-2021",
        title: "Need more design",
        image: "../images/design.jpg",
        paragraphs: ["So, everyting seem so be live, which is good. Now, I need some design. ", "Let's try to make this page look a little better."],
        categories: ["React.js", "Webdevelopment"],
    },
    {
        id: 0,
        create_date: "27-05-2021",
        title: "Deployment via Netlify/Github",
        image: "../images/web.jpg",
        paragraphs: [
            "Hello, this is my first post. I've deployed a portfolio page via Github and netlify by following instructions by Gene Campbell III (thanks).",
            "I will hopefully be updating this page to keep practising my skills.",
        ],
        categories: ["React.js", "Webdevelopment"],
    },
];
export default blog;
