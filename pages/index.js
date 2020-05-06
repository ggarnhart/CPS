import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPlus,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="max-width-vw">
      <div className="center-everything full-height">
        <Container>
          <Row>
            <Col lg={8} className="text-align-left">
              <h1 className="heavier forty">Hello, friend.</h1>

              <p className="lighter forty ">
                We'll be touching on{" "}
                <span className="heavier">Creative Problem Solving</span> over
                the next few minutes.
              </p>

              <p className="lighter">
                Estimated read time (including external articles): 7 minutes.
              </p>
              <p>Scroll to Start.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* panel 2 */}
      <div className="">
        <Row className="center-everything background-light-blue half-height">
          <h2 className="">Many people think problems exist in either</h2>
        </Row>
        <Row>
          <Col
            md={6}
            sm={12}
            className="background-deep-blue text-align-right half-height center-everything "
          >
            <h2>black</h2>
          </Col>
          <Col
            md={6}
            sm={12}
            className="background-off-white  innner-padding text-align-left half-height center-everything "
          >
            <h2>or white.</h2>
          </Col>
        </Row>
      </div>
      {/* panel 3 */}
      <div className="panel-three-gradient">
        <Container>
          <Row>
            <Col className="full-height center-everything">
              <h2 className="lighter">(it's usually somewhere in between.)</h2>
            </Col>
          </Row>
        </Container>
      </div>
      {/* panel 4 */}
      <div className="panel-four-gradient">
        <Container className="full-height  flex-col">
          <Row>
            <Col>
              <p className="lighter three-em">
                That is to say, while some problems are harder to solve than
                others, there are few problems that have only one (or no)
                solution.
              </p>
              <br />
              <br />
              <p className="align-bottom heavier two-em">
                okay, but how do we solve these problems?
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* panel 5 */}
      <div className="background-off-white">
        <Container className="min-half-height">
          <Row>
            <Col>
              <p className="lighter two-em">a framework, if you will: </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="pillar">
                <h1>
                  <FontAwesomeIcon icon={faLightbulb} />
                </h1>
                <br />
                <h3 className="heavier pillar-title">Identify</h3>
                <p className="lighter">
                  Understand your problem to the point where you can describe
                  the overall idea in a sentence or two.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="pillar">
                <h1>
                  <FontAwesomeIcon icon={faPlus} />
                </h1>
                <br />
                <h3 className="heavier pillar-title">Ideate</h3>
                <p className="lighter">
                  Generate wacky, potential solutions. Ask your friends for
                  thoughts. Talk about it and listen to their feedback!{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="pillar">
                <h1>
                  <FontAwesomeIcon icon={faSyncAlt} />
                </h1>
                <br />
                <h3 className="heavier pillar-title">Iterate</h3>
                <p className="lighter">
                  Land on a solution. Share it with the world. If they like it,
                  ask how you can make it better. If they don't, change it so
                  they will.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* panel 5 */}
      <div className="background-off-white min-half-height some-top-padding">
        <Container className="background-off-white">
          <Row>
            <Col>
              <h2 className="lighter">
                to be fair, this is not my{" "}
                <span className="italicize">own</span> framework.
              </h2>
              <h2 className="lighter">
                <span className="heavier">Design Thinking</span> is used in a
                lot of places...
              </h2>

              <Row className="dt-example">
                <Col lg={12} className="flex-row">
                  <div className="example-image">
                    <img className="airbnb" src="/airbnb.png" />
                  </div>
                  <div className="flex-col">
                    <h4>Airbnb</h4>
                    <p>
                      The founders of Airbnb noticed that people were bad at
                      photographing their homes, so they flew to New York and
                      took photos themselves.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="dt-example">
                <Col lg={12} className="flex-row">
                  <div className="example-image">
                    <img className="designyourlife" src="/designyourlife.jpg" />
                  </div>
                  <div className="flex-col">
                    <h4>You</h4>
                    <p>
                      Designing Your Life is an incredibly popular book that
                      applies Design Thinking to the reader. The authors focused
                      on promoting joyful living.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>
                    ...but I do like to throw my hat into the ring
                    occasionally...
                  </h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* panel 6 */}
      <div className="background-off-white min-half-height center-everything-but-text some-top-padding some-bottom-padding">
        <Container>
          <Row>
            <Col>
              <h2 className="lighter">
                <span className="heavier">User Empathy</span> is a huge part of
                design.
              </h2>
              <p className="lighter">
                While I am not a designer, I love writing about the way products
                can be improved through this use of empathy. I’ve written quite{" "}
                <span className="heavier">a few articles</span> on the topic:
              </p>
              <Row>
                <Col sm={12} md={3}>
                  <a
                    href="https://medium.com/@GGarnhart/feature-request-google-maps-priorities-77ffc70c7810"
                    target="_blank"
                  >
                    <div className="medium-post">
                      <div className="medium-image"></div>
                      <h4 className="medium-title">
                        Feature Request: Google Maps Priorities
                      </h4>
                    </div>
                  </a>
                </Col>
                <Col sm={12} md={3}>
                  <a
                    href="https://medium.com/@GGarnhart/feature-request-square-rapid-restaurant-checkouts-2d96ffd06375"
                    target="_blank"
                  >
                    <div className="medium-post">
                      <div className="medium-image"></div>
                      <h4 className="medium-title">
                        Feature Request: Square Rapid Restaurant Checkouts
                      </h4>
                    </div>
                  </a>
                </Col>
                <Col sm={12} md={3}>
                  <a
                    target="_blank"
                    href="https://blog.prototypr.io/feature-request-a-better-spotify-podcast-experience-ed6c1c9209c0"
                  >
                    <div className="medium-post">
                      <div className="medium-image"></div>
                      <h4 className="medium-title">
                        Feature Request: A Better Spotify Podcast Experience
                      </h4>
                    </div>
                  </a>
                </Col>
                <Col sm={12} md={3}>
                  <a
                    target="_blank"
                    href="https://blog.prototypr.io/feature-request-a-better-iphone-screenshot-75018511235"
                  >
                    <div className="medium-post">
                      <div className="medium-image"></div>
                      <h4 className="medium-title">
                        Feature Request: A better iPhone Screenshot
                      </h4>
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* panel 7 */}
      <div className="center-everything background-deep-blue full-height">
        <Container>
          <h3>
            So share your ideas! Get feedback! Start over! This process is fun.
          </h3>
          <br />
          <h3>
            Have ideas on how I can improve this overview?{" "}
            <a href="mailto:gegarnhart@email.wm.edu">Let me know. </a>
            Otherwise, stay safe, enjoy the rest of the day, and thank you for
            stopping by :)
          </h3>
          <br />
          <h3>
            If you would like to see the code behind this website, click{" "}
            <a href="https://github.com/ggarnhart/CPS" target="_blank">
              here
            </a>
            .
          </h3>
        </Container>
      </div>
    </div>
  );
}
