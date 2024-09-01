// Supports weights 100-900
import '@fontsource-variable/inter';
import "./styles.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Download from './components/Download';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <Header />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App