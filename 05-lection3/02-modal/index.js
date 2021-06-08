const close = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const modalOpen = document.getElementById('modal-open');

(function() {

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('input-name').focus();
        window.addEventListener('keyup', trapFocus);
    });

    close.addEventListener('click', () => {
        closeModal();
    });

    close.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById("modal-close").click();
        }
    });

})();


function trapFocus() {
    const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'initial';
    window.removeEventListener('keyup', trapFocus);
    modalOpen.focus();
}
