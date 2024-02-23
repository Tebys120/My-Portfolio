import WorkItem from "./WorkItem";

const data = [
  {
    year: 2018,
    title: "Schepens SRL",
    duration: "1 Year",
    details:
      "This was my first job. I was a technical draughtsman and my job consisted of the layout and design of machinery. It is important to me to add this because it was the first step to becoming a professional. And most importantly, I learned about loyalty through the opportunity they gave me.",
  },
  {
    year: 2019,
    title: "Didaskalia Switzerland GmbH",
    duration: "3 Years",
    details:
      "After leave behind the machinery design, i dedicate three years in this job to learn how to create, organize, and carry out a project, specifically with Gantt Chart. My job was dedicated about layout, build and structure design. Altough it is not related with my current job, it is in my opinion a fundamental piece of the professional i want to be.",
  },
  {
    year: 2020,
    title: "Freelancer",
    duration: "To the present",
    details:
      "Then, Covid-19 hit, and we had to stay locked up. At the beginning, I started working on my own projects in CAD, until I found what I knew would be my passion: coding and programming. So, I began learning the basics and in 2023, I left my job to pursue in-depth learning. Now, I am at the point of becoming a professional programmer, studying and working on a few projects.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
