function App() {
    const st1 = { color: 'white', backgroundColor: '#343A46' };
    const st2 = { color: 'white', backgroundColor: '#343A46' };
    const cardStyle = { backgroundColor: '#343A46', padding: '20px', borderRadius: '10px', marginTop: '20px' };
    const listStyle = { color: '#FFFFFF', listStyleType: 'disc', paddingLeft: '20px' };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            padding: '20px', 
            backgroundColor: '#23272F',
            color: '#FFFFFF',
            minHeight: '100vh'
        }}>
            <h1 style={st1}>Quick Start</h1>
            <p style={st2}>
                Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.
            </p>
            <div style={cardStyle}>
                <h2 style={{ marginBottom: '15px' }}>You will learn</h2>
                <ul style={listStyle}>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    );
}
ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />);
