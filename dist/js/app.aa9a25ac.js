(function () {
  "use strict";
  var e = {
      7411: function (e, t, a) {
        var o = a(1387),
          r = a(6768),
          s = a(5130),
          n = a(4232);
        const l = { class: "login-page" },
          i = { class: "auth-container" },
          u = { key: 0, class: "error" },
          c = { class: "forgot-password" },
          d = { key: 1, class: "error" },
          m = { class: "links" };
        function h(e, t, a, o, h, p) {
          const k = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", l, [
              (0, r.Lk)("div", i, [
                t[8] || (t[8] = (0, r.Lk)("h1", null, "Login", -1)),
                (0, r.Lk)(
                  "form",
                  {
                    onSubmit:
                      t[2] ||
                      (t[2] = (0, s.D$)(
                        (...e) => p.handleSubmit && p.handleSubmit(...e),
                        ["prevent"]
                      )),
                  },
                  [
                    t[4] || (t[4] = (0, r.Lk)("label", null, "Email:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (h.formData.email = e)),
                          placeholder: "Enter your email",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, h.formData.email]]
                    ),
                    h.emailError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", u, (0, n.v_)(h.emailError), 1))
                      : (0, r.Q3)("", !0),
                    t[5] || (t[5] = (0, r.Lk)("label", null, "Password:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "password",
                          "onUpdate:modelValue":
                            t[1] || (t[1] = (e) => (h.formData.password = e)),
                          name: "password",
                          id: "password",
                          placeholder: "Enter your password",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, h.formData.password]]
                    ),
                    (0, r.Lk)("div", c, [
                      (0, r.bF)(
                        k,
                        { to: "/forgot-password" },
                        {
                          default: (0, r.k6)(
                            () =>
                              t[3] || (t[3] = [(0, r.eW)("Forgot Password")])
                          ),
                          _: 1,
                        }
                      ),
                    ]),
                    h.passwordError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", d, (0, n.v_)(h.passwordError), 1))
                      : (0, r.Q3)("", !0),
                    t[6] ||
                      (t[6] = (0, r.Lk)(
                        "button",
                        { type: "submit" },
                        "Login",
                        -1
                      )),
                  ],
                  32
                ),
                (0, r.Lk)("div", m, [
                  (0, r.bF)(
                    k,
                    { to: "/register" },
                    {
                      default: (0, r.k6)(
                        () => t[7] || (t[7] = [(0, r.eW)("Sign Up Here")])
                      ),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ])
          );
        }
        a(4114);
        var p = a(4373),
          k = {
            data() {
              return {
                formData: { email: "", password: "" },
                emailError: null,
                passwordError: null,
              };
            },
            methods: {
              validateInputs() {
                let e = !0;
                return (
                  this.formData.email
                    ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                        this.formData.email
                      )
                      ? (this.emailError = null)
                      : ((this.emailError = "Enter a valid email address."),
                        (e = !1))
                    : ((this.emailError = "Email is required."), (e = !1)),
                  this.formData.password
                    ? (this.passwordError = null)
                    : ((this.passwordError = "Password is required."),
                      (e = !1)),
                  e
                );
              },
              handleSubmit() {
                this.validateInputs() &&
                  (console.log("Login Data:", this.formData),
                  (0, p.A)({
                    method: "POST",
                    url: "https://backend-fullstack-a6fo.onrender.com/api/v1/login",
                    data: {
                      email: this.formData.email,
                      password: this.formData.password,
                    },
                  })
                    .then((e) => {
                      console.log(e),
                        void 0 !== e?.data?.token &&
                          (this.$store.dispatch("login", e?.data?.token),
                          this.$store.dispatch("fetchCart"),
                          this.$router.push("/"));
                    })
                    .catch((e) => {
                      console.log(e),
                        (this.passwordError = e?.response.data?.message);
                    }));
              },
            },
          },
          g = a(1241);
        const f = (0, g.A)(k, [
          ["render", h],
          ["__scopeId", "data-v-3add8152"],
        ]);
        var v = f;
        const E = { class: "lesson-page" },
          b = { class: "sorting-container" },
          L = { class: "sorting-controls" },
          C = { class: "search-input" },
          w = { class: "lesson-container" };
        function y(e, t, a, o, l, i) {
          const u = (0, r.g2)("font-awesome-icon"),
            c = (0, r.g2)("LessonCard");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", E, [
              t[4] || (t[4] = (0, r.Lk)("h1", null, "Lessons", -1)),
              (0, r.Lk)("div", b, [
                (0, r.Lk)("div", L, [
                  (0, r.bo)(
                    (0, r.Lk)(
                      "select",
                      {
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (e) => (l.sortBy = e)),
                      },
                      t[3] ||
                        (t[3] = [
                          (0, r.Lk)("option", { value: "name" }, "Name", -1),
                          (0, r.Lk)(
                            "option",
                            { value: "location" },
                            "Location",
                            -1
                          ),
                          (0, r.Lk)("option", { value: "price" }, "Price", -1),
                          (0, r.Lk)(
                            "option",
                            { value: "spaces" },
                            "Spaces",
                            -1
                          ),
                        ]),
                      512
                    ),
                    [[s.u1, l.sortBy]]
                  ),
                  (0, r.Lk)(
                    "button",
                    {
                      onClick:
                        t[1] ||
                        (t[1] = (...e) => i.toggleOrder && i.toggleOrder(...e)),
                    },
                    (0, n.v_)(l.ascending ? "Ascending" : "Descending"),
                    1
                  ),
                ]),
                (0, r.Lk)("div", C, [
                  (0, r.bo)(
                    (0, r.Lk)(
                      "input",
                      {
                        class: "inputValue",
                        type: "text",
                        "onUpdate:modelValue":
                          t[2] || (t[2] = (e) => (l.searchQuery = e)),
                        placeholder: "Search lessons...",
                      },
                      null,
                      512
                    ),
                    [[s.Jo, l.searchQuery]]
                  ),
                  (0, r.bF)(
                    u,
                    { icon: "xmark", onClick: i.clearSearch },
                    null,
                    8,
                    ["onClick"]
                  ),
                ]),
              ]),
              (0, r.Lk)("div", w, [
                ((0, r.uX)(!0),
                (0, r.CE)(
                  r.FK,
                  null,
                  (0, r.pI)(
                    i.filteredAndSortedLessons,
                    (t) => (
                      (0, r.uX)(),
                      (0, r.Wv)(
                        c,
                        { key: t.id, lesson: t, onAddToCart: e.addToCart },
                        null,
                        8,
                        ["lesson", "onAddToCart"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        a(8992), a(4520);
        var _ = a(782);
        const A = { class: "lesson-card" },
          D = ["src"],
          S = { class: "subject-class" },
          I = ["disabled"];
        function T(e, t, a, o, s, l) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", A, [
              (0, r.Lk)(
                "img",
                {
                  class: "lesson-img",
                  src:
                    `https://backend-fullstack-a6fo.onrender.com/${a.lesson.photo}` ||
                    "./123.png",
                  alt: "hello",
                },
                null,
                8,
                D
              ),
              (0, r.Lk)("div", S, [
                (0, r.Lk)("h2", null, (0, n.v_)(a.lesson.name), 1),
                (0, r.Lk)("p", null, "$" + (0, n.v_)(a.lesson.price), 1),
              ]),
              (0, r.Lk)(
                "p",
                null,
                "Location: " + (0, n.v_)(a.lesson.location),
                1
              ),
              (0, r.Lk)(
                "p",
                null,
                "Spaces Left: " + (0, n.v_)(a.lesson.stock),
                1
              ),
              (0, r.Lk)(
                "button",
                {
                  disabled: 0 === a.lesson.stock,
                  onClick: t[0] || (t[0] = (e) => l.addToCartHandler(a.lesson)),
                },
                " Add to Cart ",
                8,
                I
              ),
            ])
          );
        }
        var F = {
          props: ["lesson"],
          methods: {
            ...(0, _.i0)(["addToCart"]),
            addToCartHandler(e) {
              this.addToCart({ productId: e._id, quantity: 1 });
            },
          },
        };
        const P = (0, g.A)(F, [
          ["render", T],
          ["__scopeId", "data-v-3b28828e"],
        ]);
        var X = P,
          O = {
            components: { LessonCard: X },
            data() {
              return { sortBy: "name", ascending: !0, searchQuery: "" };
            },
            computed: {
              ...(0, _.L8)(["lessons"]),
              filteredLessons() {
                if (!this.searchQuery.trim()) return this.lessons;
                const e = this.searchQuery.toLowerCase();
                return this.lessons.filter((t) => {
                  const a = t.name?.toLowerCase() || "",
                    o = t.location?.toLowerCase() || "",
                    r = t.price?.toString() || "",
                    s = t.spaces?.toString() || "";
                  return (
                    a.includes(e) ||
                    o.includes(e) ||
                    r.includes(e) ||
                    s.includes(e)
                  );
                });
              },
              filteredAndSortedLessons() {
                return [...this.filteredLessons].sort((e, t) => {
                  const a = e[this.sortBy] > t[this.sortBy] ? 1 : -1;
                  return this.ascending ? a : -a;
                });
              },
            },
            methods: {
              ...(0, _.i0)(["addToCart", "fetchLessons"]),
              toggleOrder() {
                this.ascending = !this.ascending;
              },
              clearSearch() {
                this.searchQuery = "";
              },
            },
            mounted() {
              this.fetchLessons();
            },
          };
        const $ = (0, g.A)(O, [
          ["render", y],
          ["__scopeId", "data-v-4b202c69"],
        ]);
        var q = $;
        const N = { class: "cart-page" },
          Q = { class: "cart-container" },
          W = { class: "cart-box" },
          z = { class: "cart-item-container" },
          B = ["onClick"],
          V = { key: 0, class: "form-container" },
          U = { class: "checkout-form" },
          R = { key: 0, class: "error" },
          x = { key: 1, class: "error" },
          J = { class: "cart-btn-container" },
          Z = ["disabled"],
          j = { key: 1, class: "success-message" };
        function M(e, t, a, o, l, i) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", N, [
              (0, r.Lk)("div", Q, [
                t[6] || (t[6] = (0, r.Lk)("h1", null, "Shopping Cart", -1)),
                (0, r.Lk)("div", W, [
                  (0, r.Lk)("ul", z, [
                    ((0, r.uX)(!0),
                    (0, r.CE)(
                      r.FK,
                      null,
                      (0, r.pI)(
                        e.cartItems,
                        (e) => (
                          (0, r.uX)(),
                          (0, r.CE)("li", { class: "cart-item", key: e._id }, [
                            (0, r.eW)(
                              (0, n.v_)(e.name) +
                                " - $" +
                                (0, n.v_)(e.price) +
                                " (Quantity: " +
                                (0, n.v_)(e.quantity) +
                                ") ",
                              1
                            ),
                            (0, r.Lk)(
                              "button",
                              { onClick: (t) => i.removeItem(e.productId) },
                              "Remove",
                              8,
                              B
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                    (0, r.Lk)(
                      "p",
                      null,
                      "Total Items: " + (0, n.v_)(e.cartCount),
                      1
                    ),
                  ]),
                ]),
                e.cartCount > 0
                  ? ((0, r.uX)(),
                    (0, r.CE)(
                      "button",
                      {
                        key: 0,
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            i.toggleCheckoutForm && i.toggleCheckoutForm(...e)),
                        class: "checkout-btn",
                      },
                      " Checkout "
                    ))
                  : (0, r.Q3)("", !0),
              ]),
              l.showCheckoutForm
                ? ((0, r.uX)(),
                  (0, r.CE)("div", V, [
                    (0, r.Lk)("div", U, [
                      (0, r.Lk)("label", null, [
                        t[7] || (t[7] = (0, r.eW)(" Name: ")),
                        (0, r.bo)(
                          (0, r.Lk)(
                            "input",
                            {
                              "onUpdate:modelValue":
                                t[1] || (t[1] = (e) => (l.name = e)),
                              type: "text",
                              placeholder: "Enter your name",
                            },
                            null,
                            512
                          ),
                          [[s.Jo, l.name]]
                        ),
                      ]),
                      i.nameError
                        ? ((0, r.uX)(),
                          (0, r.CE)("span", R, (0, n.v_)(i.nameError), 1))
                        : (0, r.Q3)("", !0),
                      (0, r.Lk)("label", null, [
                        t[8] || (t[8] = (0, r.eW)(" Phone: ")),
                        (0, r.bo)(
                          (0, r.Lk)(
                            "input",
                            {
                              "onUpdate:modelValue":
                                t[2] || (t[2] = (e) => (l.phone = e)),
                              type: "text",
                              placeholder: "Enter your phone number",
                            },
                            null,
                            512
                          ),
                          [[s.Jo, l.phone]]
                        ),
                      ]),
                      i.phoneError
                        ? ((0, r.uX)(),
                          (0, r.CE)("span", x, (0, n.v_)(i.phoneError), 1))
                        : (0, r.Q3)("", !0),
                      (0, r.Lk)("div", J, [
                        (0, r.Lk)(
                          "button",
                          {
                            onClick:
                              t[3] ||
                              (t[3] = (...e) =>
                                i.handleCancel && i.handleCancel(...e)),
                            class: "button",
                          },
                          "Cancel"
                        ),
                        (0, r.Lk)(
                          "button",
                          {
                            disabled: !i.isCheckoutEnabled,
                            onClick:
                              t[4] ||
                              (t[4] = (...e) =>
                                i.handleCheckout && i.handleCheckout(...e)),
                            class: "submit-btn",
                          },
                          " Submit Order ",
                          8,
                          Z
                        ),
                      ]),
                    ]),
                  ]))
                : (0, r.Q3)("", !0),
              l.checkoutMessage
                ? ((0, r.uX)(),
                  (0, r.CE)("div", j, (0, n.v_)(l.checkoutMessage), 1))
                : (0, r.Q3)("", !0),
              l.checkoutMessage
                ? ((0, r.uX)(),
                  (0, r.CE)(
                    "button",
                    {
                      key: 2,
                      onClick:
                        t[5] ||
                        (t[5] = (...e) =>
                          i.handleNavigate && i.handleNavigate(...e)),
                      class: "view-order-btn",
                    },
                    " View Order "
                  ))
                : (0, r.Q3)("", !0),
            ])
          );
        }
        var H = {
          data() {
            return {
              name: "",
              phone: "",
              showCheckoutForm: !1,
              checkoutMessage: "",
            };
          },
          computed: {
            ...(0, _.L8)(["cartItems", "cartCount"]),
            nameError() {
              return this.name && !/^[A-Za-z\s]+$/.test(this.name)
                ? "Name must only contain letters."
                : null;
            },
            phoneError() {
              return this.phone && !/^\d+$/.test(this.phone)
                ? "Phone number must only contain numbers."
                : null;
            },
            isCheckoutEnabled() {
              return (
                this.name.trim() &&
                !this.nameError &&
                this.phone.trim() &&
                !this.phoneError &&
                this.cartItems.length > 0
              );
            },
          },
          methods: {
            ...(0, _.i0)(["removeItemFromCart", "fetchCart", "clearCart"]),
            toggleCheckoutForm() {
              this.showCheckoutForm = !this.showCheckoutForm;
            },
            handleCheckout() {
              const e = localStorage.getItem("token");
              (0, p.A)({
                method: "POST",
                url: "https://backend-fullstack-a6fo.onrender.com/api/v1/create-order",
                headers: { Authorization: `Bearer ${e}` },
                data: { name: this.name, phone: this.phone },
              })
                .then((e) => {
                  (this.checkoutMessage = `Order submitted successfully for ${this.name}. Thank you!`),
                    (this.name = ""),
                    (this.phone = ""),
                    (this.showCheckoutForm = !1),
                    console.log(e),
                    this.fetchCart(),
                    this.clearCart();
                })
                .catch((e) => {
                  console.log(e),
                    (this.name = ""),
                    (this.phone = ""),
                    (this.showCheckoutForm = !1);
                });
            },
            handleCancel() {
              (this.name = ""), (this.phone = ""), (this.showCheckoutForm = !1);
            },
            handleNavigate() {
              this.$router.push("/view-order");
            },
            removeItem(e) {
              this.removeItemFromCart(e);
            },
          },
          mounted() {
            this.fetchCart();
          },
        };
        const K = (0, g.A)(H, [
          ["render", M],
          ["__scopeId", "data-v-e402bf32"],
        ]);
        var G = K;
        const Y = { class: "register-page" },
          ee = { class: "auth-container" },
          te = { key: 0, class: "error" },
          ae = { key: 1, class: "error" },
          oe = { key: 2, class: "error" },
          re = { class: "links" };
        function se(e, t, a, o, l, i) {
          const u = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", Y, [
              (0, r.Lk)("div", ee, [
                t[9] || (t[9] = (0, r.Lk)("h1", null, "Register", -1)),
                (0, r.Lk)(
                  "form",
                  {
                    onSubmit:
                      t[3] ||
                      (t[3] = (0, s.D$)(
                        (...e) => i.handleSubmit && i.handleSubmit(...e),
                        ["prevent"]
                      )),
                  },
                  [
                    t[4] || (t[4] = (0, r.Lk)("label", null, "Name:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (l.formData.name = e)),
                          placeholder: "Enter your name",
                          id: "name",
                          name: "name",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, l.formData.name]]
                    ),
                    l.nameError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", te, (0, n.v_)(l.nameError), 1))
                      : (0, r.Q3)("", !0),
                    t[5] || (t[5] = (0, r.Lk)("label", null, "Email:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "email",
                          "onUpdate:modelValue":
                            t[1] || (t[1] = (e) => (l.formData.email = e)),
                          placeholder: "Enter your email",
                          name: "email",
                          id: "email",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, l.formData.email]]
                    ),
                    l.emailError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", ae, (0, n.v_)(l.emailError), 1))
                      : (0, r.Q3)("", !0),
                    t[6] || (t[6] = (0, r.Lk)("label", null, "Password:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "password",
                          "onUpdate:modelValue":
                            t[2] || (t[2] = (e) => (l.formData.password = e)),
                          placeholder: "Enter your password",
                          name: "password",
                          id: "password",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, l.formData.password]]
                    ),
                    l.passwordError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", oe, (0, n.v_)(l.passwordError), 1))
                      : (0, r.Q3)("", !0),
                    t[7] ||
                      (t[7] = (0, r.Lk)(
                        "button",
                        { type: "submit" },
                        "Register",
                        -1
                      )),
                  ],
                  32
                ),
                (0, r.Lk)("div", re, [
                  (0, r.bF)(
                    u,
                    { to: "/login" },
                    {
                      default: (0, r.k6)(
                        () =>
                          t[8] ||
                          (t[8] = [(0, r.eW)("Already have an account?")])
                      ),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ])
          );
        }
        var ne = {
          data() {
            return {
              formData: { name: "", email: "", password: "" },
              nameError: null,
              emailError: null,
              passwordError: null,
            };
          },
          methods: {
            validateInputs() {
              let e = !0;
              return (
                this.formData.name.trim()
                  ? /^[A-Za-z\s]+$/.test(this.formData.name)
                    ? (this.nameError = null)
                    : ((this.nameError = "Name must only contain letters."),
                      (e = !1))
                  : ((this.nameError = "Name is required."), (e = !1)),
                this.formData.email.trim()
                  ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      this.formData.email
                    )
                    ? (this.emailError = null)
                    : ((this.emailError = "Enter a valid email address."),
                      (e = !1))
                  : ((this.emailError = "Email is required."), (e = !1)),
                this.formData.password.trim()
                  ? this.formData.password.length < 6
                    ? ((this.passwordError =
                        "Password must be at least 6 characters long."),
                      (e = !1))
                    : (this.passwordError = null)
                  : ((this.passwordError = "Password is required."), (e = !1)),
                e
              );
            },
            handleSubmit() {
              this.validateInputs() &&
                (console.log("Register Data:", this.formData),
                (0, p.A)({
                  method: "POST",
                  url: "https://backend-fullstack-a6fo.onrender.com/api/v1/register",
                  data: {
                    name: this.formData.name,
                    email: this.formData.email,
                    password: this.formData.password,
                  },
                })
                  .then((e) => {
                    console.log(e),
                      (this.formData.name = ""),
                      (this.formData.email = ""),
                      (this.formData.password = ""),
                      this.$router.push("/login");
                  })
                  .catch((e) => {
                    console.log(e),
                      (this.formData.name = ""),
                      (this.formData.email = ""),
                      (this.formData.password = ""),
                      (this.passwordError = e?.response?.data?.message);
                  }));
            },
          },
        };
        const le = (0, g.A)(ne, [
          ["render", se],
          ["__scopeId", "data-v-b171930c"],
        ]);
        var ie = le;
        const ue = { class: "forgot-password-page" },
          ce = { class: "auth-container" },
          de = { key: 0, class: "error" },
          me = { key: 1, class: "error" },
          he = { class: "links" };
        function pe(e, t, a, o, l, i) {
          const u = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", ue, [
              (0, r.Lk)("div", ce, [
                t[7] || (t[7] = (0, r.Lk)("h1", null, "Forgot Password", -1)),
                (0, r.Lk)(
                  "form",
                  {
                    onSubmit:
                      t[2] ||
                      (t[2] = (0, s.D$)(
                        (...e) => i.handleSubmit && i.handleSubmit(...e),
                        ["prevent"]
                      )),
                  },
                  [
                    t[3] || (t[3] = (0, r.Lk)("label", null, "Email:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "email",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (l.formData.email = e)),
                          placeholder: "Enter your email",
                          name: "email",
                          id: "email",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, l.formData.email]]
                    ),
                    l.emailError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", de, (0, n.v_)(l.emailError), 1))
                      : (0, r.Q3)("", !0),
                    t[4] ||
                      (t[4] = (0, r.Lk)("label", null, "New Password:", -1)),
                    (0, r.bo)(
                      (0, r.Lk)(
                        "input",
                        {
                          type: "password",
                          "onUpdate:modelValue":
                            t[1] ||
                            (t[1] = (e) => (l.formData.newPassword = e)),
                          placeholder: "Enter your new password",
                        },
                        null,
                        512
                      ),
                      [[s.Jo, l.formData.newPassword]]
                    ),
                    l.passwordError
                      ? ((0, r.uX)(),
                        (0, r.CE)("span", me, (0, n.v_)(l.passwordError), 1))
                      : (0, r.Q3)("", !0),
                    t[5] ||
                      (t[5] = (0, r.Lk)(
                        "button",
                        { type: "submit" },
                        "Submit",
                        -1
                      )),
                  ],
                  32
                ),
                (0, r.Lk)("div", he, [
                  (0, r.bF)(
                    u,
                    { to: "/login" },
                    {
                      default: (0, r.k6)(
                        () => t[6] || (t[6] = [(0, r.eW)("Back to Login")])
                      ),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ])
          );
        }
        var ke = {
          data() {
            return {
              formData: { email: "", newPassword: "" },
              emailError: null,
              passwordError: null,
            };
          },
          methods: {
            validateInputs() {
              let e = !0;
              return (
                this.formData.email.trim()
                  ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      this.formData.email
                    )
                    ? (this.emailError = null)
                    : ((this.emailError = "Enter a valid email address."),
                      (e = !1))
                  : ((this.emailError = "Email is required."), (e = !1)),
                this.formData.newPassword.trim()
                  ? this.formData.newPassword.length < 6
                    ? ((this.passwordError =
                        "Password must be at least 6 characters long."),
                      (e = !1))
                    : (this.passwordError = null)
                  : ((this.passwordError = "Password is required."), (e = !1)),
                e
              );
            },
            handleSubmit() {
              this.validateInputs() &&
                (0, p.A)({
                  method: "PUT",
                  url: "https://backend-fullstack-a6fo.onrender.com/api/v1/forgot-password",
                  data: {
                    email: this.formData.email,
                    password: this.formData.newPassword,
                  },
                })
                  .then((e) => {
                    console.log(e),
                      (this.formData.email = ""),
                      (this.formData.newPassword = ""),
                      Xe.back("/login");
                  })
                  .catch((e) => {
                    console.log(e),
                      (this.passwordError = e?.response?.data?.message);
                  });
            },
          },
        };
        const ge = (0, g.A)(ke, [
          ["render", pe],
          ["__scopeId", "data-v-7d7d450d"],
        ]);
        var fe = ge;
        const ve = { class: "not-found" };
        function Ee(e, t, a, o, s, n) {
          const l = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", ve, [
              t[1] || (t[1] = (0, r.Lk)("h1", null, "404", -1)),
              t[2] ||
                (t[2] = (0, r.Lk)(
                  "p",
                  null,
                  "The page you are looking is not available for now.",
                  -1
                )),
              (0, r.bF)(
                l,
                { to: "/" },
                {
                  default: (0, r.k6)(
                    () => t[0] || (t[0] = [(0, r.eW)("Go Back Home")])
                  ),
                  _: 1,
                }
              ),
            ])
          );
        }
        var be = { name: "NotFound" };
        const Le = (0, g.A)(be, [
          ["render", Ee],
          ["__scopeId", "data-v-0ced61f0"],
        ]);
        var Ce = Le;
        const we = { class: "order-page" },
          ye = { key: 0, class: "order-list" },
          _e = { class: "order-items" },
          Ae = { key: 1, class: "no-orders" };
        function De(e, t, a, o, s, l) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", we, [
              t[9] || (t[9] = (0, r.Lk)("h1", null, "Order Details", -1)),
              s.orderData.length
                ? ((0, r.uX)(),
                  (0, r.CE)("div", ye, [
                    ((0, r.uX)(!0),
                    (0, r.CE)(
                      r.FK,
                      null,
                      (0, r.pI)(
                        s.orderData,
                        (e) => (
                          (0, r.uX)(),
                          (0, r.CE)(
                            "div",
                            { key: e._id, class: "order-card" },
                            [
                              t[6] ||
                                (t[6] = (0, r.Lk)(
                                  "h2",
                                  null,
                                  "Customer Information",
                                  -1
                                )),
                              (0, r.Lk)("p", null, [
                                t[0] ||
                                  (t[0] = (0, r.Lk)(
                                    "strong",
                                    null,
                                    "Name:",
                                    -1
                                  )),
                                (0, r.eW)(" " + (0, n.v_)(e.name), 1),
                              ]),
                              (0, r.Lk)("p", null, [
                                t[1] ||
                                  (t[1] = (0, r.Lk)(
                                    "strong",
                                    null,
                                    "Email:",
                                    -1
                                  )),
                                (0, r.eW)(" " + (0, n.v_)(e.email), 1),
                              ]),
                              (0, r.Lk)("p", null, [
                                t[2] ||
                                  (t[2] = (0, r.Lk)(
                                    "strong",
                                    null,
                                    "Phone:",
                                    -1
                                  )),
                                (0, r.eW)(" " + (0, n.v_)(e.phone), 1),
                              ]),
                              t[7] ||
                                (t[7] = (0, r.Lk)(
                                  "h3",
                                  null,
                                  "Items Ordered:",
                                  -1
                                )),
                              (0, r.Lk)("div", _e, [
                                ((0, r.uX)(!0),
                                (0, r.CE)(
                                  r.FK,
                                  null,
                                  (0, r.pI)(
                                    e.items,
                                    (e) => (
                                      (0, r.uX)(),
                                      (0, r.CE)(
                                        "div",
                                        {
                                          key: e.productId,
                                          class: "order-item",
                                        },
                                        [
                                          (0, r.Lk)("p", null, [
                                            t[3] ||
                                              (t[3] = (0, r.Lk)(
                                                "strong",
                                                null,
                                                "Product Name:",
                                                -1
                                              )),
                                            (0, r.eW)(
                                              " " + (0, n.v_)(e.name),
                                              1
                                            ),
                                          ]),
                                          (0, r.Lk)("p", null, [
                                            t[4] ||
                                              (t[4] = (0, r.Lk)(
                                                "strong",
                                                null,
                                                "Price:",
                                                -1
                                              )),
                                            (0, r.eW)(
                                              " $" + (0, n.v_)(e.price),
                                              1
                                            ),
                                          ]),
                                          (0, r.Lk)("p", null, [
                                            t[5] ||
                                              (t[5] = (0, r.Lk)(
                                                "strong",
                                                null,
                                                "Quantity:",
                                                -1
                                              )),
                                            (0, r.eW)(
                                              " " + (0, n.v_)(e.quantity),
                                              1
                                            ),
                                          ]),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : ((0, r.uX)(),
                  (0, r.CE)(
                    "div",
                    Ae,
                    t[8] ||
                      (t[8] = [(0, r.Lk)("p", null, "No orders found.", -1)])
                  )),
            ])
          );
        }
        var Se = {
          data() {
            return { orderData: [] };
          },
          methods: {
            fetchOrders() {
              const e = localStorage.getItem("token");
              (0, p.A)({
                method: "GET",
                url: "https://backend-fullstack-a6fo.onrender.com/api/v1/view-order",
                headers: { Authorization: `Bearer ${e}` },
              })
                .then((e) => {
                  this.orderData = e.data.Data;
                })
                .catch((e) => {
                  console.error("Error fetching orders:", e);
                });
            },
          },
          mounted() {
            this.fetchOrders();
          },
        };
        const Ie = (0, g.A)(Se, [
          ["render", De],
          ["__scopeId", "data-v-0009e561"],
        ]);
        var Te = Ie;
        const Fe = [
            {
              path: "/login",
              name: "Login",
              component: v,
              meta: { guest: !0 },
            },
            {
              path: "/register",
              name: "Register",
              component: ie,
              meta: { guest: !0 },
            },
            {
              path: "/forgot-password",
              name: "Forgot Password",
              component: fe,
              meta: { guest: !0 },
            },
            {
              path: "/",
              name: "Lesson Page",
              component: q,
              meta: { requiresAuth: !0 },
            },
            {
              path: "/cart",
              name: "Cart Page",
              component: G,
              meta: { requiresAuth: !0 },
            },
            { path: "/:pathMatch(.*)*", name: "NotFound", component: Ce },
            { path: "/view-order", name: "ViewOrder", component: Te },
          ],
          Pe = (0, o.aE)({ history: (0, o.LA)(), routes: Fe });
        Pe.beforeEach((e, t, a) => {
          const o = localStorage.getItem("token");
          return !e.meta.requiresAuth || (o && void 0 !== o)
            ? e.meta.guest && o
              ? a("/")
              : void a()
            : a("/login");
        });
        var Xe = Pe;
        const Oe = { id: "app" };
        function $e(e, t, a, o, s, n) {
          const l = (0, r.g2)("AppHeader"),
            i = (0, r.g2)("router-view"),
            u = (0, r.g2)("AppFooter");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", Oe, [
              (0, r.bF)(l),
              (0, r.Lk)("main", null, [(0, r.bF)(i)]),
              (0, r.bF)(u),
            ])
          );
        }
        const qe = { class: "app-footer" };
        function Ne(e, t, a, o, s, n) {
          return (
            (0, r.uX)(),
            (0, r.CE)(
              "footer",
              qe,
              t[0] ||
                (t[0] = [
                  (0, r.Lk)(
                    "p",
                    null,
                    "© 2024 Lesson Booking App. All rights reserved.",
                    -1
                  ),
                ])
            )
          );
        }
        var Qe = { props: ["Footer"] };
        const We = (0, g.A)(Qe, [["render", Ne]]);
        var ze = We;
        const Be = { class: "app-header" },
          Ve = { key: 0 };
        function Ue(e, t, a, o, s, n) {
          const l = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("header", Be, [
              t[4] || (t[4] = (0, r.Lk)("h1", null, "Lesson Booking App", -1)),
              e.isLoggedIn
                ? ((0, r.uX)(),
                  (0, r.CE)("nav", Ve, [
                    (0, r.bF)(
                      l,
                      { to: "/" },
                      {
                        default: (0, r.k6)(
                          () => t[1] || (t[1] = [(0, r.eW)("Home")])
                        ),
                        _: 1,
                      }
                    ),
                    e.isCartNotEmpty
                      ? ((0, r.uX)(),
                        (0, r.Wv)(
                          l,
                          { key: 0, to: "/cart" },
                          {
                            default: (0, r.k6)(
                              () => t[2] || (t[2] = [(0, r.eW)("Cart")])
                            ),
                            _: 1,
                          }
                        ))
                      : (0, r.Q3)("", !0),
                    (0, r.bF)(
                      l,
                      { to: "/view-order" },
                      {
                        default: (0, r.k6)(
                          () => t[3] || (t[3] = [(0, r.eW)("View Order")])
                        ),
                        _: 1,
                      }
                    ),
                    (0, r.Lk)(
                      "button",
                      {
                        class: "logout-button",
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            n.handleLogout && n.handleLogout(...e)),
                      },
                      "Logout"
                    ),
                  ]))
                : (0, r.Q3)("", !0),
            ])
          );
        }
        var Re = {
          computed: { ...(0, _.L8)(["isLoggedIn", "isCartNotEmpty"]) },
          methods: {
            ...(0, _.i0)(["fetchCart", "logout"]),
            handleLogout() {
              this.logout(), this.$router.push("/login");
            },
          },
          mounted() {
            this.isLoggedIn && this.fetchCart();
          },
        };
        const xe = (0, g.A)(Re, [
          ["render", Ue],
          ["__scopeId", "data-v-56ffed20"],
        ]);
        var Je = xe,
          Ze = { name: "App", components: { AppHeader: Je, AppFooter: ze } };
        const je = (0, g.A)(Ze, [["render", $e]]);
        var Me = je,
          He =
            (a(8872),
            (0, _.y$)({
              state: {
                token: localStorage.getItem("token"),
                cart: [],
                lessons: [],
              },
              mutations: {
                SET_TOKEN(e, t) {
                  e.token = t;
                },
                SET_LESSONS(e, t) {
                  e.lessons = t;
                },
                SET_CART(e, t) {
                  e.cart = [...t];
                },
                CLEAR_CART(e) {
                  e.cart = [];
                },
              },
              actions: {
                login({ commit: e }, t) {
                  localStorage.setItem("token", t), e("SET_TOKEN", t);
                },
                logout({ commit: e }) {
                  localStorage.removeItem("token"), e("SET_TOKEN", null);
                },
                clearCart({ commit: e }) {
                  e("CLEAR_CART");
                },
                fetchLessons({ commit: e }) {
                  const t = localStorage.getItem("token");
                  (0, p.A)({
                    method: "GET",
                    url: "https://backend-fullstack-a6fo.onrender.com/api/v1/fetch-all-products",
                    headers: { Authorization: `Bearer ${t}` },
                  })
                    .then((t) => {
                      e("SET_LESSONS", t.data.products);
                    })
                    .catch((e) => {
                      console.error("Error fetching lessons:", e);
                    });
                },
                addToCart({ dispatch: e }, { productId: t, quantity: a }) {
                  const o = localStorage.getItem("token");
                  (0, p.A)({
                    method: "POST",
                    url: "https://backend-fullstack-a6fo.onrender.com/api/v1/add-to-cart",
                    headers: { Authorization: `Bearer ${o}` },
                    data: { productId: t, quantity: a },
                  })
                    .then((t) => {
                      console.log(t.data.message),
                        e("fetchLessons"),
                        e("fetchCart");
                    })
                    .catch((e) => {
                      console.error(
                        "Error adding to cart:",
                        e.response?.data || e
                      );
                    });
                },
                fetchCart({ commit: e }) {
                  const t = localStorage.getItem("token");
                  (0, p.A)({
                    method: "GET",
                    url: "https://backend-fullstack-a6fo.onrender.com/api/v1/view-cart",
                    headers: { Authorization: `Bearer ${t}` },
                  })
                    .then((t) => {
                      e("SET_CART", t.data.Data.items);
                    })
                    .catch((e) => {
                      console.error("Error fetching cart:", e);
                    });
                },
                removeItemFromCart({ dispatch: e }, t) {
                  const a = localStorage.getItem("token");
                  (0, p.A)({
                    method: "POST",
                    url: "https://backend-fullstack-a6fo.onrender.com/api/v1/remove-item-from-cart",
                    headers: { Authorization: `Bearer ${a}` },
                    data: { productId: t },
                  })
                    .then((t) => {
                      console.log(t.data.message), e("fetchCart");
                    })
                    .catch((e) => {
                      console.error(
                        "Error removing item from cart:",
                        e.response?.data || e
                      );
                    });
                },
              },
              getters: {
                isLoggedIn: (e) => !!e.token,
                cartItems: (e) => e.cart,
                cartCount: (e) => e.cart.reduce((e, t) => e + t.quantity, 0),
                lessons: (e) => e.lessons,
                isCartNotEmpty: (e) => e.cart.length > 0,
              },
            })),
          Ke = a(8950),
          Ge = a(292),
          Ye = a(2353);
        Ke.Yv.add(Ye.Jyw, Ye._Ro),
          (0, s.Ef)(Me)
            .use(Xe)
            .use(He)
            .component("font-awesome-icon", Ge.gc)
            .mount("#app");
      },
    },
    t = {};
  function a(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var s = (t[o] = { exports: {} });
    return e[o].call(s.exports, s, s.exports, a), s.exports;
  }
  (a.m = e),
    (function () {
      var e = [];
      a.O = function (t, o, r, s) {
        if (!o) {
          var n = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (o = e[c][0]), (r = e[c][1]), (s = e[c][2]);
            for (var l = !0, i = 0; i < o.length; i++)
              (!1 & s || n >= s) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](o[i]);
              })
                ? o.splice(i--, 1)
                : ((l = !1), s < n && (n = s));
            if (l) {
              e.splice(c--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        s = s || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > s; c--) e[c] = e[c - 1];
        e[c] = [o, r, s];
      };
    })(),
    (function () {
      a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return a.d(t, { a: t }), t;
      };
    })(),
    (function () {
      a.d = function (e, t) {
        for (var o in t)
          a.o(t, o) &&
            !a.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      a.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var e = { 524: 0 };
      a.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, o) {
          var r,
            s,
            n = o[0],
            l = o[1],
            i = o[2],
            u = 0;
          if (
            n.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in l) a.o(l, r) && (a.m[r] = l[r]);
            if (i) var c = i(a);
          }
          for (t && t(o); u < n.length; u++)
            (s = n[u]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return a.O(c);
        },
        o = (self["webpackChunkecommerce_frontend"] =
          self["webpackChunkecommerce_frontend"] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = a.O(void 0, [504], function () {
    return a(7411);
  });
  o = a.O(o);
})();
//# sourceMappingURL=app.aa9a25ac.js.map
