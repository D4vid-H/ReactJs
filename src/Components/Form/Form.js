import "./Form.css";

const { useState } = require("react");

const Form = () => {
  const [input, setInput] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="mx-4">Ingrese su nombre:</label>
        <input
          type="text"
          className="inputContacto"
          onChange={(evt) => setInput(evt.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mx-4 my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cardBtn"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
