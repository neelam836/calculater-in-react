import React from 'react';

const Home = () => {
    return (
        <div className="container my-5 pb-5">

            <div className="card shadow-sm p-4 text-center">
                <h1 className="display-5 mb-3 text-dark">Welcome to My React Apps</h1>
                <p className="lead text-muted">
                    Explore a variety of interactive applications built with React.
                </p>
                <div className="card mt-4 p-3 text-start">
                    <h2 className="h5 mb-3">Features:</h2>
                    <ul className="list-unstyled mb-0">
                        <li>✅ Interactive UI</li>
                        <li>✅ Real-time updates</li>
                        <li>✅ Responsive design</li>
                        <li>✅ Cross-platform compatibility</li>
                        <li>✅ Easy integration with other tools</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
