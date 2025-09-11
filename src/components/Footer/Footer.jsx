import Swal from "sweetalert2";
import SocialIcons from "./SocialIcons";
import "sweetalert2/dist/sweetalert2.min.css";
import styles from "./Footer.module.css";

export default function SiteFooter() {
  const openContact = async () => {
    const { value } = await Swal.fire({
      title: "Contacto",
      html: `
        <div class="${styles.swalForm}">
          <div class="${styles.grid2}">
            <input id="swal-name" class="${styles.input}" placeholder="Tu nombre" />
            <input id="swal-email" class="${styles.input}" placeholder="Tu email" type="email" />
          </div>
          <textarea id="swal-message" class="${styles.textarea}" rows="4" placeholder="Contanos qué necesitás"></textarea>
        </div>
      `,
      width: 600,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: styles.swalPopup,
        title: styles.swalTitle,
        confirmButton: "btn btn-primary",
        cancelButton: styles.swalCancelBtn,
      },
      buttonsStyling: false,
      preConfirm: () => {
        const name = document.getElementById("swal-name").value.trim();
        const email = document.getElementById("swal-email").value.trim();
        const message = document.getElementById("swal-message").value.trim();

        if (!name || !email || !message) {
          Swal.showValidationMessage("Completá todos los campos.");
          return;
        }
        const okEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        if (!okEmail) {
          Swal.showValidationMessage("Ingresá un email válido.");
          return;
        }
        return { name, email, message };
      },
    });

    if (!value) return;

    try {
      const form = new FormData();
      form.append("name", value.name);
      form.append("email", value.email);
      form.append("message", value.message);

      const res = await fetch("/send.php", { method: "POST", body: form });
      if (!res.ok) throw new Error("send_error");

      await Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Te contactamos a la brevedad.",
        confirmButtonText: "Ok",
        customClass: { confirmButton: "btn btn-primary" },
        buttonsStyling: false,
      });
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "No pudimos enviar el mensaje",
        text: "Probá de nuevo o escribinos por WhatsApp.",
        confirmButtonText: "Entendido",
        customClass: { confirmButton: "btn btn-primary" },
        buttonsStyling: false,
      });
    }
  };

return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerTop}>
          <div>
            <h3 className={styles.footerTitle}>
              ¿Querés organizar un evento o necesitás más información?
            </h3>
            <button
              className="btn btn-primary"
              type="button"
              onClick={openContact}
            >
              Contactanos
            </button>
          </div>

          <SocialIcons />
        </div>

        <p className={styles.powered}>Powered by Custom</p>
      </div>
    </footer>
  );
}