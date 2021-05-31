const blog = [
    {
        id: 4,
        create_date: "29-05-2021",
        title: "Testing category filter",
        image: "./images/placeholder.png",
        paragraphs: [`<a href="www.nu.nl">This is a link</a>`, "something else"],
        categories: ["Personal"],
    },
    {
        id: 3,
        create_date: "29-05-2021",
        title: "Blogposts needs categories",
        image: "./images/categorization.jpg",
        paragraphs: ["It would be nice to show some categories for the blogposts. Let's try to do this.", ""],
        categories: ["React.js", "Webdevelopment"],
    },
    {
        id: 1,
        create_date: "27-05-2021",
        title: "Need more design",
        image: "./images/design.jpg",
        paragraphs: ["So, everyting seem so be live, which is good. Now, I need some design. ", "Let's try to make this page look a little better."],
        categories: ["React.js", "Webdevelopment"],
    },
    {
        id: 0,
        create_date: "27-05-2021",
        title: "Deployment via Netlify/Github",
        image: "./images/thumbs.jpg",
        paragraphs: [
            "Hello, this is my first post. I've deployed a portfolio page via Github and netlify by following instructions by Gene Campbell III (thanks).",
            "I will hopefully be updating this page to keep practising my skills.",
        ],
        categories: ["React.js", "Webdevelopment"],
    },
];
export default blog;
