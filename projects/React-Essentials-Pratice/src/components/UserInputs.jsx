
export default function UserInput({ title, value, identifier, handleChange }) {
  return (
    <div className="input-group">
      <label>{title}</label>
      <input type="number" value={value} onChange={(event) => handleChange(identifier, event.target.value)} min={0} />
    </div>
  );
}
