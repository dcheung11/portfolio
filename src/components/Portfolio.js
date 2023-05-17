import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  console.log(item);
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        {/* <a href="#modal-01"> */}
                        {/* <a href={item.link} target="_blank"> */}
                        <img src={item.imgurl} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        {/* </a> */}
                      </div>
                      <a href={item.githubLink} target="_blank">
                        Github
                      </a>

                      {item.link ? (
                        <a href={item.link} target="_blank">
                          {" "}
                          || Link{" "}
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
