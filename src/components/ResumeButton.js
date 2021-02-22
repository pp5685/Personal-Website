const ResumeButton = () => {
  const download = () => {
    window.open("/MichaelZhang-UofC-Software-Master-2020.pdf");
  };
  return (
    <div>
      <button className="ui primary button" onClick={download}>
        <i className="ui download icon"></i>
        download resume
      </button>
    </div>
  );
};

export default ResumeButton;
