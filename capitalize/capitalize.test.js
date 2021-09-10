const capitalize = require("./capitalize");

test("all lower case", () => {
  expect(capitalize("all lower case")).toBe("ALL LOWER CASE");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("All upper already", () => {
  expect(capitalize("ALL UPPER ALREADY")).toBe("ALL UPPER ALREADY");
});

test("Works with punctuation", () => {
  expect(capitalize("sdfj£$*&")).toBe("SDFJ£$*&");
});

test("Works with upper and lower case", () => {
  expect(capitalize("jnfdbhagliweu;ji43805964piweto;kld'sfj0u43r")).toBe(
    "JNFDBHAGLIWEU;JI43805964PIWETO;KLD'SFJ0U43R"
  );
});
