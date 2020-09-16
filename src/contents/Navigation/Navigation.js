const TopNavigation = [
  {
    DisplayText: "Home",
    Link: "/",
    Dropdown: false,
    DescTitle: "Home",
    Description: "",
  },
  {
    DisplayText: "About us",
    Link: "/about-us",
    Dropdown: false,
    DescTitle: "About us",
    Description: "",
  },
  {
    DisplayText: "IELTS",
    Link: "/ielts",
    Dropdown: false,
    DescTitle: "IELTS",
    Description: "",
  },
  {
    DisplayText: "IELTS Modules",
    Dropdown: true,
    DescTitle: "IELTS",
    Description: "",
    Subnav: [
      {
        DisplayText: "Listening",
        Link: "/ielts/listening",
        DescTitle: "Listening",
        Description: "",
      },
      {
        DisplayText: "Reading",
        Link: "/ielts/reading",
        DescTitle: "Reading",
        Description: "",
      },
      {
        DisplayText: "Writing",
        Link: "/ielts/writing",
        DescTitle: "Writing",
        Description: "",
      },
      {
        DisplayText: "Speaking",
        Link: "/ielts/speaking",
        DescTitle: "Speaking",
        Description: "",
      },
    ],
  },
  {
    DisplayText: "Contact us",
    Link: "/contact-us",
    Dropdown: false,
    DescTitle: "Contact us",
    Description: "",
  },
];

export { TopNavigation };
