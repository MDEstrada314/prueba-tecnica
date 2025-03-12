export const validateForm = (formData) => {
    if (!formData.name || formData.name.length < 3) {
      return "El nombre debe tener al menos 3 caracteres.";
    }
    return null;
  };
  