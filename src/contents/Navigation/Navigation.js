const TopNavigation = [
  // {
  //   DisplayText: "Course",
  //   Link: "/",
  //   Dropdown: false,
  //   DescTitle: "Course",
  //   Description: "",
  // },
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
];

export { TopNavigation };
