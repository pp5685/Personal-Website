import ResumeButton from "./ResumeButton";

const IntroCard = () => {
  return (
    <div
      class="ui raised very padded text container segment"
      style={{
        position: "sticky",
        backgroundImage: "url(/pink-background.jpg)",
        color: "white",
      }}
    >
      <h2 class="ui header" style={{ color: "white" }}>
        Dogs Roles with Humans
      </h2>
      <img class="ui tiny middle aligned circular image" src="/cherryinn.jpg" />
      <span className="ui small header" style={{ color: "white" }}>
        Cherry Inn
      </span>
      <p>
        Shenghan is a man of focus, commitment, sheer will... something you know
        very little about. I once saw him kill three men in a bar... with a
        pencil, with a fucking pencil. Then suddenly one day he asked to leave.
        It's over a woman, of course. So I made a deal with him. I gave him an
        impossible task. A job no one could have pulled off. The bodies he
        buried that day laid the foundation of what we are now. And then my son,
        a few days after his wife died, you steal his car and kill his ''fucking
        dog.''
      </p>
      <ResumeButton />
    </div>
  );
};

export default IntroCard;
