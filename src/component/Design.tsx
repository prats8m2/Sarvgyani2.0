import React from 'react';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  request: string;
  question: string;
  isLoader: boolean;
  answer: string;
  isAnswer: boolean;
}

const Design: React.FC<Props> = (props) => {
  const {
    request,
    question,
    isLoader,
    isAnswer,
    answer,
    handleChange,
    handleSubmit,
  } = props;

  const loader: React.ReactChild = (
    <div className="spinner">
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  );

  return (
    <div>
      <nav
        id="mainNav"
        className="navbar navbar-default navbar-fixed-top navbar-custom"
      >
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span> Menu{' '}
              <i className="fa fa-bars"></i>
            </button>

            <a href="#page-top" className="navbar-brand" target="">
              <img
                className="logo"
                alt="TheMakers.io"
                src="images/img-_themakers1.png"
                width="31"
                height="20"
              />
            </a>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <a href="https://www.facebook.com/" id="" className="">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" id="" className="">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="">
                <a href="http://fb.com" id="" className="join">
                  <i className="fab fa-apple"></i> App coming soon!
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>

      {/* <!-- Header --> */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-text">
                <span className="name">Sarvagyani</span>
                <p>I know everything</p>
                {/* <span className="skills">Let's Play!</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="team">
        <div className="container">
          <div className="row col-sm-12 text-center">
            <h2>Let's Play!</h2>
            <div id="mailchimp">
              <div id="mc_embed_signup_scroll">
                <input
                  type="text"
                  value={request}
                  name="request"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Make request"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <br />
                <input
                  type="text"
                  value={question}
                  name="question"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Ask question?"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  value="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button android"
                  onClick={() => handleSubmit()}
                  disabled={!question || !request}
                />
              </div>
            </div>
          </div>

          {isAnswer ? <h3>{answer}</h3> : <></>}
        </div>
        {isLoader ? loader : <></>}
      </section>

      {/* <!-- Portfolio Grid Section --> */}
      <section id="who">
        <div className="container">
          <div className="row col-lg-12 text-center">
            <img className="img-responsive" src="images/img-who.png" alt="" />
            <h2>WHO IS A Sarvagyani?</h2>
            <p>
              Sarvagyani is a AI based bot who answers the question on the basis
              of your public data from facebook, twitter, whatsapp etc.
              Sarvagyani can also access you system hardware by using Remote
              playback API. You can ask Sarvagyani about your past, future &
              present.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- How Section --> */}
      <section id="how">
        <div className="container">
          <div className="row col-lg-12 text-center">
            <img className="img-responsive" src="images/img-how.png" alt="" />

            <h2>HOW DOES IT WORK?</h2>
            <p>
              You need to first make a request to Sarvagyani by entering
              <br />
              <h3>'Sarvagyani please tell'</h3>
              <br /> After this you can ask any question to Sarvagyani. Please
              keep a friendly and positive language. When your question is
              ready, press 'Enter'. Wait for a while and you will see the
              answer.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Why Section --> */}
      <section id="why">
        <div className="container">
          <div className="row col-lg-12 text-center">
            <img className="img-responsive" src="images/img-why.png" alt="" />
            <h2>WHY ARE YOU DOING THIS?</h2>
            <p>
              You can use Sarvagyani to know the personal digitaly shared info
              any individual. You just need to request Sarvagyani and he will
              answer everything
            </p>
          </div>
        </div>
      </section>

      <section id="community">
        <div className="container">
          <div className="row col-lg-12 text-center">
            <p className="beta">Android/IOS application coming soon!</p>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
