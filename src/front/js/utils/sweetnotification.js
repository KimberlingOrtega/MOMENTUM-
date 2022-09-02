import Swal from "sweetalert2";

export const sweetNotification = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 3000,
  });
};
