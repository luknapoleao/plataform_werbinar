document.querySelectorAll('.control-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const description = btn.getAttribute('data-description');
    document.querySelector('.tooltip').textContent = description;
    document.querySelector('.tooltip').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.tooltip').style.display = 'none';
    }, 2000);
  });
});
