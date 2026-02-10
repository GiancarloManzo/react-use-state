import { useState } from "react";
import languages from "../languages";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div>
      <h1>Linguaggi Web</h1>

      <div>
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language)}
            className={selectedLanguage?.id === language.id ? "active" : ""}
          >
            {language.title}
          </button>
        ))}
      </div>

      <div>
        {selectedLanguage ? (
          <>
            <h2>{selectedLanguage.title}</h2>
            <p>{selectedLanguage.description}</p>
          </>
        ) : (
          <p>Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  );
}

export default App;
