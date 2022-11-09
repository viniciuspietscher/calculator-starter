import Calculator from "../../components/Calculator"

describe("Calculator.cy.js", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(800, 600)
  })
  it("renders component", () => {
    cy.mount(<Calculator />)
    cy.get("label").contains("First Number").should("be.visible")
    cy.get("label").contains("Second Number").should("be.visible")
    cy.get("#first").type("3").should("have.value", "3")
    cy.get("#second").type("9").should("have.value", "9")
    cy.get("#operation").select("add").should("have.value", "add")
    cy.get("button").contains("Calculate").should("be.visible")
  })
})
