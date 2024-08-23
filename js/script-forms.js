
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('https://formspree.io/f/manwpkpw', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {

            this.reset();

            document.getElementById('thankYouMessage').style.display = 'block';

            setTimeout(function () {
                document.getElementById('thankYouMessage').style.display = 'none';
            }, 4000);
        } else {
            alert('Ops! Ocorreu um problema ao enviar o formulário.');
        }
    } catch (error) {
        alert('Erro de rede. Por favor, tente novamente.');
    }
});

document.getElementById('closeThankYou').addEventListener('click', function () {
    document.getElementById('thankYouMessage').style.display = 'none';
});
