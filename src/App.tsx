import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="container-fluid text-center text-white bg-dark vh-100 d-flex align-items-center justify-content-center">
      {/* Main Content */}
      <div>
        <h1 className="display-4">🚀 AI-Powered Smart Office Assistant (SaaS Version)</h1>
        <p className="lead">
          Automate your email workflows with AI-driven summaries and replies.
        </p>
        <button className="btn btn-light mt-3" onClick={() => alert('Get Started Button Clicked!')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
