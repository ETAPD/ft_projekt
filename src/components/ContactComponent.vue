<template>
  <section class="container-kont">
    <div class="row">
      <div class="col-md-6">
        <!-- Mapa -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21231.406248437543!2d18.028099045874555!3d48.304278844091776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee43b2f6763%3A0x75a567f979f5bed3!2sConstantine%20the%20Philosopher%20University!5e0!3m2!1sen!2ssk!4v1702651097091!5m2!1sen!2ssk"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-md-6">
        <!-- Formular -->
        <h1>Kontaktujte nás</h1>
        <p>Spýtajte sa nás na čokoľvek.</p>
        <form action="thankyou.html">
          <div class="mb-3">
            <label for="name" class="form-label">Meno</label>
            <div class="input-icon">
              <i class="fas fa-user"></i>
              <input type="text" class="form-control" id="name" required />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <div class="input-icon">
              <i class="fas fa-envelope"></i>
              <input type="email" class="form-control" id="email" placeholder="" required />
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Správa</label>
            <div class="input-icon">
              <i class="fas fa-comment"></i>
              <textarea class="form-control" id="message" rows="3" required></textarea>
            </div>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="consent" required />
            <label class="form-check-label" for="consent"
              >Súhlasím so spracovaním osobných údajov</label
            >
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Poslať správu</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style>
.container-kont {
  box-sizing: border-box;
  width: 100%;
  -webkit-box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 29px 81px 0px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  padding: 15px;
  transition: transform 0.5s ease;
}

.container-kont:hover {
  transform: scale(1.05);
}

main {
  margin: 100px;
}

main form button {
  border-radius: 30px !important;
  background-color: #ff4e00 !important;
  border: none !important;
  color: white !important;
  padding: 12px 50px !important;
}
main form button:hover {
  background-color: #f09440 !important;
}
#message {
  resize: none;
}
.input-icon {
  position: relative;
}

.input-icon i {
  position: absolute;
  left: 10px;
  top: 10px;
}

.input-icon .form-control {
  padding-left: 30px;
}
.row {
  display: flex;
  flex-direction: row;
  padding: 25px 0px;
  justify-content: flex-start;
}
.row .col-3 {
  width: 30%;
}
</style>
