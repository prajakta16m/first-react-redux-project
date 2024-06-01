function AlertModal(props) {
  let closeAlert = () => {
    document.getElementsByClassName("alert-box")[0].remove();
  };

  return (
    <>
      <div className="alert-box">
        {props.children}
        <div className="close" onClick={closeAlert}>
          X
        </div>
      </div>
    </>
  );
}

export default AlertModal;
