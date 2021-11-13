export default function validateInfo(values) {
  let errors = {};

  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Įveskite el. paštą";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El. paštas netinkamas";
  }
  if (!values.password) {
    errors.password = "Įveskite slaptažodį";
  } else if (values.password.length < 6) {
    errors.password = "Slaptažodis bent 6 simbolių";
  }

  if (!values.password2) {
    errors.password2 = "Įveskite slaptažodį";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Slaptažodžiai nesutampa";
  }
  if (!values.adress) {
    errors.adress = "Įveskite adresą";
  }
  if (!values.name) {
    errors.name = "Įveskite vardą";
  }
  if (!values.city) {
    errors.city = "Įveskite miestą";
  }
  if (!values.postalcode) {
    errors.postalcode = "Įveskite pašto kodą";
  } else if (values.postalcode.length > 5 || values.postalcode.length < 5) {
    errors.postalcode = "Netinkamas pašto kodas";
  }
  return errors;
}
