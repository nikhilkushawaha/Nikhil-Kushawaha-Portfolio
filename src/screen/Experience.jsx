import { workExperiences } from "../constants/index.js";
import { topics } from "../constants/index.js";

const WorkExperience = () => {
  return (
    <section className="px-6 py-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas overflow-hidden">
            <div className="h-full overflow-y-auto custom-scrollbar p-5">
              {topics.map((topic, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    {topic.icon && (
                      <img
                        src={topic.icon}
                        alt={topic.title}
                        className="w-10 h-10 rounded-full p-1"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-white">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-sm">{topic.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
