import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "MicroController",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "Embedded protocols(UART,SPI,I2C,CAN)",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "C - Embedded C",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "",
          content: "Python",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "",
          content: "Bash Shell",
          porcentage: "80%",
          value: "80"
        },
        {
          id:"",
          content:"MATLAB",
          porcentage:"70%"
        },
        {
          id:"",
          content:"RTOS",
          porcentage:"70%"
        },
        {
          id:"",
          content:"Auto SAR",
          porcentage:"70%"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am an automotive embedded software engineer with 2 years of industry experience. I design highly optimized algorithms for various embedded boards/SOCs and desktops. I have worked on various multi-processing architectures to designed highly parallelized software that are more performance oriented for real time applications. I am an ambitious and industrious person. Continuous improvement and expanding my radius of understanding in the field is my mantrá."
        },
        {
          id: "second-p-about",
          content:
            ""
        },
        {
          id: "third-p-about",
          content:
            ""
        },
       
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
