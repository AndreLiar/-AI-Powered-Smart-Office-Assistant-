import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid text-white bg-dark">
      {/* Hero Section */}
      <section className="text-center vh-100 d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4">🚀 AI-Powered Smart Office Assistant (SaaS Version)</h1>
          <p className="lead">Automate your email workflows with AI-driven summaries and replies.</p>
          <button className="btn btn-light mt-3" onClick={() => alert('Get Started Button Clicked!')}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">🌟 Features</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4>📨 AI Email Summarization</h4>
            <p>Get instant AI-powered summaries for your emails.</p>
          </div>
          <div className="col-md-4">
            <h4>🤖 Automated Replies</h4>
            <p>Generate professional responses effortlessly.</p>
          </div>
          <div className="col-md-4">
            <h4>🔒 Secure & Private</h4>
            <p>We ensure your data stays confidential and encrypted.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">💰 Pricing</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card bg-light p-3">
              <h4>Free</h4>
              <p>Basic AI Summaries</p>
              <h3>$0/month</h3>
              <button className="btn btn-dark">Sign Up</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light p-3">
              <h4>Pro</h4>
              <p>Unlimited AI Summaries + Auto-Replies</p>
              <h3>$15/month</h3>
              <button className="btn btn-dark">Upgrade</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light p-3">
              <h4>Enterprise</h4>
              <p>Custom AI & Team Collaboration</p>
              <h3>$50/month</h3>
              <button className="btn btn-dark">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">💬 Testimonials</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"This AI assistant saves me hours every day!"</p>
              <footer className="blockquote-footer">John Doe, CEO</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>"An absolute game-changer for managing my emails."</p>
              <footer className="blockquote-footer">Jane Smith, Freelancer</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">📞 Contact Us</h2>
        <form className="text-center">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-light">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-secondary text-white">
        <p>&copy; 2024 AI-Powered Smart Office Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
