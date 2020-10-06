const TopNavigation = [
  {
    DisplayText: "IELTS",
    Link: "/",
    Dropdown: false,
    DescTitle: "IELTS",
    Description: "",
  },
  {
    DisplayText: "Modules",
    Link: "#",
    Dropdown: true,
    DescTitle: "IELTS Modules",
    Description: "",
    Subnav: [
      {
        DisplayText: "Listening",
        Link: "/ielts/listening",
        DescTitle: "Listening",
        Description: "",
        Dropdown: false,
      },
      {
        DisplayText: "Reading",
        Link: "/ielts/reading",
        DescTitle: "Reading",
        Description: "",
        Dropdown: false,
      },
      {
        DisplayText: "Writing",
        Link: "/ielts/writing",
        DescTitle: "Writing",
        Description: "",
        Dropdown: false,
      },
      {
        DisplayText: "Speaking",
        Link: "/ielts/speaking",
        DescTitle: "Speaking",
        Description: "",
        Dropdown: false,
      },
    ],
  },
  {
    DisplayText: "FAQs",
    Link: "/faqs",
    DescTitle: "Frequently Asked Questions",
    Description: "",
    Dropdown: false,
  },

  {
    DisplayText: "Back to Home",
    Link: "https://www.traininghub.io/",
    DescTitle: "Traininghub.io",
    Description: "",
    Dropdown: false,
    external: true,
  },
];

export { TopNavigation };
