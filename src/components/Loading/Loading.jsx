import './Loading.css';

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-message">{message}</p>
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
};

export default Loading;