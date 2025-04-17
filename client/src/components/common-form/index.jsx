import { Button } from "../ui/button";

function CommonForm({ handleSubmit, buttonText }) {
  <form onSubmit={handleSubmit}>
    {/* Render Form Controls */}
    <Button type="submit">{buttonText ? buttonText : "Submit"}</Button>
  </form>;
}

export default CommonForm;
