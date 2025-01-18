<template>
  <div class="container">
    <h1>Kontakt</h1>
    <p>
      Máte otázky, návrhy alebo potrebujete pomoc? Sme tu pre vás a radi vám pomôžeme! Naša komunita
      herných nadšencov je vždy pripravená odpovedať na vaše otázky a poskytnúť potrebnú podporu. Či
      už máte technický problém, návrh na zlepšenie, alebo len chcete zdieľať svoje herné zážitky,
      neváhajte nás kontaktovať.
    </p>

    <div class="contact-info">
      <p>
        <strong>Email:</strong>
        <a href="mailto:tuan.anh.emil.pham.dac@student.ukf.sk">Mail</a>
      </p>
      <p>
        Snažíme sa odpovedať na všetky e-maily čo najrýchlejšie. Ak máte konkrétnu otázku alebo
        potrebujete pomoc, napíšte nám a my sa vám ozveme čo najskôr.
      </p>

      <p><strong>Sociálne siete:</strong></p>
      <ul class="social-links">
        <li>
          <a href="https://www.facebook.com/tvojedomena" target="_blank">Facebook</a>
        </li>
        <li><a href="https://www.twitter.com/tvojedomena" target="_blank">Twitter</a></li>
        <li>
          <a href="https://www.instagram.com/tvojedomena" target="_blank">Instagram</a>
        </li>
      </ul>
    </div>

    <p>
      Našou misiou je vytvoriť priateľské a podporujúce prostredie, kde sa každý hráč môže cítiť
      vítaný a ocenený. Chceme, aby ste sa cítili súčasťou našej komunity a mali prístup k všetkým
      potrebným informáciám a podpore. Nezáleží na tom, či ste začiatočník alebo skúsený hráč, sme
      tu pre vás, aby sme vám pomohli zlepšiť váš herný zážitok.
    </p>

    <p>
      Radi odpovieme na všetky vaše otázky a tešíme sa na spoluprácu s vami. Ďakujeme, že ste
      súčasťou našej komunity a tešíme sa na vaše správy!
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: #333;
}
main {
  margin-top: 14%;
}
.container {
  width: 75%;
  margin: 10%;
  background-color: rgb(167, 165, 165);
  border-radius: 15px;
  padding: 20px;
}
p {
  margin-bottom: 20px;
}
.contact-info {
  font-size: 18px;
}
.contact-info a {
  color: #0066cc;
  text-decoration: none;
}
.contact-info a:hover {
  color: #ff4e00;
  text-decoration: underline;
}
.social-links {
  list-style: none;
  padding: 0;
}
.social-links li {
  display: inline;
  margin-right: 10px;
}
.social-links a {
  color: #0066cc;
  text-decoration: none;
}
.social-links a:hover {
  text-decoration: underline;
}
</style>
