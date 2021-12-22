const skillsDataset = {
  name: "Skills",
  size: 25000,
  children: [
    {
      name: "Web",
      size: 12500,
      children: [
        { name: "HTML", size: 6250 },
        { name: "CSS", size: 6250 },
        {
          name: "Javascript",
          size: 6250,
          children: [
            { name: "D3", size: 3184 },
            { name: "Node.js", size: 5238 },
            { name: "Express", size: 2938 },
            { name: "React.js", size: 5238 },
            { name: "Jest", size: 2938 },
            { name: "Mocha", size: 2938 },
            { name: "Chai", size: 2938 },
          ],
        },
        {
          name: "Python",
          size: 6250,
          children: [
            { name: "Django", size: 5555 },
            { name: "Selenium", size: 3534 },
            { name: "BeautifulSoup", size: 3416 },
            { name: "Tweepy", size: 3344 },
          ],
        },
        {
          name: "Servers",
          size: 6250,
          children: [
            { name: "Windows", size: 6250 },
            { name: "Linux", size: 6250 },
            { name: "CLI", size: 5982 },
            { name: "cmd", size: 5782 },
          ],
        },
      ],
    },
    {
      name: "Data",
      size: 12500,
      children: [
        {
          name: "SQL",
          size: 6250,
          children: [
            { name: "T-SQL", size: 6250 },
            { name: "SSMS", size: 6250 },
            { name: "SSRS", size: 5892 },
            { name: "MySQL", size: 4812 },
            { name: "Data Warehouse", size: 5289 },
          ],
        },
        {
          name: "NoSQL",
          size: 6250,
          children: [{ name: "MongoDB", size: 531 }],
        },
        {
          name: "Excel",
          size: 6250,
          children: [
            { name: "Formula", size: 6250 },
            { name: "VBA", size: 4812 },
          ],
        },
        { name: "WebFOCUS", size: 6250 },
      ],
    },
    {
      name: "Applications",
      size: 12500,
      children: [
        { name: "Python", size: 6250 },
        {
          name: "C#",
          size: 6250,
          children: [{ name: "Unity", size: 5439 }],
        },
        { name: "Git", size: 5555 },
      ],
    },
  ],
};
