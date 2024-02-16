import WorkItem from "./WorkItem";

const data = [
  {
    year: 2018,
    title: "Schepens SRL",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem consequuntur",
  },
  {
    year: 2018,
    title: "Schepens SRL",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem consequuntur",
  },
  {
    year: 2018,
    title: "Schepens SRL",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem consequuntur",
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
