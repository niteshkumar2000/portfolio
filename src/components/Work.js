import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default class Work extends React.Component{
    render(){
        return(
            <React.Fragment>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 May - Present"
                    contentStyle={{ background: "black", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#ffb800" }}
                    >
                    <h3 className="vertical-timeline-element-title">Student Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">KLA, Chennai</h4>
                    <p style={{color:"#ffb800"}}>
                        (i) Advanced Diagonostics & performance models using Machine Learning Algorithms. <br></br>
                        (ii) Building Microservices and deploying on Kubernetes.
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "black", color: "#ffb800" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ffb800" }}
                    date="2018 April - May"
                    iconStyle={{ background: "black" }}
                    >
                    <h3 className="vertical-timeline-element-title">Summer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        My Game Solutions, Coimbatore
                    </h4>
                    <p style={{color: "#fff"}}>
                        I was introduced to Outsystem low
                        code platform and developed an Android application, which helps in
                        task management.
                    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 June - Present"
                    contentStyle={{ background: "black", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                    iconStyle={{ background: "#ffb800" }}
                    >
                    <h3 className="vertical-timeline-element-title">College</h3>
                    <h4 className="vertical-timeline-element-subtitle">PSG Tech, Coimbatore</h4>
                    <p style={{color:"#ffb800"}}>
                        MSc.Sofware Systems (5 year intergrated course)
                    </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </React.Fragment>
        );
    }
}